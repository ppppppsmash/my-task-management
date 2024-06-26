"use server"

import { auth } from "@clerk/nextjs"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { ACTION, ENTITY_TYPE } from "@prisma/client"

import { InputType, ReturnType } from "@/actions/create-board/types"
import { CreateBoard } from "@/actions/create-board/schema"
import { createSafeAction } from "@/lib/create-safe-action"
import { createAuditLog } from "@/lib/create-audit-log"

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth()

  if (!userId || !orgId) {
    return {
      error: "未認証"
    }
  }

  const { title, image } = data

  const [
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHtml,
    imageUserName
  ] = image.split("|")

  if (!imageId || !imageThumbUrl || !imageFullUrl || !imageUserName || !imageLinkHtml) {
    return {
      error: "Missing fields. Failed to create board."
    }
  } 

  let board

  try {
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageUserName,
        imageLinkHtml
      }
    })

    await createAuditLog({
      entityTitle: board.title,
      entityId: board.id,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.CREATE
    })
  } catch(error) {
    return {
      error: "作成失敗"
    }
  }

  revalidatePath(`/board/${board.id}`)
  return { data: board }
}

export const createBoard = createSafeAction(CreateBoard, handler)

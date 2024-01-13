"use server"

import { auth } from "@clerk/nextjs"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

import { InputType, ReturnType } from "@/actions/create-board/types"
import { CreateBoard } from "@/actions/create-board/schema"
import { createSafeAction } from "@/lib/create-safe-action"

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth()

  if (!userId) {
    return {
      error: "未認証"
    }
  }

  const { title } = data

  let board

  try {
    board = await db.board.create({
      data: {
        title
      }
    })
  } catch(error) {
    return {
      error: "作成は失敗"
    }
  }

  revalidatePath(`/board/${board.id}`)
  return { data: board }
}

export const createBoard = createSafeAction(CreateBoard, handler)

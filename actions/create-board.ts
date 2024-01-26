"use server"

import { z } from "zod"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export type State = {
  errors?: {
    title?: string[]
  },
  message?: string | null
}

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Minimum length of 3 letters is required"
  })
})

export async function createBoard(prevState: State, formData: FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title")
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "必須項目"
    }
  }

  const { title } = validatedFields.data

  try {
    await db.board.create({
      data: {
        title,
      }
    })
  } catch(error) {
    return {
      message: "DBエラー"
    }
  }

  revalidatePath("/organization/org_2ZoGnLmrPqFQjGoPi5IotEDAmBX")
  redirect("/organization/org_2ZoGnLmrPqFQjGoPi5IotEDAmBX")
}
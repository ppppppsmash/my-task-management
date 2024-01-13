import { z } from "zod"

export const CreateBoard = z.object({
  title: z.string({
    required_error: "タイトルが必須項目",
    invalid_type_error: "タイトルが必須項目"
  }).min(3, {
    message: "テキストが短すぎる"
  })
})
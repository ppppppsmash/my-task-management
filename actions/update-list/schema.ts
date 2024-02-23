import { z } from "zod"

export const UpdateList = z.object({
  title: z.string({
    required_error: "タイトルは必須項目",
    invalid_type_error: "タイトルは必須項目"
  }).min(3, {
    message: "タイトルは短すぎる"
  }),
  id: z.string(),
  boardId: z.string()
})
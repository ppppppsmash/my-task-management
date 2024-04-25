import { z } from "zod"

export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z.string({
      required_error: "ディスクリプションは必須項目",
      invalid_type_error: "ディスクリプションは必須項目"
    }).min(3, {
      message: "ディスクリプションは短すぎる"
    })
  ),
  title: z.optional(
    z.string({
      required_error: "タイトルは必須項目",
      invalid_type_error: "タイトルは必須項目"
    }).min(3, {
      message: "タイトルは短すぎる"
  })),
  id: z.string()
})
"use client"

import { createBoard } from "@/actions/create-board/index"
import { FormInput } from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-input"
import { FormButton } from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-button"
import { useAction } from "@/hooks/use-action"

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "成功!")
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string

    execute({ title })
  }

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={fieldErrors} />
      </div>

      <FormButton />
    </form>
  )
}
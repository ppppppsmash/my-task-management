"use client"

import { useAction } from "@/hooks/use-action"
import { createBoard } from "@/actions/create-board/index"

import { FormButton } from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-button"
import { FormInput } from "@/components/form/form-input"


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

    console.log({ title })
    execute({ title })
  }

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput
          id="title"
          label="タイトル"
          errors={fieldErrors} />
      </div>

      <FormButton />
    </form>
  )
}
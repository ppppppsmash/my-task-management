"use client"

import { useFormState } from "react-dom"

import { Button } from "@/components/ui/button"
import { create } from "@/actions/create-board"
import { FormInput } from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-input"

export const Form = () => {
  const initialState = { message: null, errors: {} }
  const [state, dispatch] = useFormState(create, initialState)

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>

      <Button type="submit">
        送信
      </Button>
    </form>
  )
}
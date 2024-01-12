"use client"

import { create } from "@/actions/create-board"
import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom"

export const Form = () => {
  const initialState = { message: null, errors: {} }
  const [state, dispatch] = useFormState(create, initialState)

  return (
    <form action={dispatch}>
      <input
        id="title"
        name="title"
        placeholder="タイトルを入力してください"
        required
        className="border-black border p-1"
      />

      <Button type="submit">
        送信
      </Button>
    </form>
  )
}
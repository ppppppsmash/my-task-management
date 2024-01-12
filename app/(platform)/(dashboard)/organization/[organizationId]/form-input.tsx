"use client"

import { useFormStatus } from "react-dom"

interface FormInputProps {
  errors?: {
    title?: string[]
  }
}

export const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus()

  return (
    <div>
      <input
        id="title"
        name="title"
        placeholder="タイトルを入力してください"
        className="border-black border p-1"
        disabled={pending}
        required
      />

      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p
              key={error}
              className="text-rose-500"
            >
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  )
}
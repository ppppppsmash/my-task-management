"use client"

import { forwardRef } from "react"
import { useFormState } from "react-dom"
import { Label } from "@/components/ui/label"

interface FormInputProps {
  id: string
  label: string
  type: string
  placeholder: string
  required: boolean
  disabled: boolean
  errors?: Record<string, string[] | undefined>
  className?: string
  defaultValue?: string
  onBlur?: () => void
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
  id,
  label,
  type,
  placeholder,
  required,
  disabled,
  errors,
  className,
  defaultValue = "",
  onBlur
}, ref) => {
  const { pending } = useFormState()

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        {label ? (
          <Label>
            Label
          </Label>
        ) : null}
      </div>
    </div>
  )
})

FormInput.displayName = "formInput"
"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { useAction } from "@/hooks/use-action"
import { createBoard } from "@/actions/create-board"

import { FormInput } from "@/components/form/form-input"
import { FormSubmit } from "@/components/form/form-submit"
import React from "react"

interface FormPopoverProps {
  children: React.ReactNode
  side?: "left" | "right" | "top" | "bottom"
  align?: "start" | "center" | "end"
  sideOffset?: number
}

export const FormPopover = ({
  children,
  side = "bottom",
  align,
  sideOffset = 0
}: FormPopoverProps) =>  {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>

      <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          ボードを作成
        </div>
      </PopoverContent>
    </Popover>
  )
}
import { deleteBoard } from "@/actions/delete-board"
import { FormDelete } from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-delete"

interface BoardProps {
  title: string
  id: string
}

export const Board = ({
  title,
  id
}: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id)

  return (
    <form
      action={deleteBoardWithId}
      className="flex items-center gap-x-2"
    >
      <p>
        タイトル: {title}
      </p>
      
      <FormDelete />
    </form>
  )
}
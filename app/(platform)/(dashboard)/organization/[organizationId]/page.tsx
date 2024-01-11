import { db } from "@/lib/db"

import { create } from "@/actions/create-board"
import { Button } from "@/components/ui/button"
import { Board } from "@/app/(platform)/(dashboard)/organization/[organizationId]/board"

// http://localhost:3000/organization/xxx
const OrganizationIdPage = async () => {
  const boards = await db.board.findMany()
  
  console.log('ログインできた！')

  return (
    <div className="flex flex-col space-y-4">
      <form action={create}>
        <input
          id="title"
          name="title"
          placeholder="タイトルを入力してください"
          required
          className="border-black border p-1"
        />

        <Button>
          送信
        </Button>
      </form>

      <div className="space-y-2">
        { boards.map((board) => (
          <Board
            key={board.id}
            title={board.title}
            id={board.id}
          />
        )) }
      </div>
    </div>
  )
}

export default OrganizationIdPage
import { db } from "@/lib/db"
// http://localhost:3000/organization/xxx
import { OrganizationSwitcher, auth } from "@clerk/nextjs"

const OrganizationIdPage = () => {
  async function create(formData: FormData) {
    "use server"

    const title = formData.get("title") as string
    await db.board.create({
      data: {
        title,
      }
    })
  }
  console.log('ログインできた！')

  return (
    <div>
      <form action={create}>
        <input
          id="title"
          name="title"
          placeholder="タイトルを入力してください"
          required
          className="border-black border p-1"
        />
      </form>
    </div>
  )
}

export default OrganizationIdPage
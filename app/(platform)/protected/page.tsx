"use client"
// ログイン後ページ
import { auth, currentUser } from "@clerk/nextjs"

const ProtectedPage = async () => {
  const user = await currentUser()
  const { userId } = auth()
  
  return (
    <div>
      User: {user?.firstName}
      UserId: {userId}
    </div>
  )
}

export default ProtectedPage
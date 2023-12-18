"use client"
// ログイン後ページ
import { useAuth, useUser } from "@clerk/nextjs"

const ProtectedPage = () => {
  const { userId } = useAuth()
  const { user } = useUser()
  
  return (
    <div>
      User: {user?.firstName}
      UserId: {userId}
    </div>
  )
}

export default ProtectedPage
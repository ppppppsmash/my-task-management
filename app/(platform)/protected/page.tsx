"use client"
// ログイン後ページ
import { UserButton } from "@clerk/nextjs"

const ProtectedPage = () => {

  return (
    <div>
      <UserButton
        afterSignOutUrl = "/"
      />
    </div>
  )
}

export default ProtectedPage
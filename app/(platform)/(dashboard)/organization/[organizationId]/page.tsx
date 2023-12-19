// http://localhost:3000/organization/xxx
import { auth } from "@clerk/nextjs"

const OrganizationIdPage = () => {
  const { userId, orgId } = auth()

  return (
    <div>
      OrganizationId: { orgId }
    </div>
  )
}

export default OrganizationIdPage
// http://localhost:3000/organization/xxx
import { OrganizationSwitcher, auth } from "@clerk/nextjs"

const OrganizationIdPage = () => {
  const { userId, orgId } = auth()

  return (
    <div>
      <OrganizationSwitcher />
    </div>
  )
}

export default OrganizationIdPage
// http://localhost:3000/select-org
import { OrganizationList } from "@clerk/nextjs"

export default function CreateOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  )
}
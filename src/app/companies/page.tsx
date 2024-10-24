"use client"

import { cn } from "@/lib/utils"
import CompanyList from "@/app/companies/_components/company-list"
import SearchBar from "@/app/companies/_components/search-bar"


function Page() {
  return (
    <div className={cn("flex flex-col space-y-4 mt-10")}>
      <h1 className={"text-2xl"}>Companies</h1>
      <SearchBar className={"mt-10"} />
      <CompanyList />
    </div>
  )
}

export default Page

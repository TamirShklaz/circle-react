"use client"


import { cn } from "@/lib/utils"
import SearchBar from "@/app/movies/_components/search-bar"
import MovieList from "@/app/movies/_components/movie-list"

function Page() {


  return (
    <div className={cn("flex flex-col space-y-4")}>
      <h1 className={"text-2xl mt-10"}>Search Movies</h1>
      <SearchBar className={"mt-4"} />
      <MovieList />

    </div>
  )
}

export default Page

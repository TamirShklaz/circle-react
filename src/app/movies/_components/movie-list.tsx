import { cn } from "@/lib/utils"
import { useFilterStore } from "@/lib/hooks/filter-store"
import { fetcher } from "@/lib/utils/fetcher"
import { MovieResponse } from "@/lib/types/movie-response.types"
import MovieListItem from "@/app/movies/_components/movie-list-item"
import useSWRInfinite from "swr/infinite"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

type Props = { className?: string };

function MovieList({ className }: Props) {
  const filterStore = useFilterStore()

  const {
    data,
    error,
    isLoading,
    size,
    setSize,
  } = useSWRInfinite<MovieResponse>((index, previousPageData: MovieResponse) => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=a99cc60fc2b34dbb18cb806b8a88ed14&page=${index + 1}`
    if (filterStore.search) url += `&query=${filterStore.search}`
    console.log(url)
    if (!previousPageData) return url

    if (index + 1 > previousPageData.total_pages) return null

    return url
  }, fetcher)

  const { ref, inView } = useInView({
    threshold: 0.4,
  })

  const movies = data ? data.flatMap((page) => page?.results) : []
  const isEmpty = data?.length === 0

  const loadMore = () => {
    setSize((size) => size + 1)
  }


  useEffect(() => {
    if (inView) {
      loadMore()
    }
  }, [inView])

  if (isLoading) return <div>Loading...</div>

  //TODO: error handling
  if (error) return <div>Error</div>

  if (isEmpty || !data) return <div>Empty</div>


//TODO: Fix UI
  return (
    <div className={cn(className, "flex flex-col space-y-4")}>
      {movies.map((movie, index) => (
          <MovieListItem imageUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.title}
                         description={movie.overview} key={index} />
        ),
      )}

      <Button ref={ref} onClick={loadMore}>Load more</Button>

    </div>
  )
}

export default MovieList

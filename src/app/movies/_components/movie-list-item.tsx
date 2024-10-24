import { cn } from "@/lib/utils"
import { Film } from "lucide-react"
import { useState } from "react"
import Image from "next/image"


type Props = {
  className?: string,
  imageUrl: string
  title: string,
  description: string
};

function MovieListItem({ className, imageUrl, title, description }: Props) {
  const [imageError, setImageError] = useState(false)

  // TODO: Setup a fall backimage
  return (
    <div className={cn(
      "flex flex-row gap-4 bg-card text-card-foreground rounded-lg overflow-hidden transition-all hover:shadow-lg",
      className,
    )}>
      <div className="relative w-[166px] h-[250px] shrink-0 bg-muted">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center">
            <Film className="w-16 h-16 text-muted-foreground" />
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={`${title} Poster`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 166px"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="flex flex-col flex-grow p-4 sm:p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p
          className="text-sm text-muted-foreground flex-grow text-ellipsis line-clamp-3 overflow-hidden">{description}</p>
      </div>
    </div>
  )
}

export default MovieListItem

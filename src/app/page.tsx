import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clapperboard, Github, Globe } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold">Tamir Shklaz</h1>
          <p className="text-xl text-muted-foreground">Circle Medical React Interview</p>
        </div>
      </header>

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to My Interview Landing Page</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I&apos;m excited about the opportunity to interview with Circle Medical. This page serves as a quick
                reference
                for some important links related to my application.
              </p>
              <div className="flex flex-col gap-4">
                <Button asChild>
                  <Link href="/movies"
                        rel="noopener noreferrer">
                    <Clapperboard className="mr-2 h-4 w-4" /> View Movie App
                  </Link>
                </Button>
                <Button asChild variant={"outline"}>
                  <a href="https://github.com/TamirShklaz/circle-react" target="_blank"
                     rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Source Code
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://www.tamir.io/" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" /> Visit My Website
                  </a>
                </Button>
           
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tamir Shklaz. Created for Circle Medical interview.
        </div>
      </footer>
    </div>
  )
}
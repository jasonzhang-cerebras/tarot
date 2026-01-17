import { SpreadReadingPageClient } from "./spread-reading-page-client"

export function generateStaticParams() {
  return [
    { id: "single-card" },
    { id: "three-card" },
    { id: "celtic-cross" },
    { id: "relationship" },
    { id: "career" },
    { id: "yes-no" },
    { id: "four-directions" },
    { id: "five-card" },
    { id: "seven-card" },
    { id: "star" },
    { id: "mandala" },
    { id: "horseshoe" },
  ]
}

export default function SpreadReadingPage({ params }: { params: { id: string } }) {
  return <SpreadReadingPageClient spreadId={params.id} />
}

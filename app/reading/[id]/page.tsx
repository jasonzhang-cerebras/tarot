import { SpreadReadingPageClient } from "./spread-reading-page-client"

export function generateStaticParams() {
  return [{ id: "single" }, { id: "three-card" }, { id: "celtic-cross" }, { id: "relationship" }, { id: "career" }]
}

export default function SpreadReadingPage({ params }: { params: { id: string } }) {
  return <SpreadReadingPageClient spreadId={params.id} />
}

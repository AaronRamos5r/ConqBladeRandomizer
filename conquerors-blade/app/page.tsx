import { TeamBuilder } from '../components/TeamBuilder';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1c1c1c] text-white w-full">
      <TeamBuilder />
      <Analytics />
    </main>
  );
}


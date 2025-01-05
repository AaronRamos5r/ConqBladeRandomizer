import { Character } from '../types/character';
import Image from 'next/image';

interface SelectedTeamProps {
  team: Character[];
}

export function SelectedTeam({ team }: SelectedTeamProps) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Selected Team</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {team.map((character) => (
          <div key={character.id} className="flex flex-col items-center p-2 border rounded">
            <Image src={character.image} alt={character.name} width={100} height={100} className="mb-2" />
            <p className="text-sm font-semibold mb-1">{character.name}</p>
            <p className="text-xs">Leadership: {character.leadership}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


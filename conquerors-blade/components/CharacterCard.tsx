import { Character } from '../types/character';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';

interface CharacterCardProps {
  character: Character;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export function CharacterCard({ character, isSelected, onToggle }: CharacterCardProps) {
  return (
    <div 
      className={`flex flex-col items-center p-2 border rounded cursor-pointer transition-colors ${
        isSelected 
          ? 'bg-primary/20 border-primary' 
          : 'border-gray-700 hover:bg-gray-800'
      }`}
      onClick={() => onToggle(character.id)}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle(character.id);
        }
      }}
    >
      <Image src={character.image} alt={character.name} width={100} height={100} className="mb-2" />
      <p className="text-sm font-semibold mb-1 text-center">{character.name}</p>
      <p className="text-xs mb-2">Leadership: {character.leadership}</p>
      <div className="sr-only">
        <Checkbox
          checked={isSelected}
          onCheckedChange={() => onToggle(character.id)}
          aria-label={`Select ${character.name}`}
        />
      </div>
    </div>
  );
}


import { Character } from '../types/character';
import { CharacterCard } from './CharacterCard';

interface CharacterGridProps {
  characters: Character[];
  selectedCharacters: string[];
  onToggleCharacter: (id: string) => void;
}

export function CharacterGrid({ characters, selectedCharacters, onToggleCharacter }: CharacterGridProps) {
  const categories = ['Rustic', 'Chivalric', 'Silver', 'Heroic', 'Golden'];

  return (
    <div className="max-h-[60vh] overflow-y-auto space-y-6 p-4">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-xl font-bold mb-2">{category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
            {characters
              .filter((char) => char.category === category)
              .map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  isSelected={selectedCharacters.includes(character.id)}
                  onToggle={onToggleCharacter}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}


'use client'

import { useState } from 'react';
import { Character } from '../types/character';
import { characters } from '../data/characters';
import { LeadershipInput } from './LeadershipInput';
import { CharacterGrid } from './CharacterGrid';
import { SelectedTeam } from './SelectedTeam';
import { Button } from '@/components/ui/button';

export function TeamBuilder() {
  const [leadership, setLeadership] = useState<number | null>(null);
  const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);
  const [team, setTeam] = useState<Character[]>([]);
  const categories = ['Rustic', 'Chivalric', 'Silver', 'Heroic', 'Golden'];

  const handleLeadershipSubmit = (value: number) => {
    setLeadership(value);
  };

  const toggleCharacter = (id: string) => {
    setSelectedCharacters((prev) =>
      prev.includes(id) ? prev.filter((charId) => charId !== id) : [...prev, id]
    );
  };

  const selectRandomTeam = () => {
    if (leadership === null) return;

    let remainingLeadership = leadership;
    const newTeam: Character[] = [];
    const availableCharacters = characters.filter((char) => selectedCharacters.includes(char.id));

    while (remainingLeadership > 0 && newTeam.length < 10 && availableCharacters.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableCharacters.length);
      const selectedCharacter = availableCharacters[randomIndex];

      if (selectedCharacter.leadership <= remainingLeadership) {
        newTeam.push(selectedCharacter);
        remainingLeadership -= selectedCharacter.leadership;
        availableCharacters.splice(randomIndex, 1);
      } else {
        availableCharacters.splice(randomIndex, 1);
      }
    }

    setTeam(newTeam);
  };

  return (
    <div className="mx-auto px-4 py-8 dark">
      <h1 className="text-6xl font-bold mb-2 text-center">
        Conqueror's Blade Warband Randomizer
      </h1>
      <p className="text-3xl text-center mb-6 text-gray-400">Made by ASwizzle</p>
      <div className="flex items-center justify-between mb-6">
        <LeadershipInput onSubmit={handleLeadershipSubmit} />
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => setSelectedCharacters(characters.map(c => c.id))}
          >
            Select All
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setSelectedCharacters([])}
          >
            Deselect All
          </Button>
        </div>
      </div>
      {leadership !== null && (
        <>
          <CharacterGrid
            characters={characters}
            selectedCharacters={selectedCharacters}
            onToggleCharacter={toggleCharacter}
          />
          <Button onClick={selectRandomTeam} className="mt-6">
            GO
          </Button>
          {team.length > 0 && <SelectedTeam team={team} />}
        </>
      )}
    </div>
  );
}


export interface Character {
  id: string;
  name: string;
  leadership: number;
  category: 'Rustic' | 'Chivalric' | 'Silver' | 'Heroic' | 'Golden';
  image: string;
}


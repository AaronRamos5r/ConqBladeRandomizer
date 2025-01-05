import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface LeadershipInputProps {
  onSubmit: (leadership: number) => void;
}

export function LeadershipInput({ onSubmit }: LeadershipInputProps) {
  const [leadership, setLeadership] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const leadershipValue = parseInt(leadership, 10);
    if (!isNaN(leadershipValue) && leadershipValue > 0) {
      onSubmit(leadershipValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        type="number"
        value={leadership}
        onChange={(e) => setLeadership(e.target.value)}
        placeholder="Enter your leadership"
        className="w-48"
      />
      <Button type="submit">Set Leadership</Button>
    </form>
  );
}


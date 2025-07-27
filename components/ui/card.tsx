import { Github } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';

const cardColors = [
  'from-sunset-brown to-sunset-orange',
  'from-sunset-orange to-sunset-brown',
];

export function Card({ title, description, github, colorIdx }: { title: string; description: string; github: string; colorIdx: number }) {
  return (
    <div
      className={clsx(
        'rounded-xl p-6 shadow-lg bg-gradient-to-br',
        cardColors[colorIdx % cardColors.length],
        'border border-sunset-brown/40',
        'transition-transform hover:scale-105 hover:shadow-2xl',
        'flex flex-col h-full justify-between'
      )}
    >
      <div>
        <h3 className="text-xl font-semibold text-sunset-peach mb-2 drop-shadow">
          {title}
        </h3>
        <p className="text-sunset-peach/90 mb-4 text-base">
          {description}
        </p>
      </div>
      <div className="flex items-center mt-auto">
        <Link href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sunset-peach/80 hover:text-sunset-peach transition-colors">
          <Github className="w-5 h-5 mr-1" />
          <span>GitHub</span>
        </Link>
      </div>
    </div>
  );
}

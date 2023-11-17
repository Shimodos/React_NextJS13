import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface Tag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
}

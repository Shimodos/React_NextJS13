import { PropductModel } from '@/interfaces/product.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: PropductModel[];
}

import { TopLevelCategory, TopPageModel } from '@/interfaces/page.interface';
import { PropductModel } from '@/interfaces/product.interface';

export interface TopPageComponentProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: PropductModel[];
}

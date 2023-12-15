export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface TopPageModel {
  _id: string;
  tags: string[];
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText?: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages?: TopPageAdvantage[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  hh?: HhData;
  qas: any[];
  addresses: any[];
  categoryOn: string;
  blog: Blog;
  sravnikus: Sravnikus;
  learningclub: Learningclub;
}

export interface TopPageAdvantage {
  title: string;
  description: string;
  _id: string;
}

export interface HhData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: string;
  _id: string;
}

export interface Blog {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}

export interface Sravnikus {
  metaTitle: string;
  metaDescription: string;
  qas: any[];
  _id: string;
}

export interface Learningclub {
  metaTitle: string;
  metaDescription: string;
  qas: any[];
  _id: string;
}

export interface ProductModel {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  description: string;
  characteristics: Characteristic[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  image: string;
  initialRating: number;
  reviews: Review[];
  reviewCount: number;
  reviewAvg?: number;
  advantages?: string;
  disadvantages?: string;
}

export interface Characteristic {
  value: string;
  name: string;
}

export interface Review {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

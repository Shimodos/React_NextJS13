export interface ReviewModel {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
}

export interface PropductModel {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  image: string;
  description: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  characteristics: PropductCharacteristic[];
  advantages?: string;
  disadvantages?: string;
  initialRating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  html: string;
  blog: Blog;
  companyId: string;
  clicks: number;
  reviews: ReviewModel[];
  reviewCount: number;
  reviewAvg?: number;
}

export interface PropductCharacteristic {
  name: string;
  value: string;
}

export interface Blog {
  text: string;
  _id: string;
  bigImage?: string;
}

export interface Review {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  productId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

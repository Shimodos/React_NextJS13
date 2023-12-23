export const API = {
  topPage: {
    find: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    byAlias: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/',
  },
  product: {
    find: process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
    byId: process.env.NEXT_PUBLIC_DOMAIN + '/api/product/byId/',
  },
  review: {
    createDemo: process.env.NEXT_PUBLIC_DOMAIN + '/api/review/create-demo',
    create: process.env.NEXT_PUBLIC_DOMAIN + '/api/review/create',
  },
};

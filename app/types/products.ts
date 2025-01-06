export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  isFavorite: boolean;
  createdAt: Date;
  theme: string;
  tier: string;
  imageId: number;
  author: {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    avatar: string;
    onlineStatus: string;
  };
}

export type Product = {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
};

const u = (id: string) => `https://images.unsplash.com/${id}?w=700&h=900&fit=crop&q=80`;

export const products: Product[] = [
  { id: 1, name: "Premium Leather Jacket", category: "Outerwear", brand: "StyleCraft", price: 24999, originalPrice: 33199, image: u("photo-1551028719-00167b16eac5"), rating: 4.8, reviews: 124 },
  { id: 2, name: "Elegant Evening Dress", category: "Dresses", brand: "Luxe", price: 15799, originalPrice: 20749, image: u("photo-1515372039744-b8f02a3ae446"), rating: 4.9, reviews: 89 },
  { id: 3, name: "Classic Denim Jacket", category: "Outerwear", brand: "Urban", price: 6599, originalPrice: 8299, image: u("photo-1576995853123-5a10305d93c0"), rating: 4.5, reviews: 210 },
  { id: 4, name: "Designer Handbag", category: "Accessories", brand: "Luxe", price: 13299, originalPrice: 16599, image: u("photo-1584917865442-de89df76afd3"), rating: 4.7, reviews: 76 },
  { id: 5, name: "Casual Summer Dress", category: "Dresses", brand: "Fresh", price: 5799, originalPrice: 7499, image: u("photo-1572804013309-59a88b7e92f1"), rating: 4.4, reviews: 152 },
  { id: 6, name: "Premium Sneakers", category: "Shoes", brand: "Sport", price: 10799, originalPrice: 13299, image: u("photo-1549298916-b41d501d3772"), rating: 4.6, reviews: 301 },
  { id: 7, name: "Silk Blouse", category: "Tops", brand: "Elegant", price: 7499, originalPrice: 9999, image: u("photo-1434389677669-e08b4cac3105"), rating: 4.3, reviews: 64 },
  { id: 8, name: "High-Waisted Jeans", category: "Bottoms", brand: "Denim Co", price: 4999, originalPrice: 6599, image: u("photo-1541099649105-f69ad21f3246"), rating: 4.5, reviews: 188 },
];

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

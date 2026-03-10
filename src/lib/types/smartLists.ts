import img1 from '../../assets/img/cart1.png'
export type SmartList = {
  id: number
  title: string
  items: number
  updated: string
  image: string
}

export const smartLists: SmartList[] = [
  {
    id: 1,
    title: "Weekly Essential",
    items: 24,
    updated: "Updated 2 days ago",
    image: img1,
  },
  {
    id: 2,
    title: "Stock_Up",
    items: 24,
    updated: "Updated 1 week ago",
    image: img1,
  },
  {
    id: 3,
    title: "Kids Snacks",
    items: 12,
    updated: "Updated 3 days ago",
    image: img1,
  },
  {
    id: 4,
    title: "Organic Only",
    items: 18,
    updated: "Updated 5 days ago",
    image: img1,
  },
]

export type FavoriteItem = {
  id: number
  name: string
  price: string
  image: string
}

export const favorites: FavoriteItem[] = [
  {
      id: 401,
      name: "Organic Bananas",
    price: "£20.9",
    image: img1,
  },
  {
      id: 402,
      name: "Fresh Milk - 1L",
    price: "£12.7",
    image:img1,
  },
  {
      id: 403,
      name: "Eggs",
    price: "£32.9",
    image:img1,
  },
  {
      id: 404,
      name: "Butter",
    price: "£40.9",
    image: img1,
  },
]
import { useState } from 'react'
import { useGlobalContext } from '../../components/context'
import HomeTemplate from '../../ui/templates/home'

const data = [
  {
    url: '/images/coxanh.jpeg'
  },
  {
    url: '/images/duyne.jpg'
  },
  {
    url: '/images/hienxinh.jpg'
  }
]
const product = [
  {
    image: '/images/breakfood.JPG',
    title: 'entertainment center',
    price: '$599.99'
  },
  {
    image: '/images/breakfood.JPG',
    title: 'entertainment center',
    price: '$599.99'
  },
  {
    image: '/images/breakfood.JPG',
    title: 'entertainment center',
    price: '$599.99'
  }
]

export default function HomePage() {
  const [banners, setBanners] = useState<[]>(data as [])
  const [products, setProducts] = useState<[]>(product as [])
  const { openSidebar, openModal } = useGlobalContext()

  return <HomeTemplate urlImages={banners} products={products} />
}

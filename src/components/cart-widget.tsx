'use client'

import { useCart } from '@/contexts/car-contexts'
import { ShoppingBag } from 'lucide-react'

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-4 h-4" />
      <span className="text-sm">{items.length}</span>
    </div>
  )
}

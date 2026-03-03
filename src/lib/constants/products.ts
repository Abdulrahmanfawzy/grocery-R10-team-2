// Sample data

export const products = [
    {
        id: 1,
        name: 'Peach',
        price: '3.85',
        originalPrice: '32.08',
        rating: 5,
        reviews: 3615,
        badges: ['In Stock', 'Save 20%'],
        image: 'https://images.unsplash.com/photo-1553279768-86564c6d0f8c?w=400&h=400&fit=crop'
    },
    {
        id: 2,
        name: 'Pineapple',
        price: '6.65',
        originalPrice: '60.8',
        rating: 5,
        reviews: 3851,
        badges: ['New'],
        image: 'https://images.unsplash.com/photo-1550258987-190a24041a71?w=400&h=400&fit=crop'
    },
    {
        id: 3,
        name: 'Rambutan',
        price: '8.80',
        originalPrice: '70.8',
        rating: 5,
        reviews: 13850,
        badges: ['In Stock'],
        image: 'https://images.unsplash.com/photo-1621774618647-3b4d4f7d6e6f?w=400&h=400&fit=crop'
    }
];

import veg from '@/assets/icons/vegetables.png'
import veg1 from '@/assets/icons/Frame 46.png'
import veg2 from '@/assets/icons/healthicons_dairy-outline.png'
import veg3 from '@/assets/icons/Group.png'
import veg4 from '@/assets/icons/mdi_meat-outline.png'

export const categories = [
    { name: 'Vegetables', icon: veg },
    { name: 'Fruits', icon: veg1 },
    { name: 'Dairy & Eggs', icon: veg2 },
    { name: 'Bakery', icon: veg3 },
    { name: 'Seafood', icon: veg4 },
    { name: 'Meats', icon: veg }
];
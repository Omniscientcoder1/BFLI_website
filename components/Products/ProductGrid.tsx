import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductGridProps {
  category: string;
}

const ProductGrid: FC<ProductGridProps> = ({ category }) => {
  // Define all products, assigning them to their respective categories
  const products = [
    // Products in Category 1
    { id: '1', title: 'MUDARABAH TDR', image: '/images/products/01.png', category: 'category1' },
    { id: '2', title: 'MUDARABAH MPS', image: '/images/products/02.png', category: 'category1' },
    { id: '3', title: 'MUDARABHA MONTHLY DPS', image: '/images/products/MUDARABHA MONTHLY DPS.png', category: 'category1' },
    { id: '4', title: 'MUDARABHA HAJJ SCHEME', image: '/images/products/MUDARABHA HAJJ SCHEME.png', category: 'category1' },
    { id: '5', title: 'MUDARABHA UMRAH SCHEME', image: '/images/products/05.png', category: 'category1' },
    { id: '6', title: 'MUDARABAH RETIREMENT PLAN', image: '/images/products/05.png', category: 'category1' },
    { id: '7', title: 'MUDARABAH CASH WAQF', image: '/images/products/MUDARABAH CASH WAQF.png', category: 'category1' },

    // Products in Category 2
    { id: '8', title: 'AUTO FINANCE', image: '/images/products/Auto Finance 01.png', category: 'category2' },
    { id: '9', title: 'HOME FINANCE', image: '/images/products/AFFORDABLE HOME FINANCE.png', category: 'category2' },
    { id: '10', title: 'INDUSTRIAL FINANCE', image: '/images/products/MANUFACTURING &TRADING.png', category: 'category2' },
    { id: '11', title: 'WORKING CAPITAL FINANCE', image: '/images/products/09.png', category: 'category2' },
    { id: '12', title: 'CAPITAL, MACHINERIES & EXPANSION FINANCE', image: '/images/products/16.png', category: 'category2' },
    { id: '13', title: 'AGRICULTURE INVESTMENT', image: '/images/products/AGRICULTURE INVESTMENT.png', category: 'category2' },
    { id: '14', title: 'WOMEN ENTREPRENEUR', image: '/images/products/WOMEN ENTREPRENEUR.png', category: 'category2' },
    { id: '15', title: 'NEW ENTREPRENEUR', image: '/images/products/19.png', category: 'category2' },
    { id: '16', title: 'DOCTORS FINANCE', image: '/images/products/DOCTORS FINANCE.png', category: 'category2' },
    { id: '17', title: 'MANUFACTURING & TRADING SERVICE FINANCE', image: '/images/products/MANUFACTURING &TRADING.png', category: 'category2' },
  ];

  // Filter products based on the provided category
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <Link key={product.id} href={`/products/product/${product.id}`}>
          <div className="relative group h-64 w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            {/* Image */}
            <div className="absolute inset-0">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover" // Ensures the image covers the card
                objectPosition="center" // Centers the image
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-opacity"></div>
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h3 className="text-xl font-bold">{product.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;

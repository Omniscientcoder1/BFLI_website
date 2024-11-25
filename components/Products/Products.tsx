import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    id: 'category1',
    title: 'Islamic Deposit',
    description: 'Explore our Shariah Based Deposit Products',
    image: '/images/products/Header Banner 02.png',
  },
  {
    id: 'category2',
    title: 'Islamic Investment',
    description: 'Explore Our Shariah Based Investment Products',
    image: '/images/products/Header Banner 03.png',
  },
];

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="relative group h-64 w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover" // Ensures the image covers the frame without distortion
          objectPosition="center" // Centers the image
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={`/products/category/${category.id}`} legacyBehavior>
            <a>
              <ProductCard
                title={category.title}
                description={category.description}
                image={category.image}
              />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;

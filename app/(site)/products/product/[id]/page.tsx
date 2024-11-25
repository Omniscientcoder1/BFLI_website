import { FC } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const ProductPage: FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
 // Add other Category 1 products here
  const productData = {
    category1: {
      '1': {
        title: 'MUDARABAH TDR',
        description: `The Mudarabah Term Deposit Receipt (TDR) from Bangladesh Finance Islamic is a Shariah-compliant investment solution tailored to riba-free returns. Under a profit-sharing arrangement, the investor (Rab-ul-Mal) partners with Bangladesh Finance Islamic (Mudarib), who expertly manages the investment. This Mudarabah TDR provides competitive profit rates, catering to clients seeking ethical investment opportunities aligned with Islamic principles for optimal growth. `,
        image: '/images/products/01.png',
      },
      '2': {
        title: 'MUDARABAH MPS',
        description: `The Mudarabah Monthly Profit Scheme (MPS) from Bangladesh Finance Islamic offers a Shariah-compliant investment opportunity designed for clients seeking regular monthly income. Under this profit-sharing model, investors receive monthly returns based on Bangladesh Finance's expertise in managing the funds. This scheme is ideal for those who prioritize ethical financial growth with a sustainable &  predictable income stream.`,
        image: '/images/products/02.png',
      },
      '3': {
      title: 'MUDARABHA MONTHLY DPS',
      description: `The Mudarabah Monthly Deposit Pension Scheme (DPS) by Bangladesh Finance Islamic is a Shariah-compliant savings plan allowing clients to deposit a fixed amount each month. Through a profit-sharing arrangement, investors can accumulate savings with added profit over fixed tenure, offering a safe and ethical approach to long-term financial growth. Ideal for those aiming to build a future fund steadily and responsibly.`,
      image: '/images/products/MUDARABHA MONTHLY DPS.png',
    },
    '4': {
      title: 'MUDARABHA HAJJ SCHEME',
      description: `The Mudarabah Hajj Scheme from Bangladesh Finance Islamic is a Shariah-compliant savings plan designed to help clients prepare financially for Hajj. A depositor can grow their funds under a profit-sharing arrangement, ensuring a consistent and ethical approach to achieving this important spiritual goal every month. This scheme offers disciplined savings with added profit for a fulfilling Hajj journey.`,
      image: '/images/products/MUDARABHA HAJJ SCHEME.png',
    },
    '5': {
      title: 'MUDARABHA UMRAH SCHEME',
      description: `The Mudarabah Umrah Scheme by Bangladesh Finance Islamic is a Shariah-compliant savings plan tailored for individuals aspiring to perform Umrah. Through regular deposits, clients grow their funds under a profit-sharing model, ensuring ethical and compatible financial preparation for this significant spiritual journey. This scheme supports disciplined savings with added profits to fulfill Umrah with peace of mind.`,
      image: '/images/products/05.png',
    },
    '6': {
      title: 'MUDARABAH RETIREMENT PLAN',
      description: `The Mudarabah Retirement Plan from Bangladesh Finance Islamic is a Shariah-compliant savings solution aimed at securing a comfortable retirement. Through a profit-sharing arrangement, clients make regular contributions to grow their funds over ten years, ensuring a regular income after retirement. This ethical plan provides peace of mind and financial independence, supporting a dignified and independent post-retirement financial life.`,
      image: '/images/products/05.png',
    },
    '7': {
      title: 'MUDARABAH CASH WAQF ',
      description: `The Mudarabah Cash Waqf by Bangladesh Finance Islamic is a Shariah-compliant philanthropic investment scheme enabling clients to contribute funds that generate continuous charitable returns. Under a profit-sharing model, the earnings from these funds support chosen social causes, making it a sustainable way to create a lasting positive impact. This scheme combines ethical giving with spiritual fulfillment through ongoing charitable support and continuous sadaqah. `,
      image: '/images/products/MUDARABAH CASH WAQF.png',
    },
     
    },
    category2: {
      '8': {
        title: 'AUTO FINANCE ',
        description: `Bangladesh Finance’s Islamic Auto Finance is a Shariah-compliant solution for purchasing new or used vehicles. This financing option follows Islamic principles under the Bai – Murabaha & HPSM model, offering flexible repayment terms, competitive rates, and quick processing. It’s designed for individuals seeking an ethical and hassle-free way to meet their transportation needs.`,
        image: '/images/products/Auto Finance 01.png',
      },
      '9': {
        title: 'HOME FINANCE',
        description: `Bangladesh Finance’s Islamic Home Finance is a Shariah-compliant solution designed to make homeownership attainable. Through the HPSM & Bai – Murabaha model, clients can get finance for new home purchases, construction, or renovations while adhering to Islamic principles. With flexible repayment terms, competitive rent/profit, and a straightforward application process, it’s an ideal option for those seeking ethical home financing.`,
        image: '/images/products/AFFORDABLE HOME FINANCE.png',
      },
      '10': {
        title: 'INDUSTRIAL FINANCE',
        description: `Islamic Industrial Finance from Bangladesh Finance provides Shariah-compliant financing solutions tailored for industrial businesses. Designed to support growth and expansion, this product offers flexible terms and competitive rates for purchasing machinery, equipment, raw materials, or expanding facilities. Aligned with Islamic principles, it ensures ethical financing, fostering sustainable industrial development while adhering to the values of fairness and transparency.`,
        image: '/images/products/MANUFACTURING &TRADING.png',
      },
      '11': {
        title: 'WORKING CAPITAL FINANCE',
        description: `Islamic Working Capital Finance from Bangladesh Finance offers Shariah-compliant solutions to help businesses manage their day-to-day operational expenses. This product provides flexible financing for purchasing inventory and raw materials along with managing fringe financial needs. With competitive terms and ethical practices, it supports business growth while adhering to Islamic principles, ensuring fairness, transparency, and financial stability.`,
        image: '/images/products/09.png',
      },
      '12': {
        title: 'CAPITAL, MACHINERIES & EXPANSION FINANCE ',
        description: `MUDARABAH FIXED DEPOSIT is designed for customers seeking secure, long-term investment with fixed profit-sharing ratios.`,
        image: '/images/products/16.png',
      },
      '13': {
        title: 'AGRICULTURE INVESTMENT',
        description: `1.	Islamic Agriculture Investment from Bangladesh Finance provides Shariah-compliant financing solutions to support agricultural development. Whether for purchasing equipment, expanding farms, or investing in sustainable farming practices, this product offers flexible terms and competitive rates. It promotes ethical growth in the agriculture sector, adhering to Islamic principles, and ensuring that investments contribute to both economic and environmental sustainability.`,
        image: '/images/products/AGRICULTURE INVESTMENT.png',
      },
      '14': {
        title: 'WOMEN ENTREPRENEUR',
        description: `Islamic Women Entrepreneur Finance from Bangladesh Finance offers Shariah-compliant financial solutions to empower women in business. With flexible financing options and competitive profit rates, this product supports women entrepreneurs in launching or expanding their businesses. Designed to foster economic independence and growth, it ensures ethical financing aligned with Islamic principles, providing a transparent, supportive path to business success.`,
        image: '/images/products/WOMEN ENTREPRENEUR.png',
      },
      '15': {
        title: 'NEW ENTREPRENEUR',
        description: `3.	Islamic New Entrepreneur Finance from Bangladesh Finance offers Shariah-compliant financing solutions for aspiring entrepreneurs. With flexible terms and competitive profit rates, this product provides essential financial support to help launch or grow new businesses. Aligned with Islamic principles, it ensures ethical, transparent financing, enabling new entrepreneurs to turn their ideas into successful ventures while maintaining financial integrity.`,
        image: '/images/products/19.png',
      },
      '16': {
        title: 'DOCTORS FINANCE',
        description: `Bangladesh Finance Islamic Doctors Finance is a Shariah-compliant financing solution designed for medical professionals. Offering flexible terms and competitive rates, it supports doctors in achieving their personal and professional financial goals. Whether for practice expansion, equipment purchases, or clinic/hospital/Pharmacy setup, this ethical financing product ensures financial growth while adhering to Islamic principles of fairness and transparency.`,
        image: '/images/products/DOCTORS FINANCE.png',
      },
      '17': {
        title: 'MANUFACTURING & TRADING SERVICE FINANCE',
        description: `Islamic Manufacturing & Trading Service Finance from Bangladesh Finance offers Shariah-compliant financing solutions for businesses in the manufacturing and trading sectors. This product provides flexible terms and competitive rates, supporting the purchase of raw materials, machinery, and other shariah-compliant trading support. It promotes ethical business practices, adhering to Islamic principles, and ensures transparent financing to foster growth and sustainability in the manufacturing and trading industries.`,
        image: '/images/products/MANUFACTURING &TRADING.png',
      },
    },
  };

  // Retrieve product data by searching both categories
  const product = productData.category1[id] || productData.category2[id] || { title: 'Product Not Found', description: '', image: '' };

  return (
    
    <div className="pt-24 p-8 flex flex-col lg:flex-row gap-8">
      
      <div className="lg:w-2/3">
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-white-700 mb-8 whitespace-pre-line">{product.description}</p>
        <div className="flex gap-8">
          {/* Icons and labels */}
          {/* <div className="flex flex-col items-center">
            <img src="/icons/features.svg" alt="Features" className="w-12 h-12 mb-2" />
            <p className="text-xs text-center">FEATURES AND BENEFITS</p>
          </div> */}
          {/* Add other icons here similarly */}
        </div>
      </div>
      {/* <div className="lg:w-1/3 bg-gray-100 rounded-lg p-8 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-md" /> 
      </div> */}
      <div className="lg:w-1/2 flex items-center justify-center">
  <div className="relative w-full h-[500px]">
    <Image
      src={product.image}
      alt={product.title}
      layout="fill"
      objectFit="cover" // Ensures the image covers the container without distortion
      objectPosition="center" // Centers the image
    />
  </div>
</div>
    </div>
  );
};

export default ProductPage;

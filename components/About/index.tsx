"use client";

import { useState } from "react";
import Image from "next/image";

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      {/* <button
        onClick={toggleDarkMode}
        className="m-4 px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-black rounded"
      >
        Toggle Dark Mode
      </button> */}
      
      <div className="bg-white dark:bg-gray-900">
        <section className="bg-primary-dark text-black dark:text-white py-8">
          <div className="container mx-auto text-center">
            {/* <Image src="/logo.png" alt="Bangladesh Finance Islamic" width={200} height={50} /> */}
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-bold text-orange-600 dark:text-orange-300 mb-8">OVERVIEW</h2>
            <p className="text-center text-lg text-black dark:text-white mb-16">
              
Bangladesh Finance Islamic offers a comprehensive suite of Shariah-compliant financial products and services, meticulously designed to meet your financial needs ethically and responsibly. With a commitment to the principles of Islamic Shariah, we provide innovative and inclusive solutions through a growing network, ensuring accessibility and convenience for our valued clients across the country.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-300">Islamic Banking</h3>
                <p className="text-black dark:text-white mt-4">
                  Islamic Banking is a financial system conducting banking and business activities in line with the provisions and principles of Islamic Shariah. It follows the beliefs and principles of Shariah jurisprudence pertaining to trade and business. The modern Islamic Banking industry emerged only in the 1970s, in large part because of efforts by early 20th-century Muslim economists who envisioned alternatives to conventional Western Economics, whose interest-based transactions violate Shariah.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-300">Inception of BD Finance Islamic Banking</h3>
                <p className="text-black dark:text-white mt-4">
                
Bangladesh Finance Islamic was established to provide Shariah-compliant financial solutions, aligning with the nation's growing demand for ethical banking practices. 
 By offering a comprehensive suite of products and services, Bangladesh Finance Islamic aims to meet the diverse financial needs of its clients while adhering strictly to Islamic principles. This dedication underscores the institution's role in promoting ethical finance and contributing to the sustainable economic development of Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-dark text-black dark:text-white py-8">
          <div className="container mx-auto">
            <h2 className="text-center text-4xl font-bold mb-8">KEY FEATURES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-300 h-48 dark:bg-gray-700"></div>
              <div className="bg-gray-300 h-48 dark:bg-gray-700"></div>
              <div className="bg-gray-300 h-48 dark:bg-gray-700"></div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-center text-4xl font-bold text-orange-600 dark:text-orange-300 mb-8">Shariah Advisory Committee</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-gray-300 h-48 dark:bg-gray-700"></div>
              <div className="bg-gray-300 h-48 dark:bg-gray-700"></div>
              <div className="bg-gray-300 h-48 dark:bg-gray-700"></div>
              <div className="bg-gray-300 h-48 dark:bg-gray-700"></div>
            </div>
          </div>
        </section>

        {/* <footer className="bg-primary-dark text-black dark:text-white py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Image src="/logo.png" alt="Bangladesh Finance Islamic" width={150} height={40} />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold">INFORMATION SECTION</h3>
              <ul className="list-none text-sm mt-4">
                <li>Schedule of charges</li>
                <li>Profit rates</li>
                <li>Forms</li>
                <li>FAQ</li>
                <li>Get in touch form</li>
                <li>Product Brochures</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold">QUICK LINKS</h3>
              <ul className="list-none text-sm mt-4">
                <li>BFL Main Website</li>
                <li>Shariah Supervisory Committee</li>
                <li>News & Publications</li>
                <li>Events</li>
              </ul>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-black dark:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-black dark:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-black dark:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-black dark:text-white">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
  );
}

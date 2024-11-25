"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-col items-center text-center gap-8">
            {/* Flex container for centralizing and stacking the content */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/3"
            >
              <h1 className="mb-4 text-5xl font-bold text-black dark:text-white xl:text-sectiontitle4">
                <strong>Choose us as your Financial Partner</strong>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Unlock the potential of your financial future with Bangladesh Finance Islamic. Join us today and experience a range of innovative, Shariah-compliant financial solutions tailored to meet your unique needs. Whether you're looking to invest, save, or secure financing, our expert team is here to guide you every step of the way. Empower your financial journey with trust, transparency, and excellence. Get started with Bangladesh Finance Islamic today!
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-auto"
            >
              <a
                href="/support"
                className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
              >
                Join Us
                <Image
                  width={20}
                  height={20}
                  src="/images/icon/icon-arrow-dark.svg"
                  alt="Arrow"
                  className="dark:hidden"
                />
                <Image
                  width={20}
                  height={20}
                  src="/images/icon/icon-arrow-light.svg"
                  alt="Arrow"
                  className="hidden dark:block"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;

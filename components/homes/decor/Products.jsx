"use client";

import ProductCard1 from "@/components/productCards/ProductCard1";
import { stitch } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Edição Limitada Stitch</h3>
          <p className="subheading text-secondary">Quem não ama um Stitch? Faca acontecer!</p>
        </div>

        <Swiper
          spaceBetween={15}
          dir="ltr"
          className="swiper tf-sw-latest"
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 15 },

            768: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {stitch.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard1 product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

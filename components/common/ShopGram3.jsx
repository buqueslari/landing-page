"use client";
import { products2 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function ShopGram3({ parentClass = "" }) {
  return (
    <section className={parentClass}>
      <div className="container-full2">
        <div className="heading-section text-center">
          <h3 className="heading wow fadeInUp">Shop Instagram</h3>
          <p className="subheading text-secondary wow fadeInUp">Elevate your wardrobe with fresh finds today!</p>
        </div>
        <Swiper
          dir="ltr"
          className="swiper tf-sw-shop-gallery"
          spaceBetween={10}
          breakpoints={{
            1200: { slidesPerView: 6 },
            768: { slidesPerView: 4 },
            0: { slidesPerView: 2 },
          }}
        >
          {products2.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="gallery-item hover-overlay hover-img wow fadeInUp" data-wow-delay={item.delay}>
                <div className="img-style">
                  <Image className="lazyload img-hover" data-src={item.images[0]} alt="image-gallery" src={item.images[0]} width={640} height={640} />
                </div>
                <Link href={`/product/${item.id}`} className="box-icon hover-tooltip">
                  <span className="icon icon-eye" />
                  <span className="tooltip">View Product</span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

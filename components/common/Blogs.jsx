"use client";
import Image from "next/image";
import { blogPosts } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Pagination } from "swiper/modules";
export default function Blogs({ parentClass = "flat-spacing pt-0" }) {
  return (
    <section className={parentClass}>
      <div className="container">
        <div className="heading-section text-center">
          <h3 className="heading wow fadeInUp">News insight</h3>
          <p className="subheading text-secondary wow fadeInUp">Browse our Top Trending: the hottest picks loved by all.</p>
        </div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
              pagination: { clickable: true },
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              pagination: { clickable: true },
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              pagination: { clickable: true },
            },
          }}
          dir="ltr"
          className="swiper tf-sw-recent"
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd1",
          }}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="wg-blog style-1 hover-image wow fadeInUp" data-wow-delay={post.delay}>
                <div className="image">
                  <Image className="lazyload" data-src={post.images[0]} alt={post.alt} src={post.images[0]} width={615} height={461} />
                </div>
                <div className="content">
                  <p className="text-btn-uppercase text-secondary-2">{post.date}</p>
                  <div>
                    <h6 className="title fw-5">
                      <Link className="link" href={`/blog-detail/${post.id}`}>
                        {post.title}
                      </Link>
                    </h6>
                    <div className="body-text">{post.description}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="sw-pagination-recent spd1 sw-dots type-circle justify-content-center" />
        </Swiper>
      </div>
    </section>
  );
}

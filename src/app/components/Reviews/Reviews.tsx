"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import ReviewsBg from "../..//assets/Reviews-border.png";
import Facebook from "../../assets/Facebook.svg?react";
import Container from "../Container";

import { Autoplay } from "swiper/modules";
import { authorData } from "./helpers/reviews-data";

export default function Reviews() {
  return (
    <section
      id="reviews-section"
      className="pt-[13px] md:pt-[108px] pb-0 md:pb-[148px] "
      style={{
        backgroundImage: `url(${ReviewsBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {authorData.map((author, index) => (
            <SwiperSlide key={index}>
              <div className="mx-auto max-w-[750px] bg-white px-[29px] md:px-14 py-10 shadow-custom rounded-[10px] text-[#00062B] border-b-4 border-down">
                <div className="flex gap-[21px] md:gap-[37px] mb-8">
                  <div className="w-[132px] h-[92px] md:w-[132px] md:h-[132px]">
                    <Image src={author.avatar} alt={`Photo ${author.name}`} />
                  </div>
                  <div className="pt-0 md:pt-8">
                    <h2 className="text-2xl">{author.name}</h2>
                    <p>{author.description}</p>
                    <Facebook />
                  </div>
                </div>
                <p>{author.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

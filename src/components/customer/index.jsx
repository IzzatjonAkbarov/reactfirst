import React from "react";
import star from "../../assets/svg/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Customer = () => {
  return (
    <div className="bg-[#f9f8f3] py-[47px]">
      <div className="container1">
        <h1 className="text-[35px] py-[30px]">Отзывы наших клиентов</h1>
      </div>
      <div className="container1">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          loop={true}>
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="p-[25px] bg-white border border-[#e8e8e8] rounded-b-md max-[350px]:p-[10px]">
              <div className="border-b border-b-[#4f4d4d] py-[25px] flex items-center justify-between">
                <div>
                  <h4 className="font-nomral text-[18px]">Алексей С.А.</h4>
                  <p className="text-[14px] text-[#bbb]">28 июня 2021</p>
                </div>
                <div className="flex items-end flex-col">
                  <div className="flex items-center gap-[5px]">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <p className="text-[13px]">Общая оценка: (4,8) </p>
                </div>
              </div>
              <div>
                <p className="font-thin text-[14px] py-[25px]">
                  «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                  для своего участка. Также мне хотелось бы отметить вежливость
                  работников компании, все подробно рассказали. Я считаю этот
                  магазин отличным. И наверняка буду покупать снова или
                  советовать коллегам.»
                </p>
                <a href="#" className="!underline text-[#ff7a1b]">
                  Читать полностью
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="p-[25px] bg-white border border-[#e8e8e8] rounded-b-md max-[350px]:p-[10px]">
              <div className="border-b border-b-[#4f4d4d] py-[25px] flex items-center justify-between">
                <div>
                  <h4 className="font-nomral text-[18px]">Алексей С.А.</h4>
                  <p className="text-[14px] text-[#bbb]">28 июня 2021</p>
                </div>
                <div className="flex items-end flex-col">
                  <div className="flex items-center gap-[5px]">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <p className="text-[13px]">Общая оценка: (4,8) </p>
                </div>
              </div>
              <div>
                <p className="font-thin text-[14px] py-[25px]">
                  «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                  для своего участка. Также мне хотелось бы отметить вежливость
                  работников компании, все подробно рассказали. Я считаю этот
                  магазин отличным. И наверняка буду покупать снова или
                  советовать коллегам.»
                </p>
                <a href="#" className="!underline text-[#ff7a1b]">
                  Читать полностью
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="p-[25px] bg-white border border-[#e8e8e8] rounded-b-md max-[350px]:p-[10px]">
              <div className="border-b border-b-[#4f4d4d] py-[25px] flex items-center justify-between">
                <div>
                  <h4 className="font-nomral text-[18px]">Алексей С.А.</h4>
                  <p className="text-[14px] text-[#bbb]">28 июня 2021</p>
                </div>
                <div className="flex items-end flex-col">
                  <div className="flex items-center gap-[5px]">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <p className="text-[13px]">Общая оценка: (4,8) </p>
                </div>
              </div>
              <div>
                <p className="font-thin text-[14px] py-[25px]">
                  «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                  для своего участка. Также мне хотелось бы отметить вежливость
                  работников компании, все подробно рассказали. Я считаю этот
                  магазин отличным. И наверняка буду покупать снова или
                  советовать коллегам.»
                </p>
                <a href="#" className="!underline text-[#ff7a1b]">
                  Читать полностью
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center justify-center my-[10px]">
          <button className="py-[10px] px-[33px] bg-[#ff7a1b] text-white hover:bg-white hover:text-[#ff7a1b] transition-all">
            Открыть все отзывы
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customer;

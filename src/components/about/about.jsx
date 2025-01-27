import React from "react";
import "./style.css";
import news from "../../assets/imgs/news.png";
const About = () => {
  return (
    <div>
      <div className="container1 flex items-start justify-between gap-10 max-[1000px]:grid grid-cols-2 max-[600px]:grid-cols-1">
        <div className="w-full">
          <div>
            <img className="w-full" src={news} alt="" />

            <h1 className="text-[20px] text-[#ff7a1b] ">
              Как выбрать беседку для дачи
            </h1>
            <p className="text-[12px] text-[#bbb] ">19 сентября 2021</p>

            <p className="text-[14px] py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing
              congue tortor bibendum condimentum sociis lorem. Nibh ut ornare
              nec est pharetra, tortor egestas quam non. Aenean felis sed mauris
              eu. Nisi pellentesque.
            </p>
            <a href="" className="text-[#ff7a1b] !underline">
              Читать далее ...
            </a>
          </div>
          <br />
          <div>
            <img className="w-full" src={news} alt="" />

            <h1 className="text-[20px] text-[#ff7a1b] ">
              Как выбрать беседку для дачи
            </h1>
            <p className="text-[12px] text-[#bbb] ">19 сентября 2021</p>

            <p className="text-[14px] py-3">
              Дружная команда инженеров, наладчиков и мастеров высокого класса с
              большим вниманием и любовью относятся к своей работе.
            </p>
            <a href="#" className="text-[#ff7a1b] !underline">
              Читать далее ...
            </a>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img className="w-full" src={news} alt="" />

            <h1 className="text-[20px] text-[#ff7a1b] ">
              Как выбрать беседку для дачи
            </h1>
            <p className="text-[12px] text-[#bbb] ">19 сентября 2021</p>

            <p className="text-[14px] py-3">
              Дружная команда инженеров, наладчиков и мастеров высокого класса с
              большим вниманием и любовью относятся к своей работе.
            </p>
            <a href="" className="text-[#ff7a1b] !underline">
              Читать далее ...
            </a>
          </div>
          <br />
          <div>
            <img className="w-full" src={news} alt="" />

            <h1 className="text-[20px] text-[#ff7a1b] ">
              Как выбрать беседку для дачи
            </h1>
            <p className="text-[12px] text-[#bbb] ">19 сентября 2021</p>

            <p className="text-[14px] py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing
              congue tortor bibendum condimentum sociis lorem. Nibh ut ornare
              nec est pharetra, tortor egestas quam non. Aenean felis sed mauris
              eu. Nisi pellentesque.
            </p>
            <a href="#" className="text-[#ff7a1b] !underline">
              Читать далее ...
            </a>
          </div>
        </div>
        <div className="w-full">
          <div>
            <img className="w-full" src={news} alt="" />

            <h1 className="text-[20px] text-[#ff7a1b] !underline">
              Как выбрать беседку для дачи
            </h1>
            <p className="text-[12px] text-[#bbb] ">19 сентября 2021</p>

            <p className="text-[14px] py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              sit vitae vitae vitae, sed tellus. Semper vitae, et sed sed sed
              magna. At magna diam praesent amet, phasellus gravida. Sagittis ut
              odio dignissim pellentesque. Tincidunt suspendisse quam aliquam
              mus placerat platea facilisis libero, platea. Etiam lacus,
              pellentesque molestie feugiat. Aliquam interdum varius nunc sed
              pellentesque mattis.
            </p>
            <a href="" className="text-[#ff7a1b] !underline">
              Читать далее ...
            </a>
          </div>
          <br />
          <div>
            <img className="w-full" src={news} alt="" />

            <h1 className="text-[20px] text-[#ff7a1b] ">
              Как выбрать беседку для дачи
            </h1>
            <p className="text-[12px] text-[#bbb] ">19 сентября 2021</p>

            <p className="text-[14px] py-3">
              Дружная команда инженеров, наладчиков и мастеров высокого класса с
              большим вниманием и любовью относятся к своей работе.
            </p>
            <a href="#" className="text-[#ff7a1b] !underline">
              Читать далее ...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

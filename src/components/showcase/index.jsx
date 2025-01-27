import React from "react";
import "./style.css";
import grass from "../../assets/imgs/showcasegrass.png";
import showcasehome from "../../assets/imgs/showcasehome.png";

const Showcase = () => {
  return (
    <div className="bg-[#f9f8f3]">
      <div className=" container1 pt-5">
        <div className="w-full showcase text-white relative">
          <div className="py-[51px] px-[99px] max-[670px]:px-5">
            <h1 className="text-[40px] max-[450px]:text-[30px]  max-[330px]:text-[25px]">
              Беседки под ключ <br /> за 7 дней
            </h1>
          </div>
          <div className="pb-[50px] relative z-10 max-[503px]:hidden">
            <div className="flex items-center gap-14 text-[24px] py-[22px] px-[99px] max-[670px]:px-5 bg-[#ff7a1b]">
              <p>Выгода до 24%</p>
              <p>Сборка за 1 день</p>
            </div>
          </div>
          <div className="h-[352px] w-[500px]  bg-white rounded-tl-full absolute right-0 top-0 max-[1050px]:hidden"></div>
          <img
            className="absolute top-0 right-10 z-20 max-[1050px]:hidden"
            src={showcasehome}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;

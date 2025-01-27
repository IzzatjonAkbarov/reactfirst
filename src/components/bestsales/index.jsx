import React from "react";
import { productCards } from "../../../src/utils/index.js";
import house from "../../assets/imgs/house.png";
import varranty from "../../assets/svg/varranty.svg";
import size from "../../assets/svg/size.svg";
import user from "../../assets/svg/user.svg";
const Bestsales = () => {
  return (
    <div>
      <div className="flex items-center justify-between container1 py-[32px]">
        <h1 className="text-[30px] font-normal  ">Хиты продаж</h1>
        <a href="">Все товары </a>
      </div>
      <div className="py-5">
        <div className="bg-[#F9F8F3] container1 flex items-center max-[887px]:w-[1000px] overflow-scroll">
          <button className="py-3 px-10 hover:bg-[#fff] transition-all border-b border-b-[#F9F8F3] hover:border-b-[#ff7a1b]">
            Беседки
          </button>
          <button className="py-3 px-10 hover:bg-[#fff] transition-all border-b border-b-[#F9F8F3] hover:border-b-[#ff7a1b]">
            Бани
          </button>
          <button className="py-3 px-10 hover:bg-[#fff] transition-all border-b border-b-[#F9F8F3] hover:border-b-[#ff7a1b]">
            Площадки
          </button>
          <button className="py-3 px-10 hover:bg-[#fff] transition-all border-b border-b-[#F9F8F3] hover:border-b-[#ff7a1b]">
            Дома
          </button>
          <button className="py-3 px-10 hover:bg-[#fff] transition-all border-b border-b-[#F9F8F3] hover:border-b-[#ff7a1b]">
            Перголы
          </button>
          <button className="py-3 px-10 hover:bg-[#fff] transition-all border-b border-b-[#F9F8F3] hover:border-b-[#ff7a1b]">
            Бренды
          </button>
        </div>
      </div>
      <div className=" container1 grid grid-cols-5 max-[1394px]:grid-cols-4 max-[1118px]:grid-cols-3 max-[837px]:grid-cols-2 max-[560px]:grid-cols-1">
        {productCards.map((value) => (
          <div
            key={value.id}
            className="card py-[20px] px-[13px] border border-[#e8e8e8]">
            <img className="m-auto" src={house} alt="" />

            <div className="text-[12px] font-light flex items-center justify-between py-2">
              <p>Артикул: </p>
              <p>{value.article}</p>
            </div>
            <h1 className="font-normal text-[18px] hover:text-[#c7b670] transition-all">
              Название товара длинное в две строки наверное
            </h1>
            <div>
              <div
                className="flex
              flex-col gap-1">
                <div className="flex items-end justify-between">
                  <div className="text-[13px] font-light flex items-center gap-1">
                    <img src={size} alt="" />
                    <p>Размеры:</p>
                  </div>
                  <p>{value.dimensions}</p>
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-[13px] font-light flex items-center gap-1">
                    <div className="h-[9px] w-[9px] rounded-[1px] border border-[#ff7a1b]"></div>
                    <p>Площадь:</p>
                  </div>
                  <p>{value.area}</p>
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-[13px] font-light flex items-center gap-1">
                    <img src={user} alt="" />
                    <p>Вместимость:</p>
                  </div>
                  <p>{value.capacity}</p>
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-[13px] font-light flex items-center gap-1">
                    <img src={varranty} alt="" />
                    <p>Гарантия: </p>
                  </div>
                  <p>{value.warranty}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-start flex-col">
                  <div className="flex items-center gap-1">
                    <p className="text-[#bbb] font-normal">
                      <s>6 127 500 ₽</s>
                    </p>
                    <p className="p-[5px] text-[11px] w-fit bg-[#ffd634]">
                      -25%
                    </p>
                  </div>
                  <p className="text-[#ff3838] text-[22px]">5 023 900 ₽</p>
                </div>
                <button className="h-ful py-5 px-6 bg-[#ffd634] rounded transition-all hover:bg-[#ffd634b7]">
                  Купить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestsales;

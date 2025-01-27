import React from "react";
import home from "../../assets/imgs/home.png";
import home2 from "../../assets/imgs/home2.png";
import home3 from "../../assets/imgs/home3.png";
import home4 from "../../assets/imgs/home4.png";
import home5 from "../../assets/imgs/home5.png";
import home6 from "../../assets/imgs/home6.png";
import grass from "../../assets/imgs/grass.png";
const Category = () => {
  return (
    <div>
      <div className="container1">
        <h1 className="font-normal text-[30px] py-[15px]">Категории</h1>

        <div className="flex  gap-[29px] justiify-between w-full max-[1300px]:grid grid-cols-2 max-[833px]:grid-cols-1">
          <div className="p-6 bg-[#F7F1D9] w-full max-[400px]:flex max-[400px]:items-center max-[400px]:justify-between">
            <h3 className="text-[24px] font-normal">Беседки</h3>
            <div className="flex items-center gap-10 pt-2 max-[400px]:hidden">
              <div className="text-[14px] ">
                <p>Подкатегория 1</p>
                <p>Подкатегория 2</p>
                <p>Подкатегория 3</p>
              </div>
              <div className="text-[14px] ">
                <p>Подкатегория 4</p>
                <p>Подкатегория 5</p>
                <p>Подкатегория 6</p>
              </div>
            </div>
            <div className="flex items-center relative flex-col  max-[350px]:w-[150px]">
              <img className="z-10" src={home} alt="" />
              <img
                className="rounded-[50%] absolute bottom-[-20px]"
                src={grass}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-[17px] w-full">
            <div className="p-5 bg-[#F7F1D9] flex items-center justify-between">
              <div>
                <h3 className="text-[24px] font-normal">Бани</h3>

                <div className="text-[14px] py-2 max-[400px]:hidden">
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                </div>
                <p className="max-[400px]:hidden">...</p>
              </div>
              <img src={home2} alt="" />
            </div>
            <div className="p-5 bg-[#F7F1D9] flex items-center justify-between">
              <div>
                <h3 className="text-[24px] font-normal">Перголы</h3>

                <div className="text-[14px] py-2 max-[400px]:hidden">
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                </div>
                <p className="max-[400px]:hidden">...</p>
              </div>
              <img src={home3} alt="" />
            </div>
            <div className="p-5 bg-[#F7F1D9] flex items-center justify-between">
              <div>
                <h3 className="text-[24px] font-normal">Бренды</h3>

                <div className="text-[14px] py-2 max-[400px]:hidden">
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                </div>
                <p className="max-[400px]:hidden">...</p>
              </div>
              <img src={home4} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-[17px] w-full h-full justify-between">
            <div className="p-5 bg-[#F7F1D9] flex items-center justify-between">
              <div>
                <h3 className="text-[24px] font-normal">Бренды</h3>

                <div className="text-[14px] py-2 max-[400px]:hidden">
                  <p className="py-[3px]">Подкатегория 1</p>
                  <p className="py-[3px]">Подкатегория 2</p>
                  <p className="py-[3px]">Подкатегория 3</p>
                  <p className="py-[3px]">Подкатегория 4</p>
                  <p className="py-[3px]">Подкатегория 5</p>
                </div>
                <p className="max-[400px]:hidden">...</p>
              </div>
              <img className=" max-[350px]:w-[150px]" src={home5} alt="" />
            </div>
            <div className="p-5 bg-[#F7F1D9] flex items-center justify-between ">
              <div>
                <h3 className="text-[24px] font-normal">Бренды</h3>

                <div className="text-[14px] py-2 max-[400px]:hidden">
                  <p className="py-[4px]">Подкатегория 1</p>
                  <p className="py-[4px]">Подкатегория 2</p>
                  <p className="py-[4px]">Подкатегория 3</p>
                  <p className="py-[4px]">Подкатегория 4</p>
                </div>
                <p className="max-[400px]:hidden">...</p>
              </div>
              <img className=" max-[350px]:w-[150px]" src={home6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

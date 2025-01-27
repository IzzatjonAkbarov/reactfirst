import React from "react";
import topcategory1 from "../../assets/imgs/topcategory.png";
import topcategory2 from "../../assets/imgs/topcategory2.png";
import topcategory3 from "../../assets/imgs/topcategory3.png";
import topcategory4 from "../../assets/imgs/topcategory4.png";
import topcategory5 from "../../assets/imgs/topcategory5.png";
const Topcategory = () => {
  return (
    <div>
      <div className="container1 py-[32px] flex items-center justify-between max-[960px]:grid grid-cols-2 max-[430px]:grid-cols-1 max-[960px]:gap-3">
        <div className="flex items-center max-[1721px]:flex-col max-[1721px]:gap-2 max-[430px]:flex-row ">
          <img src={topcategory1} alt="" />
          <p className=" max-[500px]:text-[14px]">
            Изготовливаем конструкции <br /> по вашему дизайн-проекту
          </p>
        </div>
        <div className="flex items-center max-[1721px]:flex-col max-[1721px]:gap-2 max-[430px]:flex-row">
          <img src={topcategory2} alt="" />
          <p className=" max-[500px]:text-[14px]">
            Изготовливаем конструкции <br /> по вашему дизайн-проекту
          </p>
        </div>

        <div className="flex items-center max-[1721px]:flex-col max-[1721px]:gap-2 max-[430px]:flex-row">
          <img src={topcategory3} alt="" />
          <p className=" max-[500px]:text-[14px]">
            Изготовливаем конструкции <br /> по вашему дизайн-проекту
          </p>
        </div>
        <div className="flex items-center max-[1721px]:flex-col max-[1721px]:gap-2 max-[430px]:flex-row">
          <img src={topcategory4} alt="" />
          <p className=" max-[500px]:text-[14px]">
            Изготовливаем конструкции <br /> по вашему дизайн-проекту
          </p>
        </div>
        <div className="flex items-center max-[1721px]:flex-col max-[1721px]:gap-2 max-[430px]:flex-row max-[1229px]:hidden">
          <img src={topcategory5} alt="" />
          <p className=" max-[500px]:text-[14px]">
            Изготовливаем конструкции <br /> по вашему дизайн-проекту
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topcategory;

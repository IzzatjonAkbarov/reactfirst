import React from "react";
import double from "../../assets/svg/double.svg";
import factory from "../../assets/imgs/factory.png";

const Aboutus = () => {
  return (
    <div className="py-[60px]">
      <div className="container1">
        <div className="flex items-center justify-between max-[1150px]:flex-col max-[1150px]:items-start">
          <div className="w-[50%] max-[1150px]:w-full">
            <p className="text-[32px] font-normal pb-[15px] border-b border-b-[#ff7a1b]">
              Немного о нас
            </p>
            <p className="pt-[39px] max-[425px]:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
              integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
              nec senectus duis nibh. In faucibus adipiscing tellus enim,
              consequat integer accumsan. Ultrices ipsum nulla consequat
              malesuada enim mollis est.
            </p>
            <div className="flex items-start gap-[18px] pt-[32px] max-[425px]:flex-col">
              <img src={double} alt="" />
              <div>
                <p className="max-[425px]:text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  lacus integer nunc, ornare ipsum lorem nulla est. Augue eros
                  adipiscing nec senectus duis nibh. In faucibus adipiscing
                  tellus enim, consequat integer accumsan. Ultrices ipsum nulla
                  consequat malesuada enim mollis est. Venenatis, sagittis, amet
                  ornare donec purus suscipit nam sodales. Varius sit amet
                  nullam dictumst massa consequat odio faucibus.
                </p>
                <p>Никита Данилов, Руководитель компании</p>
              </div>
            </div>
          </div>
          <div>
            <img src={factory} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

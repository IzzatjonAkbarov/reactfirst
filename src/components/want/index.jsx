import React from "react";

const Wanttoapply = () => {
  return (
    <div className="bg-[#f9f8f3] py-[45px] ">
      <div className="container1 flex items-center justify-between max-[1000px]:flex-col max-[1000px]:gap-6 max-[1000px]:items-start">
        <p>Хотите быть в курсе выгодных предложений, акций и новинок?</p>

        <form
          action=""
          className="w-fit flex items-center gap-10 max-[1000px]:flex-col max-[1000px]:w-full ">
          <input
            placeholder="Имя"
            className="rounded-[6px] bg-white p-3 w-[30%] max-[1000px]:w-full"
            width={"100%"}
            type="text"
          />
          <input
            placeholder="Email"
            className="rounded-[6px] bg-white p-3  w-[30%] max-[1000px]:w-full"
            width={"100%"}
            type="text"
          />
          <button className="bg-[#ff7a1b] rounded-[6px] text-white px-10 py-3 max-[1000px]:w-full hover:bg-white hover:text-[#ff7a1b] transition-all">
            Подписаться
          </button>
        </form>
      </div>
    </div>
  );
};

export default Wanttoapply;

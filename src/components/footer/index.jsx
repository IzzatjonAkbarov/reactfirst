import "./style.css";
import logo from "../../assets/svg/logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#1f1f1f]">
      <div className="container1 text-white py-4 flex items-center justify-between">
        <div className="flex items-center gap-20">
          <div className="flex items-center justify-center flex-col ">
            <img src={logo} alt="" />
            <p className="text-[14px]">Логотип вашего магазина</p>
          </div>
          <div className="flex items-start flex-col">
            <p>Наш адрес:</p>
            <a href="#">Москва, ул. Новокосимская д.7</a>
          </div>
        </div>
        <div className="flex items-center gap-20">
          <div className="flex items-start flex-col">
            <p>Наш адрес:</p>
            <a href="#">Москва, ул. Новокосимская д.7</a>
          </div>
          <button className="bg-[#ff7a1b] text-white px-10 py-3 rounded-md">
            Заказать звонок
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

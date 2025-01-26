import location from "../../assets/svg/location.svg";
import menubar from "../../assets/svg/menubar.svg";
import select from "../../assets/svg/select.svg";
import telelphone from "../../assets/svg/tel.svg";
import logo from "../../assets/svg/logo.svg";
import tick from "../../assets/svg/tick.svg";
import clock from "../../assets/svg/time.svg";
import mail from "../../assets/svg/mail.svg";
import "../header/style.css";
const Header = () => {
  return (
    <>
      {" "}
      <div className="bg-[#2b150d] p-4">
        <header className="container1  ">
          <div className="flex items-center justify-between max-[735px]:hidden">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <img src={location} alt="" />
                <p className="text-white text-[13px]">
                  <b>Ваш город:</b>
                  Константинополь
                </p>
                <img src={select} alt="" />
              </div>
              <div className="flex items-center gap-2 max-[1089px]:hidden">
                <img src={location} alt="" />
                <p className="text-white text-[13px]">
                  <b>Наш офис: </b>
                  Москва, ул. Новокосимская д.7
                </p>
              </div>
            </div>
            <ul className="text-white text-[13px] font-normal flex items-center gap-10">
              <li className="">
                <a href="#Статьи">Статьи</a>
              </li>
              <li className="max-[736px]:hidden">
                <a href="#Оплата">Оплата</a>
              </li>
              <li>
                <a href="#Гарантия">Гарантия</a>
              </li>
              <li>
                <a href="#Дилерам">Дилерам</a>
              </li>
              <li>
                <a href="#Вакансии">Вакансии</a>
              </li>
            </ul>
          </div>
          <div className="hidden max-[735px]:flex items-center justify-between gap-5  ">
            <p>
              <img src={menubar} alt="" />
            </p>

            <div className="w-[70%]">
              <input
                className="p-3 bg-white w-full rounded-xl outline-none"
                placeholder="Поиск по каталогу..."
                type="text"
              />
            </div>
            <p>
              <img src={telelphone} alt="" />
            </p>
          </div>
        </header>
      </div>
      <div className="bg-[#f9f8f3] py-[16px] max-[735px]:hidden">
        <header className="container1 flex items-center justify-between ">
          <div className="flex items-center justify-center flex-col ">
            <img src={logo} alt="" />
            <p className="text-[14px]">Логотип вашего магазина</p>
          </div>
          <div className="flex flex-col gap-3">
            <ul className="flex items-center gap-10 max-[850px]:hidden">
              <li className="max-[1260px]:hidden">
                <a className="flex items-center gap-2" href="#">
                  <img src={tick} alt="" />
                  Лучшие цены
                </a>
              </li>
              <li className="max-[1090px]:hidden">
                <a className="flex items-center gap-2" href="#">
                  <img src={tick} alt="" />
                  Бесплатная доставка
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2" href="#">
                  <img src={tick} alt="" />
                  Гарантия от 3х лет
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2" href="#">
                  <img src={tick} alt="" />
                  Более 1 000 товаров
                </a>
              </li>
            </ul>
            <div className="w-full bg-white flex items-center gap-0">
              <input
                className="p-3  w-full rounded-xl outline-none"
                placeholder="Поиск по каталогу..."
                type="text"
              />
              <button className="p-3 px-5 bg-[#ffd634]">Найти</button>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex  items-start gap-3 max-[1538px]:hidden">
              <img className="pt-1" src={clock} alt="" />
              <div className="flex flex-col">
                <p>Ежедневно с 9:00 до 21:00</p>
                <a href="#">
                  8 (800) <b>800-00-00</b>
                </a>
                <a href="#">
                  8 (495) <b>700-00-00</b>
                </a>
              </div>
            </div>
            <div
              className="flex
             flex-col items-center gap-2">
              <a className="flex items-center gap-2 text-[13px]" href="#">
                <img src={mail} alt="" />
                youremail@mailbox.ru
              </a>
              <button className="bg-[#ff7a1b] text-white px-10 py-3 rounded-md">
                Заказать звонок
              </button>
            </div>
          </div>
        </header>
      </div>
      <div>
        <div className="container1 max-[738px]:py-4">
          <ul className="flex items-center justify-between">
            <li className="max-[400px]:w-[100%]">
              <button className="p-3 bg-[#ffd634] flex items-center gap-1.5 max-[400px]:w-[100%]">
                <img src={menubar} alt="" />
                Каталог товаров
              </button>
            </li>
            <li className="max-[400px]:hidden">
              <button className="p-3 bg-[#fff] flex items-center gap-1.5 justify-center text-center">
                О компании
              </button>
            </li>
            <li className="max-[500px]:hidden">
              <button className="p-3 bg-[#fff] flex items-center gap-1.5 justify-center text-center">
                Отзывы
              </button>
            </li>
            <li className="max-[600px]:hidden">
              <button className="p-3 bg-[#fff] flex items-center gap-1.5 justify-center text-center">
                Наши работы
              </button>
            </li>
            <li className="max-[850px]:hidden">
              <button className="p-3 bg-[#fff] flex items-center gap-1.5 justify-center text-center">
                Доставка
              </button>
            </li>
            <li className="max-[950px]:hidden">
              <button className="p-3 bg-[#fff] flex items-center gap-1.5 justify-center text-center">
                Контакты
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;

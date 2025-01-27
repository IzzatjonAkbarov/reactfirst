import "./style.css";
import logo from "../../assets/svg/logo.svg";
import visa from "../../assets/svg/visa.svg";
import jcb from "../../assets/svg/jcb.svg";
import mir from "../../assets/svg/mir.svg";
import mstrcrd from "../../assets/svg/mstrcrd.svg";
import wtsp from "../../assets/imgs/wtsp.png";
import inst from "../../assets/imgs/inst.png";
import ytb from "../../assets/imgs/ytb.png";

const Footer = () => {
  return (
    <div className="bg-[#1f1f1f]">
      <div className="container1 text-white py-4 flex items-center justify-between border-b max-[1111px]:flex-col max-[1111px]:items-start border-b-[#ccc]">
        <div className="flex items-center max-[1111px]:w-full max-[1111px]:justify-between  max-[1111px]:py-[10px] max-[543px]:flex-col max-[543px]:items-start max-[543px]:gap-3 gap-20">
          <div className="flex items-center justify-center flex-col ">
            <img src={logo} alt="" />
            <p className="text-[14px]">Логотип вашего магазина</p>
          </div>
          <div className="flex items-start flex-col">
            <p>Наш адрес:</p>
            <a className="" href="#">
              Москва, ул. Новокосимская д.7
            </a>
          </div>
        </div>
        <div className="flex items-center gap-20 max-[1111px]:w-full max-[1111px]:justify-between max-[543px]:flex-col max-[543px]:items-start max-[543px]:gap-3">
          <div className="flex items-start flex-col">
            <p>Наш адрес:</p>
            <a href="#">Москва, ул. Новокосимская д.7</a>
          </div>
          <button className="bg-[#ff7a1b] text-white px-10 py-3 rounded-md hover:bg-white hover:text-[#ff7a1b] transition-all">
            Заказать звонок
          </button>
        </div>
      </div>
      <div className="container1 py-[32px] flex items-start justify-between max-[1111px]:flex-col max-[1111px]:items-start">
        <div className=" text-white flex items-start gap-10 max-[1111px]:w-full max-[1111px]:justify-between max-[543px]:flex-col max-[543px]:items-start">
          <div className="flex items-start flex-col gap-[15px] text-white">
            <h1>Для покупателей:</h1>
            <a className="opacity-75 text-white" href="#Доставка">
              Доставка
            </a>
            <a className="opacity-75 text-white" href="#Гарантия">
              Гарантия
            </a>
            <a
              className="opacity-75 text-white"
              href="#Политикаконфиденциальности">
              Политика конфиденциальности
            </a>
            <a className="opacity-75 text-white" href="#Отзывы">
              Отзывы
            </a>
            <a className="opacity-75 text-white" href="#Наши">
              Наши работы
            </a>
          </div>
          <div className="flex items-start flex-col gap-[15px] text-white">
            <h1>О компании:</h1>
            <a className="opacity-75 text-white" href="#Доставка">
              О Нас
            </a>
            <a className="opacity-75 text-white" href="#Гарантия">
              Доставка и оплата
            </a>
            <a
              className="opacity-75 text-white"
              href="#Политикаконфиденциальности">
              Наши работы
            </a>
            <a className="opacity-75 text-white" href="#Отзывы">
              Контакты
            </a>
            <a className="opacity-75 text-white" href="#Наши">
              Гарантия
            </a>
          </div>
          <div className="flex items-start flex-col gap-[15px] text-white">
            <h1>Категории:</h1>
            <a className="opacity-75 text-white" href="#Доставка">
              Беседки
            </a>
            <a className="opacity-75 text-white" href="#Гарантия">
              Бани
            </a>
            <a
              className="opacity-75 text-white"
              href="#Политикаконфиденциальности">
              Площадки
            </a>
            <a className="opacity-75 text-white" href="#Отзывы">
              Дома
            </a>
            <a className="opacity-75 text-white" href="#Наши">
              Перголы
            </a>
            <a className="opacity-75 text-white" href="#Наши">
              Бренды
            </a>
          </div>
        </div>
        <div className="flex items-start gap-10 max-[1111px]:w-full max-[1111px]:justify-between max-[543px]:flex-col max-[543px]:items-start">
          <div className="text-white flex items-start flex-col gap-[15px]">
            <p>
              Для регионов
              <br />
              (звонок бесплатный)
            </p>
            <a className="text-white" href="#stelto8(800)800-00-00">
              8 (800) <span>800-00-00</span>
            </a>
            <a className="text-white" href="#youremail@mailbox.ru">
              Email: youremail@mailbox.ru
            </a>
            <a className="text-white" href="#Мы в соц.сетях">
              Мы в соц.сетях:
            </a>
            <div className="flex items-center gap-5">
              <img src={wtsp} alt="" />
              <img src={ytb} alt="" />
              <img src={inst} alt="" />
            </div>
          </div>
          <div className="text-white flex items-start flex-col gap-[15px]">
            <p>
              Для Москвы
              <br />и Московской области
            </p>
            <a className="text-white" href="#stelto8(800)800-00-00">
              8 (495) <span>700-00-00</span>
            </a>
            <a className="text-white" href="#youremail@mailbox.ru">
              Сообщить об ошибке на сайте
            </a>

            <div className="flex items-start gap- flex-col">
              <a className="text-white" href="#Мы в соц.сетях">
                ООО "Фаза Групп"
              </a>
              <a className="text-white" href="#Мы в соц.сетях">
                ИНН: 7751140879
              </a>
              <a className="text-white" href="#Мы в соц.сетях">
                ОГРН: 1187746273461
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container1">
        <div className="py-[32px] border-t border-white text-white flex  justify-between max-[1000px]:flex-col">
          <div className="flex items-start flex-col opacity-75">
            <p>Публичная оферта</p>
            <p>2013-2021 - Товары для дач,</p>
            <p>деревянные конструкции под любые нужды</p>
          </div>
          <div className="flex items-center gap-10">
            <p className=" max-[1000px]:hidden">Принимаем к оплате:</p>
            <div className="flex items-center gap-10 max-[1000px]:py-3 max-[500px]:gap-3">
              <img src={visa} alt="" />
              <img src={jcb} alt="" />
              <img src={mstrcrd} alt="" />
              <img src={mir} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

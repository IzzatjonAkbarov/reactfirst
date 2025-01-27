import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Topcategory from "./components/topcategory";
import Wanttoapply from "./components/want";
import About from "./components/about/about";
import Aboutus from "./components/aboutus";
import Category from "./components/category";
import Showcase from "./components/showcase";
import Customer from "./components/customer";
import Bestsales from "./components/bestsales";
import Discounts from "./components/discounts";

function App() {
  return (
    <main className="">
      <Header />
      <Showcase />
      <Topcategory />
      <Category />
      <Bestsales />
      <Discounts />
      <Customer />
      <Aboutus />
      <About />
      <Wanttoapply />
      <Footer />
    </main>
  );
}

export default App;

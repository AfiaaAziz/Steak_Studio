import Header from "./components/Header";
import Vendors from "./components/Vendors";
import BigOfferSlider from "./components/BigOfferSlider";
import Testimonials from "./components/Testimonials";
import Resturant from "./components/Resturant";
import WhyWeAreTheBest from "./components/WhyWeAreTheBest";
import DeliverySection from "./components/Delivery";
import SpecialMenu from "./components/SpecialMenu";
import SpecialServices from "./components/SpecialServices"
import Special from "./components/Specials"





export default function Home() {
  return (
    <main className="flex flex-col items-center flex-grow">
      <Header />
      <BigOfferSlider />
      <Special/>
      <SpecialMenu/>
      <SpecialServices/>
      <Resturant/>
      <DeliverySection/>
      <WhyWeAreTheBest/>
      <Testimonials />
      <Vendors />
    </main>
  );
}


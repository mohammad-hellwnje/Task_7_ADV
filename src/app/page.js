
import BookingForm from "@/components/BookingForm/BookingForm";
import CardList from "@/components/CardList/CardList";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import SpecialOffer from "@/components/SpecialOffer/SpecialOffer";
import StatsCard from "@/components/StatsCard/StatsCard";
import TestimonialsSlider from "@/components/TestimonialsSlider/TestimonialsSlider";
import Slider from "@/components/ٍSlider/Slider";
import { cardData } from "@/Data/cardData";
import { offerData } from "@/Data/offerData";
import { packages } from "@/Data/packages";
import { statsData } from "@/Data/statsData";
import { testimonials } from "@/Data/testimonialsData";
import heroImage from './../../public/image/Hero-img.png';

export default function Home() {
  
  return (
   <>
    <Navbar/>
    <Hero
        heroImage={heroImage}
        mainText="Enjoy in the best way!"
        subText="Enjoy our services for your trip anytime"
        showForm={true}
        isAboutPage={false}
      />
    <Slider/>
    <StatsCard data={statsData}  imageSrc="/image/about-picture.png" />
    <SpecialOffer data={offerData} />
    <ServiceCards cards={cardData} />
    <BookingForm />
    <CardList data={packages} />
    <TestimonialsSlider testimonialsData={testimonials} />
    <Footer/>
   </>
  );
}

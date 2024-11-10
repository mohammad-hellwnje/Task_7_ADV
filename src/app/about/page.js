import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import heroImage from './../../../public/image/Hero_About.png';
import StatsCard from '@/components/StatsCard/StatsCard';
import { statsData } from '@/Data/statsData';
import FeaturesSection from '@/components/FeaturesSection/FeaturesSection';
import Footer from '@/components/Footer/Footer';
import TestimonialsSlider from '@/components/TestimonialsSlider/TestimonialsSlider';
import { testimonials } from '@/Data/testimonialsData';
function page() {
    return (
        <>
        <Navbar/>
        <Hero
        heroImage={heroImage}
        mainText="Our team cares about your full relax"
        subText="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
        showForm={false}
        isAboutPage={true}
      />
       <StatsCard data={statsData}  imageSrc="/image/about.png" isAboutPage={true}/>
       <FeaturesSection/>
       <TestimonialsSlider testimonialsData={testimonials} />
       <Footer/>
        </>
    )
}

export default page
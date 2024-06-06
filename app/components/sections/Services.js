'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '/app/styles/services.scss'
import data from '/app/data.json';
import { oswald } from "@/app/fonts";
import { motion } from "framer-motion";

const Services = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  //Motion variants
  const section = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.6
      }
    },
    hidden: {opacity: 0}
  }

  const item = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
  }


  return (
    <motion.section className="container-xl services" id="services"
      initial="hidden"
      whileInView="visible"
      variants={section}
      viewport={{once: true}}
    >
      <motion.h2 className={`section-title ${oswald.className}`} variants={item}>Nuestros Servicios</motion.h2>
      <motion.div className="container m-0 p-0" variants={item}>
        <Slider {...settings}>
          {data.services.map((service, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-inner">
                  <div className="card-img-top" style={{backgroundImage: `url('${service.image}')`}}>
                    <div className="overlay"></div>
                  </div>
                  <div className="card-body">
                    <h3 className={`card-title ${oswald.className}`}>{service.title}</h3>
                    <p className="card-text">{service.text}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </motion.div>
    </motion.section>
  );
}

export default Services;
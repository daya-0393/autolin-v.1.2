import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '/app/styles/reviews.scss'
import Review from "../Review";
import { oswald } from "@/app/fonts";
import data from '/app/data.json';
import { motion } from "framer-motion";

const Reviews = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
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
    <motion.section className="container-xl reviews" id="reviews"
      initial="hidden"
      whileInView="visible"
      variants={section}
      viewport={{once: true}}
    >
      <motion.h2 className={`section-title ${oswald.className}`} variants={item}>Lo que nuestros clientes dicen</motion.h2>
      <motion.div className="container p-0 m-0" variants={item}>
        <Slider {...settings}>
          {data.reviews.map((review, index) => {
            return (
              <Review 
                name={review.name} 
                rating={review.rating} 
                text={review.text} 
                imageUrl={review.image} 
                key={index}/>
            )
          })}
        </Slider>
      </motion.div>
    </motion.section>
  )
}

export default Reviews;
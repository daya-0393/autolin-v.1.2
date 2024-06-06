'use client'

import CustomCard from "../CustomCard";
import data from '/app/data.json';
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { oswald } from "@/app/fonts";
import '/app/styles/about.scss'

const About = () => {

  const [textVisible, setTextVisible] = useState(false);
  const [cardIdSelected, setCardIdSelected] = useState(null);
  const aboutRef = useRef();

  const toggleCardText = (id) => {
    if(!textVisible){
      setCardIdSelected(id);
      setTextVisible(true);
    }else if(textVisible && cardIdSelected !== id){
      setTextVisible(false);
      setCardIdSelected(id);
      setTextVisible(true);
    }else if(textVisible && cardIdSelected === id){
      setTextVisible(false);
    }
  }

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

  const list = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3
      }
    },
    hidden: {opacity: 0}
  }

  const item = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
  }

  return (
    <motion.section className="container-xl about" id="about" 
      initial="hidden"
      whileInView="visible"
      variants={section}
      viewport={{once: true}}
    >
        <motion.h2 className={`section-title ${oswald.className}`} variants={item}> Lo que nos caracteriza</motion.h2>
        <motion.div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3"       
          initial="hidden"
          whileInView="visible" 
          variants={list}
          viewport={{once: true}}
        >
          {data.values.map((el, index) => {
            return (
              <motion.div className="col" key={`item-${index + 1}`} variants={item}>
                <CustomCard
                  title={el.title}
                  bodyText={el.bodyText}
                  imageUrl={el.imageUrl}
                  onSelection={() => toggleCardText(index)}
                  textVisible={textVisible}
                  selected={cardIdSelected === index}
                />
              </motion.div>
            )
          })}
        </motion.div>
    </motion.section>
  )
}

export default About;
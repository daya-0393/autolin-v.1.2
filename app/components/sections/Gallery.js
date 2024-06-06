'use client'

import { useState } from "react";
import Modal from "../Modal";
import data from '/app/data.json';
import '/app/styles/gallery.scss'
import { oswald } from "@/app/fonts";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { motion } from "framer-motion";

const Gallery = ({}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setModalVisible(false);
  }

  const openModal = (id) => {
    setSelectedImage(id);
    setModalVisible(true);
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
    <section className="container-xl gallery" id="gallery">
      <motion.div className="row w-100"
        initial="hidden"
        whileInView="visible"
        variants={section}
        viewport={{once: true}}
      >
        <motion.div className="col-12 col-md-4" variants={item}>
          <h2 className={`section-title ${oswald.className}`}>Nuestro Trabajo</h2>
        </motion.div>
        <motion.div className="col-12 col-md-8" variants={item}>
          <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 2, 900: 3}}>
            <Masonry>
              {data.gallery.map((image, index) => {
                return (
                  <div key={index} className="m-1 gallery-item" onClick={() => openModal(index)}>
                    <img src={image} alt="carro" className="w-100"/>
                  </div>
                )
              })}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>
      </motion.div>
      {modalVisible && (
        <Modal onModalClose={closeModal} images={data.gallery} selectedImage={selectedImage}/>
      )}
    </section>
  )
}

export default Gallery;
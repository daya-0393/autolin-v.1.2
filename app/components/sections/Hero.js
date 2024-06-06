import { oswald } from '@/app/fonts';
import '/app/styles/hero.scss'
import { delay, motion } from 'framer-motion';

const Hero = () => {

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
    <div className="hero">
      <div className="overlay"></div>
      <motion.div className='hero-content'
        initial="hidden"
        animate="visible"
        variants={section}
      >
        <motion.h1 className={`${oswald.className} hero-title`} variants={item}>
          Todo para su vehículo
          <span className="title-bold">EN UN SOLO LUGAR</span>
        </motion.h1>
        <motion.a href='https://wa.me/+5060139787' className='btn btn-secondary' id='call-action'
          variants={item}
        >
          Agende su cita
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Hero;
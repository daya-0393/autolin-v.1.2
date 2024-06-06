import { motion, useAnimate, useInView } from "framer-motion"
import { useEffect } from "react"

const Motion = ({children}) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  
  useEffect(() => {
     if (isInView) {
       animate(scope.current, { opacity: 1 })
     }
  }, [isInView])
  
  return (
    <motion.div 
      ref= {scope}
      initial= {{opacity: 0}}
      transition={{duration: 0.8, delay: 0.7}} 
    >
      {children}
    </motion.div>
  )
}

export default Motion;
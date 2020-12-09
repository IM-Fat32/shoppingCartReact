import styled from 'styled-components';
import { motion } from 'framer-motion';


///Container Element 
export const Container = styled(motion.div)`
`;

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: .2, duration: .5 }
  },
  exit: {
    opacity: 0,
  }
}
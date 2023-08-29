import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion"
import { styles } from "../style"
import { fadeIn, textVariant } from "../utils/motion"


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Skillset i have</p>
          <h2 className={styles.sectionHeadText}>Technology.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        HTML, CSS, JS building small and medium web applications with React, Node, Express and ThreeJS, custom plugins, features animations and coding interactive layouts. I have also full-stack developer experience
      </motion.p>

      <div className="flex flex-row flex-wrap justify-center pt-[60px] gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 mt-[30px]" key={technology.name}>
            <BallCanvas icon = {technology.icon} />
          </div>
        ))}
        
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");
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
        {technologies.map((technology, index) => (
          <motion.div 
          variants={fadeIn("left", "spring", index*0.1, 0.75)}
          className="w-28 h-28 mt-[30px]" key={technology.name}
        >
          <div className="transform hover:scale-105 transition-transform duration-200 ease-in-out bg-primary rounded-3xl h-auto w-auto">
            <img alt={technology.name} title={technology.name}  src= {technology.icon} className="h-[100px] p-1"/>
            <p className="text-center text-sm text-slate-400 pb-1">{technology.name}</p>
          </div>
        </motion.div>
        ))}
        
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");
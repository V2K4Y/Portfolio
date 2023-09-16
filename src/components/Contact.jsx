import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { linkedin, email, github } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_cj8itk1',
        'template_g62vv9a',
        {
          from_name: form.name,
          to_name: "Vivek",
          from_email: form.email,
          to_email: "vivekkumar024y@gmail.com",
          message: form.message,
        },
        'nak7Z0MdoyDRz7j-g'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-1 bg-black-100 p-8 rounded-2xl'
      >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>
      
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-10 flex flex-col gap-5'
        >
          <div className="relative flex flex-col" data-te-input-wrapper-init>
            <input
                required
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                className="peer block w-full rounded border-0 bg-[#1e2041] py-4 px-6 outline-none 
                transition-all duration-200 ease-linear
                focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none 
                 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="full_name"
                placeholder="Your Name" />
            <label
                htmlFor="full_name"
                className="pointer-events-none absolute left-3 top-0 max-w-[90%] origin-[0_0] truncate pt-[0.57rem] leading-[2.15] 
                text-gray-400 transition-all duration-200 ease-out peer-valid:-translate-y-[1.15rem] peer-valid:scale-[0.8]
                peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200
                peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] 
                motion-reduce:transition-none"
                >Your Name
            </label>
          </div>
          <div className="relative flex flex-col" data-te-input-wrapper-init>
            <input
                required
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                className="peer block w-full rounded border-0 bg-[#1e2041] py-4 px-6 outline-none 
                transition-all duration-200 ease-linear
                focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none 
                 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="your_email"
                placeholder="Your Email" />
            <label
                htmlFor="your_email"
                className="pointer-events-none absolute left-3 top-0 max-w-[90%] origin-[0_0] truncate pt-[0.57rem] leading-[2.15] 
                text-gray-400 transition-all duration-200 ease-out peer-valid:-translate-y-[1.15rem] peer-valid:scale-[0.8]
                peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200
                peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] 
                motion-reduce:transition-none"
                >Your Email
            </label>
          </div>
          <div className="relative flex flex-col" data-te-input-wrapper-init>
            <textarea
                required
                rows={4}
                name='message'
                value={form.message}
                onChange={handleChange}
                className="peer block w-full rounded border-0 bg-[#1e2041] py-4 px-6 outline-none 
                transition-all duration-200 ease-linear
                focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none 
                 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="full_message"
                placeholder="Your Message" />
            <label
                htmlFor="full_message"
                className="pointer-events-none absolute left-3 top-0 max-w-[90%] origin-[0_0] truncate pt-[0.57rem] leading-[2.15] 
                text-gray-400 transition-all duration-200 ease-out peer-valid:-translate-y-[1.15rem] peer-valid:scale-[0.8]
                peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200
                peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] 
                motion-reduce:transition-none"
                >Your Message
            </label>
          </div>

          <button
            type='submit'
            className='bg-purple-700 py-3 px-8 mb-5 rounded outline-none w-full text-white font-sans shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <div className="flex flex-col flex-1">
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='h-[450px] md:h[300px] sm:md-[100px]'
        >
          <EarthCanvas />
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:h-[100px] md:h-[50px] sm:h-[20px] h-2 flex justify-center items-center xl:gap-15 md:gap-10 xs:gap-5"
        >
          <a href="https://www.linkedin.com/in/vivek-kumar-yadav-a377281b6" className="pr-[15px] hover:animate-[tada_1s_ease-in-out]">
            <img className="h-16"  src={linkedin} alt="LinkedIn" />
          </a>
          <a href="mailto:vivekkumar024y@gmail.com" className="pl-[15px] animate-[fade-in_1s_ease-in-out]">
            <img className="h-16" src={email} alt="Email" />
          </a>
          <a href="https://www.github.com/V2K4Y" className="pl-[15px] animate-[fade-in_1s_ease-in-out]">
            <img className="h-20" src={github} alt="Github" />
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
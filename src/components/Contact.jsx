import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        'https://portfolio-backend-teim.onrender.com/send', // Railway backend URL
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert('Thank you! I will get back to you soon.');
        setForm({ name: '', email: '', message: '' });
      } else {
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-8 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 sm:p-10 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-sm sm:text-base mb-2`}>
          Get in touch
        </p>
        <h3 className={`${styles.sectionHeadTextLight} text-2xl sm:text-4xl mb-6`}>
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-6 font-poppins"
        >
          {/* Name */}
          <label className="flex flex-col mb-4">
            <span className="text-timberWolf font-medium text-sm sm:text-base tracking-wider mb-2">
              YOUR NAME
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-3 px-4 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium text-sm sm:text-base"
              required
            />
          </label>

          {/* Email */}
          <label className="flex flex-col mb-4">
            <span className="text-timberWolf font-medium text-sm sm:text-base tracking-wider mb-2">
              YOUR EMAIL
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-3 px-4 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium text-sm sm:text-base"
              required
            />
          </label>

          {/* Message */}
          <label className="flex flex-col mb-4">
            <span className="text-timberWolf font-medium text-sm sm:text-base tracking-wider mb-2">
              YOUR MESSAGE
            </span>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-3 px-4 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium resize-none text-sm sm:text-base"
              required
            />
          </label>

          {/* Submit button */}
          <button
            type="submit"
            className="live-demo flex justify-center items-center gap-3 text-sm sm:text-base text-timberWolf font-bold font-beckman py-3 sm:py-4 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[44px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              const el = document.querySelector('.contact-btn');
              if (el) el.setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              const el = document.querySelector('.contact-btn');
              if (el) el.setAttribute('src', send);
            }}
          >
            {loading ? 'Sending...' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[22px] sm:h-[22px] w-[20px] h-[20px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');

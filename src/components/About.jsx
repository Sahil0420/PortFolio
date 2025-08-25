import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
  className="lg:w-1/2"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
  viewport={{ once: true }}
>
  <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
    About <span className="font-extrabold">Me</span>
  </h2>

  <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
    I'm a backend-focused developer with a strong passion for building scalable, high-performance applications. My expertise lies in <strong> Node.js, Express.js, and cloud hosting</strong>, and I enjoy creating robust systems that handle real-time data and secure transactions.
  </p>

  <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
    During my professional journey, I’ve worked on projects like **multi-role authentication gaming platforms**, e-commerce backends, and real-time chat applications. I deploy and manage applications on <strong>AWS EC2</strong> with Nginx, ensuring reliability and performance.
  </p>

  <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
    I’m proficient in <strong>Python, Go, MongoDB, PostgreSQL</strong>, and various web technologies including <strong>React.js, Next.js, Node.js, Express.js, and Astro.js</strong>. Beyond coding, I enjoy **problem-solving, exploring new tech, and contributing to innovative projects**.
  </p>

  <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
    In my free time, I love <strong>solving coding challenges, building small personal projects,</strong> and diving into robotics. I also enjoy <strong>sci-fi movies, 90s hip-hop, chess, and songwriting</strong>.
  </p>
</motion.div>

    </div>
  );
}

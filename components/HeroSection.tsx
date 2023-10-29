'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SocialIcon from '@/components/social-icons'

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center justify-self-start text-center sm:text-left"
        >
          <h1 className="light:text-blacksm:text-5xl mb-4 text-4xl font-extrabold dark:text-white lg:text-8xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
              Hello, I&apos;m{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={['Chris', 1000, 'an Engineer', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="light:text-black mb-6 text-base dark:text-[#b8bfc4] sm:text-lg lg:text-xl">
            Avid learner. Passionate C++ and robotics programmer.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src="/static/images/avatar.png"
              alt="avatar"
              width={300}
              height={300}
              className="h-48 w-48 rounded-full md:h-80 md:w-80"
            />
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="github" href="www.google.com" />
              <SocialIcon kind="linkedin" href="www.google.com" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

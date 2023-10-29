'use client'
import React from 'react'

function Skill({ source, alt, title }) {
  return (
    <img
      src={source}
      alt={alt}
      title={title}
      height={400}
      width={400}
    />
  )
}

export default function SkillsSection() {
  return (
    <div>
      <h1 className="text-3xl font-semibold dark:text-white">
        Technologies I use
      </h1>
      <div className="mt-4 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg"
          alt="The logo for cpp"
          title="cpp"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
          alt="The logo icon for python"
          title="Python"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          alt="The logo icon for Linux"
          title="Linyx"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="The logo icon for typescript"
          title="Typescript"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="The logo icon for react"
          title="React"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="The logo icon for HTML 5"
          title="HTML 5"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="The logo icon for CSS3"
          title="CSS 3"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="The logo icon for Git"
          title="Git"
        />

        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
          alt="The logo icon for NodeJS"
          title="Node JS"
        />
      </div>
    </div>
  )
}

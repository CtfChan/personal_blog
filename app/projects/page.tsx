import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

import { allProjects } from 'contentlayer/generated'
import React from 'react'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 text-white xl:grid-cols-3">
          {allProjects.map((project) => (
            <Card
              key={project.name}
              name={project.name}
              date={project.date}
              tags={project.tags}
              src={project.src}
              description={project.description}
              demoLink={project.demoLink}
              codeLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </>
  )
}

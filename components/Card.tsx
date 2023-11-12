import React from 'react'
import Image from './Image'

const Card = ({
  name,
  date,
  tags,
  src,
  description,
  demoLink,
  codeLink,
}) => (
  <div className="rounded-md border-2 border-gray-200 border-opacity-60 transition-all hover:translate-y-3 dark:border-gray-700">
    <div className="aspect-w-3 aspect-h-2 p-4">
      <Image
        alt={name}
        src={src}
        className="h-full w-full rounded-md object-cover"
        width={544}
        height={300}
      />
    </div>

    <div className="mt-2 flex flex-wrap justify-center gap-2 px-2  text-gray-500 dark:text-gray-100">
      {tags.map((tag: string) => {
        return (
          <span
            key={tag}
            className="border-terminal-green flex items-center justify-center whitespace-nowrap rounded-md border px-2 py-1 text-xs font-semibold shadow-lg"
          >
            {tag}
          </span>
        )
      })}
    </div>

    <div className="px-3 pb-6 pt-4 text-center">
      <h2 className="text-xl font-semibold text-black dark:text-white">
        {name}
      </h2>
      <div className="mt-1 text-xs text-gray-700 dark:text-gray-200">
        {new Date(date).toDateString()}
      </div>
      <div className="mt-2 text-sm text-black dark:text-gray-300">
        {description}{' '}
        {/* <a
          className="text-terminal-green underline"
          href={'/projects/' + name}
        >
          Learn more
        </a> */}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 mr-2 cursor-pointer whitespace-nowrap rounded-md bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Link to Demo
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            className="group relative mb-2 mr-2 inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-lg bg-gradient-to-br from-green-500 to-green-500 p-0.5 text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
            rel="noopener noreferrer"
          >
            <span className="relative flex items-center rounded-md  from-green-500 via-green-600 to-green-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
              <Image
                alt="github logo"
                src="static/images/github-icon.svg"
                className="mr-2 h-6 w-6"
                width={24}
                height={24}
              />
              View Code
            </span>
          </a>
        )}
      </div>
    </div>
  </div>
)

export default Card

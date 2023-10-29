import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'

import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find(
    (p) => p.slug === 'default'
  ) as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <HeroSection />
      <SkillsSection />
      {/* <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout> */}
    </>
  )
}

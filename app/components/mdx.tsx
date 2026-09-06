import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import { JupyterNotebook } from './jupyter-notebook'
import { ZoomableImage } from './zoomable-image'
import { Tweet } from 'react-tweet'
import { YouTubeEmbed } from '@next/third-parties/google'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

// Only fenced code blocks are highlighted. MDX wraps those in <pre>, so it passes a
// className like "language-scala", while inline `code` spans in prose have none.
// sugar-high is a JavaScript highlighter, so running it on prose miscolours any word
// that happens to be a JS keyword — `case`, `for`, `if` — in languages that are not
// JavaScript.
function Code({ children, ...props }) {
  // Inline `code` spans in prose are plain text; fenced blocks arrive with a
  // className like "language-scala" from MDX. Highlighting anything else would
  // also break on non-string children (MDX passes elements through here).
  if (typeof children !== 'string' || !props.className) {
    return <code {...props}>{children}</code>
  }
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function Video({ src, width = '800', ...props }) {
  return (
    <video controls width={width} {...props}>
      <source src={src} type="video/mp4" />
      Your browser doesn't support HTML5 video
    </video>
  )
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  JupyterNotebook,
  Video,
  ZoomableImage,
  Tweet,
  YouTubeEmbed,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeKatex],
        },
      }}
    />
  )
}

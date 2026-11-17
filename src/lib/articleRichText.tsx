import { Fragment, ReactNode } from 'react'
import { Link } from 'react-router-dom'

function renderBoldSegments(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, idx) =>
    idx % 2 === 1 ? (
      <strong key={`${keyPrefix}-b-${idx}`} className="text-foreground font-bold">
        {part}
      </strong>
    ) : (
      <Fragment key={`${keyPrefix}-t-${idx}`}>{part}</Fragment>
    )
  )
}

interface MarkdownToken {
  type: 'text' | 'link'
  content: string
  url?: string
}

/** Tokenizes markdown links while keeping balanced parentheses inside URLs intact. */
function tokenizeMarkdownLinks(input: string): MarkdownToken[] {
  const tokens: MarkdownToken[] = []
  let i = 0
  let textStart = 0

  while (i < input.length) {
    if (input[i] === '[') {
      const closeBracket = input.indexOf(']', i + 1)
      if (closeBracket !== -1 && input[closeBracket + 1] === '(') {
        let depth = 1
        let j = closeBracket + 2
        while (j < input.length && depth > 0) {
          if (input[j] === '(') depth++
          else if (input[j] === ')') depth--
          j++
        }
        if (depth === 0) {
          if (i > textStart) {
            tokens.push({ type: 'text', content: input.slice(textStart, i) })
          }
          tokens.push({
            type: 'link',
            content: input.slice(i + 1, closeBracket),
            url: input.slice(closeBracket + 2, j - 1),
          })
          i = j
          textStart = i
          continue
        }
      }
    }
    i++
  }

  if (textStart < input.length) {
    tokens.push({ type: 'text', content: input.slice(textStart) })
  }
  return tokens
}

/** Renders inline markdown bold and internal/external links for article copy. */
export function renderArticleRichText(text: string): ReactNode[] {
  const tokens = tokenizeMarkdownLinks(text)
  return tokens.map((token, idx) => {
    if (token.type === 'text') {
      return <Fragment key={`seg-${idx}`}>{renderBoldSegments(token.content, `seg-${idx}`)}</Fragment>
    }

    let url = (token.url || '').trim()
    if (url.includes('google.com/search?q=')) {
      url = url.replace(/https?:\/\/(?:www\.)?google\.com\/search\?q=/i, '')
    }

    if (url.startsWith('/')) {
      return (
        <Link
          key={`lnk-${idx}`}
          to={url}
          className="text-accent hover:underline font-medium transition-colors"
        >
          {token.content}
        </Link>
      )
    }

    return (
      <a
        key={`ext-${idx}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline font-medium transition-colors"
      >
        {token.content}
      </a>
    )
  })
}

/** Splits multi-paragraph / bullet-list article fields and renders rich text. */
export function renderArticleParagraphs(text: string): ReactNode {
  if (!text) return null
  if (text.includes('\n-')) {
    const lines = text.split('\n')
    const blocks: ReactNode[] = []
    let listItems: ReactNode[] = []

    const flushList = (key: string) => {
      if (listItems.length > 0) {
        blocks.push(
          <ul key={key} className="list-disc pl-6 mb-6 space-y-1">
            {listItems}
          </ul>
        )
        listItems = []
      }
    }

    lines.forEach((line, idx) => {
      const trimmed = line.trim()
      if (trimmed.startsWith('-')) {
        listItems.push(
          <li key={`li-${idx}`} className="mb-2 text-muted-foreground">
            {renderArticleRichText(trimmed.replace(/^-+\s*/, ''))}
          </li>
        )
      } else {
        flushList(`ul-${idx}`)
        if (trimmed.length > 0) {
          blocks.push(
            <p key={`p-${idx}`} className="mb-6">
              {renderArticleRichText(trimmed)}
            </p>
          )
        }
      }
    })
    flushList('ul-end')
    return blocks
  }

  const paragraphs = text.split('\n\n')
  return paragraphs.map((paragraph, index) => (
    <p key={index} className="mb-6">
      {renderArticleRichText(paragraph)}
    </p>
  ))
}

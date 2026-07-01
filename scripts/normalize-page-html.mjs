/** Shared HTML normalization for synced page content */

function cleanMarkup(content) {
  let result = content

  // Google reviews widget remnants (TestimonialsSection replaces these on key pages)
  result = result.replace(/<li[\s\S]*?<\/li>/gi, (block) =>
    /googleusercontent|google\.com\/maps\/contrib|★★★★★/.test(block) ? '' : block,
  )
  result = result.replace(/<\/?ul[^>]*>/gi, '')
  result = result.replace(/\s*<\/li>/gi, '')
  result = result.replace(/<li[^>]*>/gi, '')
  result = result.replace(/<span title="Powered by Google"><\/span>/gi, '')

  // WP anchor wrappers
  result = result.replace(/<div id="[^"]*">\s*<\/div>/gi, '')
  result = result.replace(/<div id="[^"]*">/gi, '')

  // Broken img / iframe attributes from WP export
  result = result.replace(/\s+\/\s+(?=loading=)/gi, ' ')
  result = result.replace(/loading="lazy"\s+loading="lazy"/gi, 'loading="lazy"')

  result = result.replace(/<span>\s*(<figure[\s\S]*?<\/figure>)\s*<\/span>/gi, '$1')
  result = result.replace(/<span>\s*<\/span>/gi, '')

  return result.trim()
}

function linesToList(lines) {
  const items = lines
    .map((line) => line.replace(/&nbsp;/gi, '').trim())
    .filter((line) => line && line !== '\u00a0' && !/^</.test(line))

  if (items.length < 2) {
    return null
  }

  return `<ul class="page-list">${items.map((line) => `<li>${line}</li>`).join('')}</ul>`
}

/** Fix Bondi/Launceston-style pages that already have page-intro + page-section markup. */
function repairStructuredPageHtml(content) {
  let result = content

  // Close page-badges before the first service section (badges were wrapping broker blocks).
  result = result.replace(
    /(<div class="page-badges">(?:<span class="page-badge">[\s\S]*?<\/span>\s*)+)(?=<section class="page-section)/i,
    '$1</div>',
  )

  // Close page-intro after value badges and before broker sections.
  result = result.replace(
    /(<div class="page-intro">[\s\S]*?<div class="page-badges">(?:<span class="page-badge">[\s\S]*?<\/span>\s*)+<\/div>)\s*(?=<section class="page-section)/i,
    '$1</div>',
  )

  // Span-wrapped broker lists (Business Finance section).
  result = result.replace(
    /(including the following categories:<\/p>)((?:\s*<p><span>[^<]+<\/span>(?:<b><\/b>)?<\/p>){2,})/gi,
    (_, intro, items) => {
      if (items.includes('<ul class="page-list">')) {
        return intro + items
      }

      const spans = [...items.matchAll(/<p><span>([^<]+)<\/span>/gi)].map((match) => match[1].trim())
      const listItems = spans.filter((text) => !/we're more than happy|let's start a conversation/i.test(text))
      if (listItems.length < 2) {
        return intro + items
      }

      const lis = listItems.map((text) => `<li>${text}</li>`).join('')
      const remainder = items.replace(/<p><span>([^<]+)<\/span>(?:<b><\/b>)?<\/p>/gi, (block, text) =>
        /we're more than happy|let's start a conversation/i.test(text) ? block : '',
      )

      return `${intro}<ul class="page-list">${lis}</ul>${remainder}`
    },
  )

  // Raw newline-separated lists after category intro paragraphs.
  result = result.replace(
    /(including the following categories:<\/p>)\s*([\s\S]*?)(?=\s*<figure|\s*<\/section|\s*<a class="page-btn)/gi,
    (_, intro, block) => {
      if (block.includes('<ul class="page-list">')) {
        return intro + block
      }

      const lines = block.split(/\n+/)
      const list = linesToList(lines)
      if (!list) {
        return intro + block
      }

      const remainder = block.slice(block.indexOf(lines[lines.length - 1]) + lines[lines.length - 1].length)
      const trimmedRemainder = remainder.replace(/^[\s\n]+/, '').replace(/^(?!<)/, '')
      return `${intro}${list}${trimmedRemainder.startsWith('<') ? trimmedRemainder : ''}`
    },
  )

  // Remove orphan closing divs left from broken WP export nesting inside sections.
  result = result.replace(/<\/div>\s*(?=<\/section>)/gi, '')
  result = result.replace(/<\/div>\s*(?=<figure)/gi, '')
  result = result.replace(/<\/div>\s*(?=<a class="page-btn)/gi, '')

  // Strip empty bold / span wrappers.
  result = result.replace(/<b><\/b>/gi, '')
  result = result.replace(/<p>\s*<\/p>/gi, '')

  return result.replace(/\s{2,}/g, ' ').trim()
}

export function normalizePageHtml(html) {
  if (!html) {
    return ''
  }

  if (/<div class="page-intro">/i.test(html) && /<section class="page-section"/i.test(html)) {
    return repairStructuredPageHtml(html)
  }

  let content = html

  // Remove duplicate hero / widgets / broken embeds
  content = content.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, '')
  content = content.replace(/<p>\s*LAGOS FINANCIAL\s*<\/p>/gi, '')
  content = content.replace(/<div[^>]*id="repaymentWidget"[^>]*>[\s\S]*?<\/div>/gi, '')
  content = content.replace(/<div[^>]*id="hero-image"[^>]*>[\s\S]*?<\/div>/gi, '')
  content = content.replace(/<div[^>]*id="google-business-reviews-rating"[^>]*>[\s\S]*?<\/div>/gi, '')
  content = content.replace(/<!--[\s\S]*?-->/g, '')

  // Strip broken WP carousel / empty markup
  content = content.replace(/<figure>\s*<\/figure>/gi, '')
  content = content.replace(/<img[^>]*\salt=""[^>]*\/?>/gi, '')
  content = content.replace(/<i>\s*<\/i>/gi, '')

  // Flatten anonymous wrapper divs
  let prev = ''
  for (let i = 0; i < 12 && content !== prev; i += 1) {
    prev = content
    content = content.replace(/<div>([\s\S]*?)<\/div>/gi, '$1')
  }

  // Icon font glyphs from WP
  content = content.replace(/<span><span>[^<]{0,4}<\/span><\/span>/gi, '')

  // Category bullet lists on location pages (paragraph-wrapped items)
  content = content.replace(
    /(including the following categories:<\/p>\s*)((?:<p>(?:<span>)?[^<]+(?:<\/span>)?<\/p>\s*)+)/gi,
    (_, intro, items) => {
      const lis = items.replace(/<p>(?:<span>)?([^<]+)(?:<\/span>)?<\/p>/gi, '<li>$1</li>')
      return `${intro}<ul class="page-list">${lis}</ul>`
    },
  )

  // Category lists as raw newline-separated text
  content = content.replace(
    /(including the following categories:<\/p>)\s*((?:[^\n<]+(?:\n|$))+)/gi,
    (_, intro, block) => {
      const list = linesToList(block.split(/\n+/))
      return list ? `${intro}${list}` : intro + block
    },
  )

  // Themed CTA links
  content = content.replace(
    /<a([^>]*href="\/contact"[^>]*)>([\s\S]*?)<\/a>/gi,
    (_, attrs, label) => {
      const text = label.replace(/<[^>]+>/g, '').trim()
      if (/book|complimentary|assessment|conversation|free call/i.test(text)) {
        return `<a class="page-btn"${attrs.replace(/\sclass="[^"]*"/, '')}>${label}</a>`
      }
      return `<a class="page-link"${attrs}>${label}</a>`
    },
  )

  content = content.replace(
    /<a([^>]*href="\/podcast"[^>]*)>([\s\S]*?)<\/a>/gi,
    '<a class="page-btn page-btn--outline"$1>$2</a>',
  )

  // Media
  content = content.replace(/\s+\/\s+(?=loading=)/gi, ' ')
  content = content.replace(
    /<img([^>]*src="([^"]+)"[^>]*)>/gi,
    (_, attrs, src) => {
      if (/maps\.gstatic|googleusercontent\.com\/a-/i.test(src)) return ''
      const cleanAttrs = attrs.replace(/\s*loading="lazy"/gi, '').trim()
      if (/width="(90|94|111|116|185|200|219)"/i.test(attrs)) {
        return `<figure class="page-icon"><img ${cleanAttrs} loading="lazy"></figure>`
      }
      return `<figure class="page-media"><img ${cleanAttrs} loading="lazy"></figure>`
    },
  )

  content = content.replace(
    /<iframe([^>]*src="([^"]+)"[^>]*)><\/iframe>/gi,
    '<div class="page-map"><iframe$1 loading="lazy"></iframe></div>',
  )

  content = content.replace(
    /<div class="video-embed">([\s\S]*?)<\/div>/gi,
    '<div class="page-video">$1</div>',
  )

  // Feature cards: h4 + following p
  content = content.replace(
    /(<h4[^>]*>[\s\S]*?<\/h4>\s*<p>[\s\S]*?<\/p>)/gi,
    '<div class="page-feature">$1</div>',
  )
  content = content.replace(
    /((?:<div class="page-feature">[\s\S]*?<\/div>\s*){2,})/gi,
    '<div class="page-feature-grid">$1</div>',
  )

  // Value badges (Transparency / Results / Freedom)
  content = content.replace(
    /<h3>(Transparency|Results|Freedom)<\/h3>/gi,
    '<span class="page-badge">$1</span>',
  )
  content = content.replace(
    /((?:<span class="page-badge">[\s\S]*?<\/span>\s*){2,})/gi,
    '<div class="page-badges">$1</div>',
  )

  // Accreditations row
  content = content.replace(
    /<h3>Our Accreditations & Memberships<\/h3>([\s\S]*?)(?=<h2|$)/i,
    '<div class="page-accreditations"><h3>Our Accreditations & Memberships</h3><div class="page-accreditations__grid">$1</div></div>',
  )

  // Sectionize on h2
  const parts = content.split(/(?=<h2[\s>])/i).filter((part) => part.trim())
  if (parts.length > 1 || /^<h2/i.test(parts[0] ?? '')) {
    content = parts
      .map((part, index) => {
        const trimmed = part.trim()
        if (!trimmed) return ''
        if (/what our clients are saying|what clients say/i.test(trimmed)) {
          const tail = trimmed.match(
            /(<div class="page-feature"><h4>[\s\S]*?<\/div>\s*<a class="page-btn"[\s\S]*?<\/a>\s*<div class="page-accreditations">[\s\S]*)$/i,
          )
          return tail ? `<section class="page-section">${tail[1]}</section>` : ''
        }
        const isIntro = index === 0 && !/^<h2/i.test(trimmed)
        if (isIntro) return `<div class="page-intro">${trimmed}</div>`
        const isStep = /^<h2[^>]*>\s*Step\s+\d+/i.test(trimmed)
        const isService = /^<h2[^>]*>[^<]*Broker/i.test(trimmed)
        const sectionClass = isStep
          ? 'page-section page-section--step'
          : isService
            ? 'page-section page-section--service'
            : 'page-section'
        return `<section class="${sectionClass}">${trimmed}</section>`
      })
      .join('')
  }

  content = cleanMarkup(content)
  content = repairStructuredPageHtml(content)
  content = content.replace(/\s{2,}/g, ' ').trim()

  return content
}

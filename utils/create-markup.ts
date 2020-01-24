import marked from 'marked'

interface Options {
  renderInline?: boolean
}

export default function createMarkup(markdown: string, options: Options = {}) {
  const renderer = new marked.Renderer()

  if (options.renderInline) {
    // Render input as is, without wrapping <p> tags
    renderer.paragraph = text => text
  }

  const config = {
    renderer,
    gfm: true,
    breaks: true,
    headerIds: true,
    mangle: true,
    smartypants: true,
    xhtml: true,
  }

  // Parse Markdown
  const html = marked(markdown, config)

  return {
    __html: html,
  }
}

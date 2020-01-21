import showdown from 'showdown'

interface Options {
  renderInline?: boolean
}

export default function createMarkup(markdown: string, options: Options = {}) {
  const converter = new showdown.Converter({ noHeaderId: true })
  let html = converter.makeHtml(markdown)

  if (options.renderInline) {
    // Remove <p> tags
    html = html.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, '')
  }

  return {
    __html: html,
  }
}

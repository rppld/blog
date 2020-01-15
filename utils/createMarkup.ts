import showdown from 'showdown'

export default function createMarkup(markdown: string) {
  const converter = new showdown.Converter({ noHeaderId: true })
  return {
    __html: converter.makeHtml(markdown),
  }
}

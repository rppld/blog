import React from "react"
import PropTypes from "prop-types"

// Handle legacy names for image queries.
const convertProps = props => {
  let convertedProps = { ...props }

  if (convertedProps.responsiveSizes) {
    convertedProps.sizes = convertedProps.responsiveSizes
    delete convertedProps.responsiveSizes
  }

  // Use own string for sizes attribute
  convertedProps.sizes.sizes = props.sizesString

  return convertedProps
}

// Cache if we've seen an image before so we don't both with
// lazy-loading & fading in on subsequent mounts.
const imageCache = {}
const inImageCache = props => {
  const convertedProps = convertProps(props)
  // Find src
  const src = convertedProps.sizes.src

  if (imageCache[src]) {
    return true
  } else {
    imageCache[src] = true
    return false
  }
}

let io
const listeners = []

function getIO() {
  if (
    typeof io === `undefined` &&
    typeof window !== `undefined` &&
    window.IntersectionObserver
  ) {
    io = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          listeners.forEach(l => {
            if (l[0] === entry.target) {
              // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                io.unobserve(l[0])
                l[1]()
              }
            }
          })
        })
      },
      { rootMargin: `10px` }
    )
  }

  return io
}

const listenToIntersections = (el, cb) => {
  getIO().observe(el)
  listeners.push([el, cb])
}

let isWebpSupportedCache = null
const isWebpSupported = () => {
  if (isWebpSupportedCache !== null) {
    return isWebpSupportedCache
  }

  const elem =
    typeof window !== `undefined` ? window.document.createElement(`canvas`) : {}
  if (elem.getContext && elem.getContext(`2d`)) {
    isWebpSupportedCache =
      elem.toDataURL(`image/webp`).indexOf(`data:image/webp`) === 0
  } else {
    isWebpSupportedCache = false
  }

  return isWebpSupportedCache
}

const noscriptImg = props => {
  const {
    opacity = ``,
    src,
    srcSet,
    sizes = ``,
    title = ``,
    alt = ``,
    width = ``,
    height = ``,
    transitionDelay = ``
  } = props
  return `<img width=${width} height=${height} src="${src}" srcset="${srcSet}" alt="${alt}" title="${title}" sizes="${sizes}" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:${transitionDelay};opacity:${opacity};width:100%;height:100%;object-fit:cover;objectPosition:center"/>`
}

const Img = props => {
  const { opacity, onLoad, transitionDelay = ``, ...otherProps } = props
  return (
    <img
      {...otherProps}
      onLoad={onLoad}
      style={{
        position: `absolute`,
        top: 0,
        left: 0,
        transition: `opacity 0.5s`,
        transitionDelay,
        opacity,
        width: `100%`,
        height: `100%`,
        objectFit: `cover`,
        objectPosition: `center`
      }}
    />
  )
}

Img.propTypes = {
  opacity: PropTypes.number,
  transitionDelay: PropTypes.string,
  onLoad: PropTypes.func
}

class Image extends React.Component {
  constructor(props) {
    super(props)

    // If this browser doesn't support the IntersectionObserver API
    // we default to start downloading the image right away.
    let isVisible = true
    let imgLoaded = true
    let IOSupported = false

    // If this image has already been loaded before then we can assume it's
    // already in the browser cache so it's cheap to just show directly.
    const seenBefore = inImageCache(props)

    if (
      !seenBefore &&
      typeof window !== `undefined` &&
      window.IntersectionObserver
    ) {
      isVisible = false
      imgLoaded = false
      IOSupported = true
    }

    // Always don't render image while server rendering
    if (typeof window === `undefined`) {
      isVisible = false
      imgLoaded = false
    }

    this.state = {
      isVisible,
      imgLoaded,
      IOSupported
    }

    this.handleRef = this.handleRef.bind(this)
  }

  handleRef(ref) {
    if (this.state.IOSupported && ref) {
      listenToIntersections(ref, () => {
        this.setState({ isVisible: true, imgLoaded: false })
      })
    }
  }

  render() {
    const {
      title,
      alt,
      className,
      outerWrapperClassName,
      style = {},
      sizes,
      backgroundColor
    } = convertProps(this.props)

    let bgColor
    if (typeof backgroundColor === `boolean`) {
      bgColor = `lightgray`
    } else {
      bgColor = backgroundColor
    }

    if (sizes) {
      const image = sizes

      // Use webp by default if browser supports it
      if (image.srcWebp && image.srcSetWebp && isWebpSupported()) {
        image.src = image.srcWebp
        image.srcSet = image.srcSetWebp
      }

      // The outer div is necessary to reset the z-index to 0.
      return (
        <div
          className={`${
            outerWrapperClassName ? outerWrapperClassName : ``
          } gatsby-image-outer-wrapper`}
          style={{
            zIndex: 0,
            // Let users set component to be absolutely positioned.
            position: style.position === `absolute` ? `initial` : `relative`
          }}
        >
          <div
            className={`${className ? className : ``} gatsby-image-wrapper`}
            style={{
              position: `relative`,
              overflow: `hidden`,
              zIndex: 1,
              ...style
            }}
            ref={this.handleRef}
          >
            {/* Preserve the aspect ratio. */}
            <div
              style={{
                width: `100%`,
                paddingBottom: `${100 / image.aspectRatio}%`
              }}
            />

            {/* Show the blurry base64 image. */}
            {image.base64 && (
              <Img
                alt={alt}
                title={title}
                src={image.base64}
                // opacity={!this.state.imgLoaded ? 1 : 0}
                opacity={1}
                transitionDelay={`0.25s`}
              />
            )}

            {/* Show a solid background color. */}
            {bgColor && (
              <div
                title={title}
                style={{
                  backgroundColor: bgColor,
                  position: `absolute`,
                  top: 0,
                  bottom: 0,
                  opacity: !this.state.imgLoaded ? 1 : 0,
                  transitionDelay: `0.35s`,
                  right: 0,
                  left: 0
                }}
              />
            )}

            {/* Once the image is visible (or the browser doesn't support IntersectionObserver), start downloading the image */}
            {this.state.isVisible && (
              <Img
                alt={alt}
                title={title}
                srcSet={image.srcSet}
                src={image.src}
                sizes={image.sizes}
                opacity={
                  this.state.imgLoaded || this.props.fadeIn === false ? 1 : 0
                }
                onLoad={() => {
                  requestAnimationFrame(() => {
                    // Make loading a little smoother
                    setTimeout(() => {
                      this.state.IOSupported &&
                        this.setState({ imgLoaded: true })
                      this.props.onLoad && this.props.onLoad()
                    }, 100)
                  })
                }}
              />
            )}

            {/* Show the original image during server-side rendering if JavaScript is disabled */}
            <noscript
              dangerouslySetInnerHTML={{
                __html: noscriptImg({ alt, title, ...image })
              }}
            />
          </div>
        </div>
      )
    }

    return null
  }
}

Image.defaultProps = {
  fadeIn: true,
  alt: ``
}

Image.propTypes = {
  responsiveSizes: PropTypes.object,
  sizes: PropTypes.object,
  sizesString: PropTypes.string,
  fadeIn: PropTypes.bool,
  title: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), // Support Glamor's css prop.
  outerWrapperClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  style: PropTypes.object,
  position: PropTypes.string,
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onLoad: PropTypes.func
}

export default Image

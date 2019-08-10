import React from 'react'
import debounce from 'lodash/debounce'
import { scaleItems } from '../utils'

function useItemScaling(containerRef) {
  React.useEffect(() => {
    if (!containerRef) return false
    const els = containerRef.current.childNodes
    if (els.length === 0) return false
    scaleItems(els)
    window.addEventListener('scroll', () => scaleItems(els))
    window.addEventListener('resize', debounce(() => scaleItems(els), 200))

    return () => {
      window.removeEventListener('scroll', scaleItems)
      window.removeEventListener('resize', scaleItems)
    }
  }, [containerRef])
}

export default useItemScaling

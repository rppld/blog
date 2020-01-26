import css from 'styled-jsx/css'

const num = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const arr = [16, 24, 32, 40, 48, 64, 72, 80, 88, 96]
function generatePalette(name: string, h: number, s: number): string {
  let palette = []
  for (let i = 0; i < arr.length; i++) {
    const number = num[i]
    const l = arr[i]
    palette.push(`--color-${name}-${number}: hsla(${h}, ${s}%, ${l}%, 100%);`)
  }
  return palette.join(' ')
}

const style = css.global`
  :root {
    ${generatePalette('gray', 0, 0)}
    ${generatePalette('blue', 196, 100)}
    ${generatePalette('purple', 261, 76)}
    ${generatePalette('pink', 299, 100)}
    ${generatePalette('red', 360, 100)}
    ${generatePalette('yellow', 48, 100)}
    ${generatePalette('green', 159, 100)}
    ${generatePalette('cyan', 173, 96)}

    --color-body: var(--color-gray-2);
    --color-menubar: var(--color-purple-7);
    --color-text-meta: var(--color-gray-5);
    --color-image-background: var(--color-gray-1);
    --color-input-border: var(--color-gray-3);
    --color-input-border-focus: var(--color-gray-5);
    --color-primary: var(--color-purple-5);
    --color-primary-focus: var(--color-purple-focus);
    --color-error: var(--color-red-5);
    --color-error-focus: var(--color-red-focus);
    --color-ok: var(--color-green-5);
    --color-ok-focus: var(--color-green-focus);
  }
`

export default style

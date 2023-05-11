// View documentation at: https://enhance.dev/docs/learn/starter-project/elements
/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function MyHeader({ html, state }) {
  const { attrs } = state
  const { variant } = attrs
  console.log(variant)
  const bold = variant === 'bold' ? 'font-bold' : 'font-hairline'
  return html`
    <header>
      <h1 class="${bold}">Header</h1>
      <nav>
        <a href=/>home</a>
        <a href=/about>about</a>
      </nav>
    </header>
  `
}

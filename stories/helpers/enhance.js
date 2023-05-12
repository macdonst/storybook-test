export const enhanceArgs = function(html, attrs) {
  return {
    html,
    state: {
      attrs
    }
  }
}

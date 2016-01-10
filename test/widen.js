import expect from 'expect'
import { createClass, createElement } from 'react'
import { createRenderer } from 'react-addons-test-utils'
import widen from '../src/widen'

function shallowRender(node, renderer = createRenderer()) {
  renderer.render(node)
  return renderer.getRenderOutput()
}

describe('widen', () => {
  it('sets default amount', () => {
    const decorator = widen()

    const Decorated = decorator(
      createClass({
        render() {
          return createElement('div', this.props)
        }
      })
    )

    const { props: { style }} = shallowRender(createElement(Decorated))

    expect(style).toEqual({
      marginLeft: '-1000px',
      marginRight: '-1000px',
      paddingLeft: '1000px',
      paddingRight: '1000px'
    })
  })

  it('sets provided amount', () => {
    const amount = '500px'
    const decorator = widen(amount)

    const Decorated = decorator(
      createClass({
        render() {
          return createElement('div', this.props)
        }
      })
    )

    const { props: { style }} = shallowRender(createElement(Decorated))

    expect(style).toEqual({
      marginLeft: '-500px',
      marginRight: '-500px',
      paddingLeft: '500px',
      paddingRight: '500px'
    })
  })
})

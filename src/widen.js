import withStyle from 'react-with-style'

export default function widen(amount = '1000px') {
  return (WrappedComponent) => withStyle({
    marginLeft: `-${amount}`,
    marginRight: `-${amount}`,
    paddingLeft: `${amount}`,
    paddingRight: `${amount}`
  })(WrappedComponent)
}

import React from 'react'

const withPropsStyles = (Component) => (props) => {
  return <Component {...props} name='new Component with styles' />
}

export default withPropsStyles

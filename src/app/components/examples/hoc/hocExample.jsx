import React from 'react'
import Component from './someComponent'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'
import withLogin from './withLogin'
import withPropsStyles from './withPropsStyles'

const WithLoginComponent = withLogin(Component)
const WithPropsStylesComponent = withPropsStyles(Component)
const ComposedComponent = withPropsStyles(WithLoginComponent)

const HOCExample = () => {
  return (
    <>
      <CardWrapper>
        <SmallTitle>1. Обычный компонент</SmallTitle>
        <Divider />
        <Component />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>2. Функциональный HOC</SmallTitle>
        <Divider />
        <WithLoginComponent />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>3. HOC With Styles and Props</SmallTitle>
        <Divider />
        <WithPropsStylesComponent />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>4. Composed HOC</SmallTitle>
        <Divider />
        <ComposedComponent />
      </CardWrapper>
    </>
  )
}

export default HOCExample

import React from 'react'
import CollapseWrapper from '../common/collapse'
import PropTypes from 'prop-types'
import Divider from '../common/divider'
import SmallTitle from '../common/typografy/smallTitle'

const ChildrenExercise = () => {
  return (
    <CollapseWrapper title='Упражнение'>
      <p className='mt-3'>
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить
        порядковый номер, относительно того, как они располагаются на странице.
        Вы можете использовать как <code>React.Children.map</code> так и{' '}
        <code>React.Children.toArray</code>
      </p>
      <Divider />
      <SmallTitle>Решение</SmallTitle>

      <ListComponents>
        <Component />
        <Component />
        <Component />
      </ListComponents>
    </CollapseWrapper>
  )
}

const Component = () => {
  return <>Компонент списка</>
}

const ListComponents = ({children}) => {
  return React.Children.map(children, (child, index) => {
    return (
      <>
        <div className='mb-3'>
          {child} {index + 1}
        </div>
      </>
    )
  })
}

ListComponents.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default ChildrenExercise

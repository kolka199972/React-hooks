import React from 'react'
import CardWrapper from '../../common/Card'
import TextField from '../../common/form/textField'

import SmallTitle from '../../common/typografy/smallTitle'
const CloneElementExample = () => {
  const field = (
    <TextField
      name='email'
      label='email'
      onChange={() => console.log('original')}
    />
  )

  const handleChange = (target) => {
    console.log('Clone', target)
  }
  return (
    <CardWrapper>
      <SmallTitle>Пример</SmallTitle>
      {field}
      {React.cloneElement(field, {
        onChange: handleChange,
        label: 'Cloned email'
      })}
    </CardWrapper>
  )
}

export default CloneElementExample

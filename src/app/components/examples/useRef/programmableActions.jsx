import React, {useRef} from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/divider'
import SmallTitle from '../../common/typografy/smallTitle'
const ProgrammableActionsExample = () => {
  const inputRef = useRef()

  const handleClickFocus = () => {
    inputRef.current.focus()
  }

  const handleClickWidth = () => {
    inputRef.current.style.width = '150px'
  }
  return (
    <CardWrapper>
      <SmallTitle className='card-title'>
        Программируемые действия и свойства
      </SmallTitle>
      <Divider />
      <label htmlFor='email' className='form-label'>
        Email
      </label>
      <input type='email' id='email' ref={inputRef} className='form-control' />
      <button className='btn btn-primary' onClick={handleClickFocus}>
        Add focus
      </button>
      <button className='btn btn-secondary' onClick={handleClickWidth}>
        Change width
      </button>
    </CardWrapper>
  )
}

export default ProgrammableActionsExample

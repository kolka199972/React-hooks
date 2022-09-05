import React, {useCallback, useEffect, useRef, useState} from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/divider'
import SmallTitle from '../../common/typografy/smallTitle'

const UseCallBackExample = () => {
  const [data, setData] = useState({})
  const withCallback = useRef(0)
  const withoutCallback = useRef(0)

  const renderWithoutCallback = (data) => console.log(data)

  useEffect(() => {
    withoutCallback.current++
  }, [renderWithoutCallback])

  const renderWithCallback = useCallback((data) => console.log(data), [])

  useEffect(() => {
    withCallback.current++
  }, [renderWithCallback])

  const handleChange = ({target}) => {
    setData((pS) => ({
      ...pS,
      [target.name]: target.value
    }))
  }

  useEffect(() => {
    renderWithCallback(data)
    renderWithoutCallback(data)
  }, [data])
  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <Divider />
      <p>render WithCallback: {withCallback.current}</p>
      <p>render WithoutCallback: {withoutCallback.current}</p>
      <label className='form-label' htmlFor='email'>
        Email
      </label>
      <input
        type='email'
        className='form-control'
        name='email'
        id='name'
        value={data.email || ''}
        onChange={handleChange}
      />
    </CardWrapper>
  )
}

export default UseCallBackExample

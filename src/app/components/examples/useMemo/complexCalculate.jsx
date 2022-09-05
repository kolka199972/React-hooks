import React, {useEffect, useMemo, useState} from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/divider'
import SmallTitle from '../../common/typografy/smallTitle'

const factorial = (n) => {
  return n ? n * factorial(n - 1) : 1
}

const runFactorial = (n) => {
  console.log('runFactorial')
  return factorial(n)
}

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(100)
  const [otherState, setOtherState] = useState(false)

  const fact = useMemo(() => runFactorial(value), [value])
  const getBtnClasses = `btn btn-${otherState ? 'primary' : 'secondary'}`

  useEffect(() => {
    console.log('change BTN color')
  }, [getBtnClasses])

  return (
    <>
      <CardWrapper>
        <SmallTitle>Кэширование сложных вычислений</SmallTitle>
        <Divider />
        <p>Value: {value}</p>
        <p>Result fact: {fact}</p>
        <button
          className='btn btn-primary mx-2'
          onClick={() => {
            setValue((pS) => pS + 10)
          }}
        >
          Increment
        </button>
        <button
          className='btn btn-primary mx-2'
          onClick={() => {
            setValue((pS) => pS - 10)
          }}
        >
          Decrement
        </button>
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>Зависимость от сторонних setState</SmallTitle>
        <Divider />
        <button
          className={getBtnClasses}
          onClick={() => {
            setOtherState((pS) => !pS)
          }}
        >
          Change color
        </button>
      </CardWrapper>
    </>
  )
}

export default ComplexCalculateExample

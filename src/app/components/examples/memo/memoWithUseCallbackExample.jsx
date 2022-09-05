import React, {useCallback, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const LogoutButton = ({onLogout}) => {
  useEffect(() => {
    console.log('render button')
  })
  return (
    <button className='btn btn-primary' onClick={onLogout}>
      Logout
    </button>
  )
}

LogoutButton.propTypes = {
  onLogout: PropTypes.func
}

const isEqual = (prevState, nextState) => {
  if (prevState.onLogout !== nextState.onLogout) return false
  return true
}

const MemoLogoutButton = React.memo(LogoutButton, isEqual)

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false)

  const handleLogout = useCallback(() => {
    localStorage.removeItem('auth')
  }, [props])

  return (
    <>
      <button className='btn btn-primary' onClick={() => setState(!state)}>
        initiate render
      </button>
      <MemoLogoutButton onLogout={handleLogout} />
    </>
  )
}

export default MemoWithUseCallbackExample

import React from 'react'

//bootstrap import
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {Link} from 'react-router-dom'

const ButtonList = () => {
  return (
    <div>

      <ButtonGroup aria-label="Basic example">
        {/* 여기는 로그인버튼을 누르면 -> 로그인화면으로 이동함 */}
      <Button variant="dark">
        <Link to='/login'>로그인</Link> 
        </Button>
        <Button variant="dark">
        <Link to='/join'>회원가입</Link> 
        </Button>
      </ButtonGroup>

    </div>
  )
}

export default ButtonList
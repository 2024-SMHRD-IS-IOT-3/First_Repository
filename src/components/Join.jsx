import React from 'react'
//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Join = () => {
    return (
        <div className='login-container'>
            <h1>Sign Up</h1>
            <br />
            <br />
            <Form  className='login-form'>
                {/* 아이디 */}
                <Form.Group className="mb-3" controlId="formBasicId">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="Enter ID" />
                <Form.Text className="text-muted">
                    사용가능한 아이디입니다
                </Form.Text>
                </Form.Group>

                {/* 비밀번호 */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                 {/* 비밀번호 확인 */}
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password Check</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                {/* 이름 */}
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="홍우진" />
                </Form.Group>

                {/* 이메일 */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-Mail address</Form.Label>
                <Form.Control type="text" placeholder="smhrd@gmail.com" />
                </Form.Group>

                 {/* 전화번호 */}
                 <Form.Group className="mb-3" controlId="formBasicPhonenumber">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="text" placeholder="010-7777-7777" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    회원가입
                </Button>

                {/* 체크버튼 */}
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}


            </Form>
        </div>
      )
}

export default Join
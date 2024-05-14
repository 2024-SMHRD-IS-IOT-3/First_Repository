import React from 'react'
//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
    return (
        <div className='login-container'> {/* 로그인 컨테이너 */}
            <h1>LOGIN</h1>
            <br />
            <br />
            <Form className='login-form'> {/* 로그인 폼 */}
                {/* 아이디 입력란 */}
                <Form.Group className="mb-3 login-form-group" controlId="formBasicId">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter ID" />
                    <Form.Text className="text-muted">
                        사용가능한 아이디입니다
                    </Form.Text>
                </Form.Group>

                {/* 비밀번호 입력란 */}
                <Form.Group className="mb-3 login-form-group" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                {/* 로그인 버튼 */}
                <Button variant="primary" type="submit" className='login-button'>
                    로그인
                </Button>
            </Form>
        </div>
      )
}

export default Login
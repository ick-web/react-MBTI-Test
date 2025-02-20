import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div>
        <h1>로그인</h1>
        <div>
            <p>계정이 없으신가요?</p>
            <Link to="/signup">
            회원가입
            </Link>
        </div>
        </div>

    </div>
  )
}

export default Login
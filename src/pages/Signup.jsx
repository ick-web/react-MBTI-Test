import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <div>

        <h1>회원가입</h1>
        <div>
            <p>이미 계정이 있으신가요?</p>
            <Link to ='/login'>
            로그인
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Signup
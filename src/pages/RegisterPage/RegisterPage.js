import React from 'react'
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="auth-wrapper">
      <h1>회원가입</h1>
      <form>
        <input type="email" name="email" placeholder="Apple ID" value="" />
        <input type="password" name="email" placeholder="암호" value="" />
        <button type="submit">회원가입</button>
        <Link to="login" style={{ color: "gray", textDecoration: "none"}}>
          {" "}
          이미 Apple ID가 있다면? 지금 로그인
          </Link>
      </form>
    </div>
  )
}

export default RegisterPage;
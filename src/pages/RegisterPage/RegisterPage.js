import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [ email, setEmail ] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  return (
    <div className="auth-wrapper">
      <h1>회원가입</h1>
      <form>
        <input onChange={handleEmailChange} placeholder="Apple ID" type="email" name="email" value={email} />
        <input placeholder="암호" type="password" name="email" value="" />
        <button type="submit">회원가입</button>
        <Link to="login" style={{ color: "gray", textDecoration: "none" }}>
          {" "}
          이미 Apple ID가 있다면? 지금 로그인
        </Link>
      </form>
    </div>
  )
}

export default RegisterPage;
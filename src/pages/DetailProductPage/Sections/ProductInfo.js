import React, { useState, useContext } from "react";
import "./ProductInfo.css";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import clayful from "clayful/client-js";
import { Alert } from "bootstrap";

function ProductInfo({ detail }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const { isAuth } = useContext(AuthContext);
  // AuthContext.js에서 useContext를 사용해 isAuth를 가져옴
  console.log("detail", detail);

  const handleQuantityClick = (type) => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else {
      if (count === 1) return;
      setCount((prev) => prev - 1);
    }
  };

  const handleActionClick = (type) => {
    if (!isAuth) {
      //isAuth는 로그인 여부를 확인
      alert("로그인해주세요");
      navigate("/login");
      return;
    }
  };

  let Cart = clayful.Cart;

  let payload = {
    product: detail._id,
    variant: detail.variants,
    quantity: count,
    shippingMethod: detail.shipping,
  };

  let options = {
    customer: localStorage.getItem("accessToken"),
  };

  Cart.addItemForMe(payload, options, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }

    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  });

  return (
    <div>
      {show && (
        <Alert variant="info">
          <Alert.Heading>상품이 장바구니에 담겼습니다.</Alert.Heading>
          <p>장바구니에서 확인해주세요.</p>
        </Alert>
      )}
      <p style={{ color: "#bf4800", marginBottom: 0 }}>New</p>
      <h1 style={{ marginBottom: 20 }}>{detail.name} 구입하기</h1>
      <h5>
        {detail.summary} 개별 판매 가격 {detail.price?.original.formatted}
      </h5>

      <div className="quantity">
        <p style={{ fontWeight: 600, marginBottom: 5 }}>수량</p>
        <button
          onClick={() => handleQuantityClick("plus")}
          className="plus-btn"
          type="button"
          name="button"
        >
          +
        </button>
        <input type="text" readOnly name="name" value={count} />
        <button
          onClick={() => handleQuantityClick("minus")}
          className="minus-btn"
          type="button"
          name="button"
        >
          -
        </button>
      </div>
      <br />
      <h3>총 상품 금액: {detail.price?.original.raw * count}원</h3>
      <br />
      <div
        onClick={() => handleActionClick("cart")}
        className="product-info-action"
      >
        장바구니에 담기
      </div>
      <div className="product-info-action">바로 구매</div>
    </div>
  );
}

export default ProductInfo;

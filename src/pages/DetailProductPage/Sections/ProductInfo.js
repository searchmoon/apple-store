import React, { useState } from "react";
import "./ProductInfo.css";

function ProductInfo({ detail }) {
  const [count, setCount] = useState(1);
  if (!detail) return;
  const handleQuantityClick = (type) => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else {
      if (count === 1) return;
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div>
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
      <div className="product-info-action">장바구니에 담기</div>
      <div className="product-info-action">바로 구매</div>
    </div>
  );
}

export default ProductInfo;

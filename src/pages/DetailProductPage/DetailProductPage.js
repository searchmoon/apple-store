import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import clayful from "clayful/client-js";

function DetailProductPage() {
  const params = useParams();
  const productId = params.productId;

  useEffect(() => {
    let Product = clayful.Product;

    let options = {};

    Product.get(productId, options, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }
      let data = result.data;
      console.log(data);
    });
  }, []);

  return <div>DetailProductPage</div>;
}

export default DetailProductPage;

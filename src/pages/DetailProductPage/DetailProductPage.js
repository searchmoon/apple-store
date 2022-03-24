import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clayful from "clayful/client-js";

function DetailProductPage() {
  const params = useParams();
  const productId = params.productId;
  const [item, setItem] = useState({});

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
      setItem(data);
    });
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: item.description }} />
      {/* { item.description}  */}
    </div>
  );
}

export default DetailProductPage;

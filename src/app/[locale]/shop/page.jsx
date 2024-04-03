"use client";
import ListProduct from "@/components/shop/listProduct";
import NavShop from "@/components/shop/navShop";
import { useEffect, useState } from "react";
import Loading from "../loading";
import handlerGetProduct from "@/api/products";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await handlerGetProduct();
      if (res) {
        setProducts(res);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <div className="shop">
        <img src="/S3.jpg" className="banner" />
        <div className="shop_content shop_layout">
          <NavShop
            filterProducts={setProducts}
            load={setLoading}
            totalProduct={products?.data?.length}
          />
          {loading ? <Loading /> : <ListProduct data={products} />}
        </div>
      </div>
    </>
  );
};

export default ShopPage;

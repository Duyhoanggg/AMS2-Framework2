import { Button } from "antd";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { Link } from "react-router-dom";

import { useGetProductsQuery } from "../api/Product";
import { add } from "../slices/Carts";

type Props = {};

const Homee = (props: Props) => {
  const {data:products,error,isLoading} = useGetProductsQuery()
  const dispatch = useAppDispatch();
  return (
    <div className="max-w-[1200px] mx-auto mt-4">
      <div className=" py-20">
        {products?.map((product) => (
          <div key={product?.id} className="p-5 px-10 rounded-md">
            <Link to={`/products/${product?.id}`}>
            <div className="text-lg font-bold">
              <p>{product?.name}</p>
            </div>
            <div>
              <p>{product?.price}$</p>
            </div>
            </Link>
            <Button onClick={() => dispatch(add({ ...product, quantity: 1 }))}>
              Thêm giỏ hàng
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homee;

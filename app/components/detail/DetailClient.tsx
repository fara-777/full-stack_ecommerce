"use client";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import Counter from "../general/Counter";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import Button from "../general/Button";
import Heading from "../general/Heading";
import Comment from "./Comment";
import UseCart from "@/hooks/useCart";

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
};

const DetailClient = ({ product }: { product: any }) => {
  const { productCartQty, addToBasket, cartPrdcts } = UseCart();
  console.log(product);

  const [displayButton, setDisplayButton] = useState(false);

  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image,
    inStock: product.inStock,
  });

  useEffect(() => {
    setDisplayButton(false);

    let controlDisplay: any = cartPrdcts?.findIndex(
      (cart) => cart.id == product.id
    );
    if (controlDisplay > -1) {
      setDisplayButton(true);
    }
  }, [cartPrdcts]);

  const increaseFunc = () => {
    if (cardProduct.quantity === 10) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseFunc = () => {
    if (cardProduct.quantity === 1) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews?.length;

  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] mb-3 md:mb-0">
            <Image src={product?.image} fill alt="" />
          </div>
          <div className="w-full md:w-1/2 space-y-3">
            <div className="text-xl md:text-2xl">{product?.name}</div>
            <Rating name="read-only" value={productRating} readOnly />
            <div className="text-slate-600">{product?.description}</div>
            <div className="flex items-center gap-2">
              <div>STOCK STATUS:</div>
              {product.inStock ? (
                <div className="text-green-500">Product In Stock</div>
              ) : (
                <div className="text-red-500">Product Out of Stock</div>
              )}
            </div>
            <div className="text-lg md:text-2xl text-orange-600 font-bold">
              {product?.price} ₺
            </div>
            {displayButton ? (
              <>
                <Button
                  text="Product Added to Cart"
                  small
                  outline
                  onClick={() => {}}
                />
              </>
            ) : (
              <>
                <Counter
                  increaseFunc={increaseFunc}
                  decreaseFunc={decreaseFunc}
                  cardProduct={cardProduct}
                />
                <Button
                  text="Add to Cart"
                  small
                  onClick={() => addToBasket(cardProduct)}
                />
              </>
            )}
          </div>
        </div>
        <Heading text="Comments" />
        <div>
          {product?.reviews?.map((prd: any) => (
            <Comment key={prd.id} prd={prd} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;

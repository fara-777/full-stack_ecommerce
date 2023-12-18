"use client";

import UseCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { FaBasketShopping } from "react-icons/fa6";

const CardCount = () => {
  const { cartPrdcts } = UseCart();
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/cart")}
      className=" hidden md:flex relative"
    >
      <FaBasketShopping size="25" />
      <div className="absolute -top-1 -right-2 bg-orange-900 text-xs w-5 h-5 flex items-center justify-center rounded-full cursor-pointer">
        {cartPrdcts?.length}
      </div>
    </div>
  );
};

export default CardCount;

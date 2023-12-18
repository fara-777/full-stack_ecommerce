import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "../../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }
  const body = await request.json();
  const { name, description, category, brand, price, inStock, image } = body;

  const product = await prisma.product.create({
    data: {
      name,
      description,
      category,
      brand,
      price: parseFloat(price),
      inStock,
      image,
    },
  });
  return NextResponse.json(product);
}

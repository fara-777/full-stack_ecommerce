import prisma from "../../libs/prismadb";

interface IParams {
  productId?: string;
}

export default async function getProductsId({ productId }: IParams) {
  console.log(productId);
  try {
    const product = await prisma?.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        reviews: {
          include: {
            user: true,
          },
          orderBy: {
            createdDate: "desc",
          },
        },
      },
    });

    if (!product) return null;
    return product;
  } catch (error: any) {
    console.log("error:", error);
    throw new Error(error.message);
  }
}

import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getProducts from "@/app/actions/getProduct";
import ManageClient from "@/app/components/admin/ManageClient";
import WarningText from "@/app/components/general/WarningText";

const Manage = async () => {
  const products = await getProducts({ category: null });
  console.log(products, "Product");

  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="Access Forbidden !!!" />;
  }

  return (
    <div className="w-1000 m-4">
      <ManageClient products={products} />
    </div>
  );
};

export default Manage;

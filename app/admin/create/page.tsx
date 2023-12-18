import { getCurrentUser } from "@/app/actions/getCurrentUser";
import WarningText from "@/app/components/general/WarningText";
import CreateForm from "@/app/components/admin/CreateForm";
import AuthContainer from "@/app/components/containers/AuthContainer";

const CreateProduct = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="Access Forbidden !!!" />;
  }

  return (
    <AuthContainer>
      <CreateForm />
    </AuthContainer>
  );
};

export default CreateProduct;

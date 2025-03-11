import BackGroundPage from "../../ui/pages/cartReq/BackGroundPage";
import Form from "./Form";

export default function page() {
  return (
    <div className="min-h-screen w-screen relative flex justify-center items-center py-4">
      <BackGroundPage />
      <Form />
    </div>
  );
}

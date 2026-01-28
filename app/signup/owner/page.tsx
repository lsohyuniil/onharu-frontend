import SignupLayout from "../components/SignupLayout";
import OwnerSignupForm from "./OwnerSignupForm";

export default function OwnerSignupPage() {
  return (
    <SignupLayout title="매장 회원가입">
      <OwnerSignupForm />
    </SignupLayout>
  );
}

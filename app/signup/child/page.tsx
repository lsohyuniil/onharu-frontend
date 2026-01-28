import SignupLayout from "../components/SignupLayout";
import ChildSignupForm from "./ChildSignupForm";

export default function ChildSignupPage() {
  return (
    <SignupLayout title="아동 회원가입">
      <ChildSignupForm />
    </SignupLayout>
  );
}

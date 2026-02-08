import { PageSection } from "../../components/PageSection";
import PasswordConfirmPage from "./components/PasswordConfirm";

export default function EditAccountPage() {
  return (
    <PageSection title="회원정보 수정" className="px-4 pt-4 pb-7.5 sm:pt-9 sm:pb-15">
      <PasswordConfirmPage />
    </PageSection>
  );
}

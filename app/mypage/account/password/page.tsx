import { PageSection } from "../../components/PageSection";
import PasswordFormPage from "./PasswordForm";

export default function PasswordChangePage() {
  return (
    <PageSection title="비밀번호 변경" className="px-4 pt-4 pb-7.5 sm:pt-9 sm:pb-15">
      <PasswordFormPage />
    </PageSection>
  );
}

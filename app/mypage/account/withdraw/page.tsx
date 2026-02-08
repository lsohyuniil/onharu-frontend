import { PageSection } from "../../components/PageSection";
import WithdrawFormPage from "./WithdrawForm";

export default function WithdrawPage() {
  return (
    <PageSection title="비밀번호 변경" className="px-4 pt-4 pb-7.5 sm:pt-9 sm:pb-15">
      <WithdrawFormPage />
    </PageSection>
  );
}

import { PageSection } from "../../components/PageSection";
import ReviewWriteForm from "./components/ReviewWriteForm";
import { storeList } from "./data/mockData";

export default function ReviewsWritePage() {
  return (
    <PageSection title="감사 리뷰 작성" className="px-4 pt-4 pb-7.5 sm:pt-9 sm:pb-15">
      <ReviewWriteForm stores={storeList} />
    </PageSection>
  );
}

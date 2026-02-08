import Image from "next/image";
import { PageSection } from "../../components/PageSection";

export default function ProofDocumentsPage() {
  return (
    <PageSection title="증명서류 보기" className="px-4 pt-4 pb-7.5 sm:pt-9 sm:pb-15">
      <div className="flex items-center justify-center">
        <Image
          src="/image/page/proof-test-image.png"
          alt="증명 서류"
          width={600}
          height={800}
          priority
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </PageSection>
  );
}

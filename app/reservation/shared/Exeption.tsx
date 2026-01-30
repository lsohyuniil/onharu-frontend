import Image from "next/image";

interface ExeptionProps {
  imageSrc: string;
  contents: React.ReactNode;
  button: React.ReactNode;
  button2?: React.ReactNode;
}
export const Exeption = ({ imageSrc, contents, button, button2 }: ExeptionProps) => {
  return (
    <section className="mt-section-sm-top md:mt-section-lg-top mb-section-sm-bottom md:mb-section-lg-bottom">
      <div className="flex flex-col items-center justify-center pt-11">
        <div className="b-4 relative h-25 w-25 md:h-45 md:w-45">
          <Image src={imageSrc} fill style={{ objectFit: "cover" }} alt="" />
        </div>
        <p className="md:text-md mb-7 text-center text-base font-semibold md:mb-12.5 md:text-xl">
          {contents}
        </p>
        <div className="flex items-center gap-4.5">
          {button} {button2}
        </div>
      </div>
    </section>
  );
};

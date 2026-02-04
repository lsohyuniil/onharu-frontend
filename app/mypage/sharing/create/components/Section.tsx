export function Section({
  title,
  children,
  isRequired,
  className,
}: {
  title: string;
  children: React.ReactNode;
  isRequired?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="sm:text-md mb-1.75 text-base font-medium sm:mb-3.75">
        {title} {isRequired && <span className="text-danger">*</span>}
      </div>
      <div className="flex flex-wrap gap-1.25 sm:gap-2.5">{children}</div>
    </div>
  );
}

interface HeadingProps {
  title: string;
  children?: React.ReactNode;
}

export const Heading = ({ title, children }: HeadingProps) => {
  return (
    <div className="flex gap-2 border-b border-gray-300 pb-2 md:pb-4">
      <p className="text-md font-bold md:text-xl lg:text-2xl">{title}</p>
      {children}
    </div>
  );
};

import Link from "next/link";
import clsx from "clsx";

const baseCardStyle =
  "flex h-32 w-70 sm:h-46.25 sm:w-112.5 flex-col justify-center gap-2.5 rounded-[10px] pl-8.75 shadow-md transition hover:scale-[1.02] hover:shadow-lg";

const signupTypes = [
  {
    href: "/signup/child",
    title: "아동 회원가입",
    desc: "따뜻한 나눔으로 성장할 아이들",
    bg: "bg-sub-sub-100",
  },
  {
    href: "/signup/owner",
    title: "매장 회원가입",
    desc: "나눔을 제공 할 우리동네 사장님들",
    bg: "bg-main-100",
  },
];

export default function SignupTypePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4">
      {signupTypes.map(type => (
        <Link key={type.href} href={type.href} className={clsx(baseCardStyle, type.bg)}>
          <div className="text-base font-bold sm:text-xl">{type.title}</div>
          <p className="text-sm sm:text-lg">{type.desc}</p>
        </Link>
      ))}
    </div>
  );
}

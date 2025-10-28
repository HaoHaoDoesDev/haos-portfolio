import LogoLoop from "@/components/ui/logo-loop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiZod,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiAdobephotoshop,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiGo,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiZod />, title: "Zod", href: "https://zod.dev" },
  { node: <SiJavascript />, title: "Zod", href: "https://www.javascript.com" },
  { node: <SiHtml5 />, title: "Zod", href: "https://html.com" },
  { node: <SiCss3 />, title: "Zod", href: "https://web.dev/css" },
  { node: <SiFigma />, title: "Zod", href: "https://www.figma.com/" },
  {
    node: <SiAdobephotoshop />,
    title: "Zod",
    href: "https://www.google.com/aclk?sa=L&ai=DChsSEwjXoey4icGPAxUbyTwCHcL4FXkYACICCAEQABoCc2Y&ae=2&aspm=1&co=1&ase=2&gclid=CjwKCAjwlOrFBhBaEiwAw4bYDa5AnaSYqiYB80U-n7iB5TDJmO47JVOjYbTjym9ELLFsRpefeHiu5xoCHzgQAvD_BwE&ei=2426aM_qN7ONseMPr6ee-As&cid=CAASJeRoQH1ot_wMJLLOuzT1gBpKpSwXPVwhvcehA118kBauSItAAWk&cce=2&category=acrcp_v1_35&sig=AOD64_1kSgEbtyMR-lOWXi7k0aTwRv0WOg&q&sqi=2&nis=4&adurl&ved=2ahUKEwiPxOO4icGPAxWzRmwGHa-TB78Q0Qx6BAgVEAE",
  },
  { node: <SiMongodb />, title: "Zod", href: "https://www.mongodb.com" },
  {
    node: <SiFirebase />,
    title: "Zod",
    href: "https://www.google.com/aclk?sa=L&ai=DChsSEwjXl7LTicGPAxX_pWYCHaISBtoYACICCAEQABoCc20&ae=2&co=1&ase=2&gclid=CjwKCAjwlOrFBhBaEiwAw4bYDdtOztcsqZ4RHDCOIsBd5BQnOr3sYqMKByC_s5ZiwhOBeA2GMOnBNRoCziEQAvD_BwE&cce=2&category=acrcp_v1_71&sig=AOD64_0K_hX1p-GhLBwyD61YMX3_hyw_og&q&nis=4&adurl&ved=2ahUKEwiHvazTicGPAxUATWwGHbkRLu0Q0Qx6BAgKEAE",
  },
  { node: <SiDocker />, title: "Zod", href: "https://www.docker.com" },
  { node: <SiMysql />, title: "Zod", href: "https://www.mysql.com/" },
  { node: <SiGo />, title: "Go", href: "https://go.dev/" },
  { node: <SiPostgresql />, title: "Zod", href: "https://www.postgresql.org" },
];

export default function SkillBanner() {
  return (
    <div className="w-full mx-auto">
      <div className="h-[200px] flex items-center justify-center">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          width="100%"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          whiteLogos={true}
          className="w-full"
        />
      </div>
    </div>
  );
}

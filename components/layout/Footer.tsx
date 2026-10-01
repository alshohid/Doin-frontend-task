import Link from "next/link";
import { Logo } from "@/components/reusable/logo";
import { SearchBar } from "@/components/reusable/search-bar";

const groups = [
  { title: "Featured Courses", links: ["Featured Categories", "Business", "IT", "Design"] },
  { title: "", links: ["Development", "Marketing", "Photography", "Finance", "Sport"] },
  { title: "", links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border-light bg-white text-text-heading">
      <div className="mx-auto grid max-w-300 grid-cols-[minmax(0,2.5fr)_repeat(3,minmax(110px,1fr))] gap-x-10 pt-17.5 pb-19.5 max-[1250px]:mx-[5%] max-lg:grid-cols-[minmax(0,2fr)_repeat(3,minmax(90px,1fr))] max-lg:gap-x-6 max-md:mx-5 max-md:grid-cols-1 max-md:gap-y-8 max-md:py-9">
        <div>
          <Logo className="text-[23px] font-bold text-text-heading" />
          <p className="my-4.5 max-w-125 text-sm leading-5 text-text-body">Stay Up to date with our latest features and releases by joining our newsletter.</p>
          <div className="max-w-117.5"><SearchBar placeholder="Enter your email" button="Search" /></div>
          <small className="mt-6 block max-w-117.5 text-xs leading-[1.7] text-text-subtle">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small>
        </div>
        {groups.map((group, index) => (
          <nav className="flex flex-col gap-4.25 pt-12.5 text-sm text-text-heading max-md:gap-3 max-md:pt-0" key={index} aria-label={group.title || `Footer links ${index + 1}`}>
            {group.title && <b className="mb-1 font-normal">{group.title}</b>}
            {group.links.map((link) => <Link className="transition-colors hover:text-blue-700" href={link.includes("Creator") ? "/creators" : "/courses"} key={link}>{link}</Link>)}
          </nav>
        ))}
      </div>
      <div className="mx-auto flex max-w-300 justify-between border-t border-border-divider py-6 text-xs text-text-subtle max-[1250px]:mx-[5%] max-md:mx-5 max-md:flex-col max-md:gap-4 max-md:py-[18px]">
        <span>© 2023 ByteSpace. All rights reserved.</span>
        <nav className="flex gap-6.25 max-md:flex-wrap max-md:gap-3.75"><Link href="/">Privacy Policy</Link><Link href="/">Terms of Service</Link><Link href="/">Cookies Settings</Link></nav>
      </div>
    </footer>
  );
}

import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="w-full mt-20 text-muted-foreground ">
      <div className="w-full border border-muted-foreground opacity-10 "></div>
      <div className="flex flex-col items-center justify-center h-32 gap-1 font-mono opacity-70">
        <p>
          &copy; {new Date().getFullYear()} Zephyr Lin. All rights reserved.
        </p>
        <p className="opacity-90">Made with Love and Cheesecake.</p>
      </div>
    </div>
  );
}

"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return ( 
    <Link href={href} className={cn("text-gray-600 text-sm lg:text-lg transition-colors duration-200 hover:text-rose-500 ",
     className,
    isActive && "font-semibold text-rose-500"
     )}>
      {children}
    </Link>
  );
}

export default NavLink;

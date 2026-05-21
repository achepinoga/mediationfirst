import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="focus-ring rounded-md" aria-label="Mediationfirst domov">
      <Image
        src="/images/logo-green.png"
        alt="Mediationfirst"
        width={180}
        height={48}
        className="h-12 w-auto object-contain"
        priority
      />
    </Link>
  );
}

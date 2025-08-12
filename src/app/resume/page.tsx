import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="container flex flex-col items-center mx-auto mt-[50px] px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8">Resume</h1>
      <Image
        src="/resume.svg"
        width={720}
        height={500}
        alt="Picture of the author"
        className="mx-auto bg-white mb-8"
      />
      <Link href="/resume.pdf" download className="mx-auto" >
        <Button variant="outline">Download PDF</Button>
      </Link>
    </div>
  );
}
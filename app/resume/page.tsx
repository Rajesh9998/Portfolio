import Image from "next/image";
import { Description, Header1 } from "@/components/ui/Headers";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Link from "@/components/ui/Link";

export const metadata = {
  title: "Resume",
  description: "View and download my professional resume.",
};

export default function ResumePage() {
  return (
    <section className="mt-6 mb-16 overflow-hidden md:mt-12 lg:mt-20">
      <Header1>Resume</Header1>
      <Description className="mb-8">
        View my  Resume below or download it as a PDF.
      </Description>

      <div className="mb-8">
        <Button variant="primary" asChild>
          <Link 
            href="/assets/Rajesh Yarra 4.pdf" 
            download="Rajesh_Yarra_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.Download className="mr-2 size-4" />
            Download CV
          </Link>
        </Button>
      </div>

      <div className="space-y-4">
        <div className="relative w-full">
          <Image
            src="/assets/Rajesh_Yarra_Resume-1.png"
            alt="Resume page 1"
            width={800}
            height={1132}
            className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
            priority
            loading="eager"
            unoptimized
          />
        </div>
        <Image
          src="/assets/Rajesh_Yarra_Resume-2.png"
          alt="Resume page 2"
          width={800}
          height={1132}
          className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
        />
      </div>
    </section>
  );
} 
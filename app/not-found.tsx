import { Button } from "@/components/ui/Button";
import Link from "@/components/ui/Link";

export default function NotFound() {
 return (
  <section className="mt-6 mb-16 md:mt-12 lg:mt-20">
   <h1 className="text-fill-transparent mx-0 mt-0 bg-linear-to-r from-[#ff7170] to-[#ffe57f] box-decoration-clone bg-clip-text text-4xl font-black tracking-[-0.03em]">404 - Page not found</h1>
   <p className="mt-2 mb-4 text-lg text-neutral-700 dark:text-neutral-400">We're sorry — we can't find the page you're looking for.</p>
   <Button variant="secondary" asChild>
    <Link href="/">Go home</Link>
   </Button>
  </section>
 );
}

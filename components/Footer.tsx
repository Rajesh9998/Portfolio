import Link from "@/components/ui/Link";
import { footer } from "@/config/footer";

export function Footer() {
 return (
  <footer className="max-w-body mx-auto w-full pb-12">
   <hr className="mx-auto mb-5 w-full border border-neutral-200 dark:border-neutral-800" />
   <p className="mb-4 text-sm text-neutral-700 opacity-50 dark:text-neutral-300">Copyright &copy; 2025 Rajesh Yarra</p>

   <div className="flex justify-between gap-4">
    {footer.categories.map((category) => (
     <div key={`footer-category-${category.title}`} className="text-neutral-700 dark:text-neutral-400">
      <p className="mt-1 mb-2 font-bold text-neutral-800 dark:text-white">{category.title}</p>
      {category.links.map((link) => (
       <Link key={`footer-link-${link.href}`} href={link.href} target={"target" in link ? link.target : "_self"} className="mt-1 block duration-100 hover:text-neutral-700 hover:underline hover:decoration-wavy motion-reduce:transition-none dark:hover:text-white">
        {link.title}
       </Link>
      ))}
     </div>
    ))}
   </div>
  </footer>
 );
}

import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Link from "@/components/ui/Link";
import type { Project } from "@/lib/types";
import { parseISO } from "@/lib/utils";
import { cn } from "@/lib/utils";

export interface ProjectCardProps extends React.ComponentPropsWithRef<"div"> {
 project: Project;
}

export function ProjectCard({ project, className, ...props }: ProjectCardProps) {
 const isExternalImage = (src: string) => src.startsWith('http');

 return (
  <div key={project.name} {...props} className={cn("mb-16 w-full overflow-hidden duration-200 motion-reduce:transition-none", className)}>
   <h3 className="mb-2 text-2xl font-bold tracking-[-0.03em]">{project.name}</h3>
   {project.started && (
    <time className="my-2 block text-sm leading-none font-normal text-neutral-500 dark:text-neutral-500" dateTime={new Date(project.started).toUTCString()}>
     {parseISO(project.started)}
    </time>
   )}
   <p className="mt-2 mb-6 text-neutral-700 text-base leading-relaxed dark:text-neutral-400">{project.description}</p>
   {project.images &&
    project.images.length > 0 &&
    project.images.map((image) => (
     <Link key={`project-image-${image.alt}-${image.height}`} href={project.website || project.github || image.src} target="_blank" rel="noopener noreferrer" className="relative block w-full mb-6">
      {isExternalImage(image.src) ? (
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-full h-auto cursor-zoom-in rounded-xl border border-black/10 object-contain duration-200 hover:opacity-70 dark:border-neutral-800" 
          style={{ maxHeight: '650px', width: '100%' }}
        />
      ) : (
        <Image 
          src={image.src} 
          alt={image.alt} 
          width={1920}
          height={1080}
          className="w-full h-auto cursor-zoom-in rounded-xl border border-black/10 object-contain duration-200 hover:opacity-70 dark:border-neutral-800"
          style={{ maxHeight: '650px', width: '100%' }}
        />
      )}
     </Link>
    ))}
   <div className="mt-4 flex flex-wrap gap-2">
    {project.technologies.map((tech) => (
     <Badge key={`project-tech-${tech.name}`} size="small">
      <Image src={tech.icon} alt={tech.name} width={20} height={20} className="size-5" /> {tech.name}
     </Badge>
    ))}
   </div>
   {project.website || project.github ? (
    <div className="mt-6 flex flex-wrap gap-4">
     {project.website && (
      <Button variant="primary" asChild>
       <Link href={project.website} rel="noopener noreferrer">
        <Icons.Link className="size-5 stroke-2" />
        Visit website
       </Link>
      </Button>
     )}
     {project.github && (
      <Button variant="secondary" asChild>
       <Link href={project.github} rel="noopener noreferrer">
        <Icons.Github className="size-5 fill-neutral-700 dark:fill-white" />
        View on Github
       </Link>
      </Button>
     )}
    </div>
   ) : null}
  </div>
 );
}

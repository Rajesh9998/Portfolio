import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonArrow } from "@/components/ui/Button";
import { Description, Header2 } from "@/components/ui/Headers";
import { Icons } from "@/components/ui/Icons";
import Link from "@/components/ui/Link";
import { header, meta, technologies, contact, projects } from "@/config";
import { GetUserData, getTotalContributionsForYears } from "@/lib/graphql";
import { ConvertNumber } from "@/lib/utils";

export default async function HomePage() {
 const userData = await GetUserData();
 const contributions = await getTotalContributionsForYears();
 
 // Filter to show only Pentester's Copilot and LLMPatronus
 const displayProjects = projects.filter(project => 
   project.name === "Pentester's Copilot" || 
   project.name === "LLMPatronus"
 );

 return (
  <>
   <section className="mt-6 mb-16 md:mt-12 lg:mt-20">
    <h1 className="dark:color-black relative m-0 text-4xl font-black tracking-[-0.03em] text-neutral-800 duration-300 md:text-left dark:text-white">Hey, I'm {header.title}</h1>
    <p className="mt-2 text-lg text-neutral-700 dark:text-neutral-400">{header.description}</p>
    <div className="mt-9 flex flex-row flex-wrap gap-4">
     <Button variant="primary" asChild>
      <Link href="/#contact">
       Contact me
       <ButtonArrow />
      </Link>
     </Button>
     <Button variant="secondary" asChild>
      <Link href="/#about">
       More about me
       <ButtonArrow />
      </Link>
     </Button>
    </div>
   </section>

   <section className="mb-16 flex flex-wrap justify-between gap-4 text-center text-xs font-bold text-neutral-800/70 dark:text-white/70">
    <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}`} className="flex items-center gap-2 text-center duration-200 hover:text-neutral-800 motion-reduce:transition-none dark:hover:text-white">
     <Icons.Star className="size-4 stroke-2" /> <span>{userData && ConvertNumber(userData.userStars)} stars</span>
    </Link>

    <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}`} className="flex items-center gap-2 duration-200 hover:text-neutral-800 motion-reduce:transition-none dark:hover:text-white">
     <Icons.GitGraph className="size-4 stroke-2" /> <span>{userData && ConvertNumber(contributions.total)} commits</span>
    </Link>

    <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}`} className="flex items-center gap-2 duration-200 hover:text-neutral-800 motion-reduce:transition-none dark:hover:text-white">
     <Icons.GitFork className="size-4 stroke-2" /> <span>{userData && ConvertNumber(userData.userForks)} repositories forks</span>
    </Link>

    <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}?tab=followers`} className="flex items-center gap-2 duration-200 hover:text-neutral-800 motion-reduce:transition-none dark:hover:text-white">
     <Icons.Users className="size-4 stroke-2" /> <span>{userData && ConvertNumber(userData.userFollowers)} Github followers</span>
    </Link>
   </section>

   <section className="mt-6 mb-16 relative">
    <div className="rounded-xl overflow-hidden mb-8 md:float-right md:ml-8 md:w-1/3">
      <img 
        src="https://sw01sn3hkeo9brjb.public.blob.vercel-storage.com/profile-IkRLCBzr8kQO6SU7yKBzUCYX9LrpTM.jpeg" 
        alt="Rajesh Yarra" 
        width={400}
        height={400}
        className="object-cover w-full h-auto"
        style={{maxWidth: '100%'}}
      />
    </div>
    
    <Header2 id="about">ABOUT ME</Header2>

    <div className="prose-quoteless prose prose-neutral dark:prose-invert">
     <span>I'm passionate about Generative AI and developing intelligent systems. Currently, I'm pursuing my B.Tech in Information Technology at Andhra Loyola Institute of Engineering and Technology with a CGPA of 8.44.</span>
     <p>My technical journey focuses on building AI-powered applications using Large Language Models (LLMs), Retrieval Augmented Generation (RAG), and creating multi-agent systems. I have experience working with various AI models like GPT, Gemini, Claude, and Llama to create intelligent applications.</p>
     <span>I've developed several projects including Pentester's Copilot, an AI assistant for cybersecurity professionals, and EduLlama, an AI math tutor that provides step-by-step solutions to complex math problems. I'm currently working on advancing my expertise in developing AI agents and automated systems.</span>
    </div>

    <div className="mt-6 flex flex-row flex-wrap gap-4">
     <Button variant="primary" asChild>
      <Link href={`https://github.com/${meta.accounts.github.username}`} rel="noopener noreferrer">
       <Icons.Github className="size-5 fill-white stroke-2" />
       View my Github
      </Link>
     </Button>
     <Button variant="secondary" asChild>
      <Link href="/#contact">
       Contact me <ButtonArrow />
      </Link>
     </Button>
    </div>
   </section>

   <section className="mb-6">
    <Header2 id="projects">Recent Projects</Header2>
    <Description>Explore some of my recent projects below. For more, visit my GitHub profile.</Description>

    <div className="mt-6">
     {displayProjects.map((project) => (
      <ProjectCard key={`project-${project.name}`} project={project} />
     ))}
    </div>

    <div className="-mt-10 mb-10 flex flex-col items-center">
     <p className="mb-2 text-neutral-700 dark:text-neutral-400">Want to see more?</p>
     <Button variant="secondary" asChild>
      <Link href="/work">
       View all projects
       <ButtonArrow />
      </Link>
     </Button>
    </div>
   </section>

   <section className="my-6 mb-16">
    <Header2 id="tech">Technologies I use</Header2>
    <Description>Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:</Description>
    <div className="mt-4 flex flex-wrap gap-4">
     {technologies.map((tech) => {
      return (
       <Badge key={`tech-link-${tech.name}`}>
        <Image src={tech.icon} alt={`${tech.name} logo`} width={20} height={20} className="size-5 rounded-sm" /> {tech.name}
       </Badge>
      );
     })}
    </div>
    <p className="mt-4 text-center text-neutral-700 dark:text-neutral-400">...and many more!</p>
   </section>

   <section className="mb-12">
    <Header2 id="contact">Contact me</Header2>
    <Description>I'm always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.</Description>

    <div className="my-6 flex w-full rounded-md border border-black/15 bg-white p-5 dark:border-neutral-800 dark:bg-[#161617]">
     <ContactForm />
    </div>
    <Description>Or contact me with...</Description>
    <div className="mt-4 flex flex-wrap gap-4">
     {contact.links.map((element) => {
      const Icon = Icons[element.icon];

      return (
       <Button variant="tertiary" key={`contact-link-${element.href}`} className="gap-2" asChild>
        <Link href={element.href} target="_blank" rel="noopener noreferrer">
         <Icon className="size-5" />
         {element.title}
        </Link>
       </Button>
      );
     })}
    </div>
   </section>
  </>
 );
}

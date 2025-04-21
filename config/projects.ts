import type { Project } from "@/lib/types";

export const projects = [
 {
  name: "Pentester's Copilot",
  started: "2025-04-01T00:00:00Z",
  description: "An AI-powered assistant for cybersecurity professionals featuring multi-modal capabilities with three AI personalities, memory layers, real-time hacking assistance, and autonomous agent mode for automated security tasks. The system integrates advanced natural language processing with specialized security tools to provide comprehensive penetration testing support.",
  images: [
   {
    src: "https://sw01sn3hkeo9brjb.public.blob.vercel-storage.com/Pentesters%20copilot-F99FlsUmqma9COZuViK2DtwgeRsneW.png",
    alt: "Pentester's Copilot screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  technologies: [
    {
        name: "FastAPI",
        icon: "/assets/tech/FastAPI python.png",
    },
   {
    name: "LangChain",
    icon: "/assets/tech/langchain.jpg",
   },
   {
    name: "Mem0",
    icon: "/assets/tech/mem0.png",
   },
   {
    name: "Supabase",
    icon: "/assets/tech/supabase-logo.svg",
   },
   {
    name: "TailwindCSS",
    icon: "/assets/tech/tailwindcss.svg",
   },
   {
    name: "React",
    icon: "/assets/tech/react.svg",
   },
   {
    name: "Next.jS",
    icon: "/assets/tech/next.svg",
   },
  ],
  website: null,
  github: "https://github.com/Rajesh9998/pentesters-copilot",
 },
 {
  name: "LLMPatronus",
  started: "2024-09-01T00:00:00Z",
  description: "Python-based application that uses a multi-agent LLM system to identify vulnerabilities in Android apps. It combines models like GPT-4-mini, Claude-3-haiku, Qwen-2-75B, and Gemini-1.5 pro to create a Mixture of Agents (MoA) for comprehensive security analysis and automated vulnerability detection.",
  images: [
   {
    src: "https://sw01sn3hkeo9brjb.public.blob.vercel-storage.com/LLMPatronous-v8A9qRv0bHJSmv6aH8IywbJDLnSoPG.png",
    alt: "LLMPatronus main page screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  technologies: [
   {
    name: "Python",
    icon: "/assets/tech/python.png",
   },
   {
    name: "LLMs",
    icon: "/assets/tech/vercel.svg",
   },
   {
    name: "Pinecone RAG",
    icon: "/assets/tech/pinecone.png",
   },
   {
    name: "MixTure of Agents (MoA)",
    icon: "/assets/tech/togetherai.jpg",
   },
  ],
  website: null,
  github: "https://github.com/Rajesh9998/LLMPatronus",
 },
 {
  name: "EduLlama",
  started: "2024-08-15T00:00:00Z",
  description: "Your AI-Powered Math Companion that helps with JEE Math Problems. Features multiple LLM integration, image problem input, precise calculations, interactive voice assistant, and step-by-step solutions.",
  images: [
   {
    src: "https://raw.githubusercontent.com/Rajesh9998/EduLlama/main/Examples/Screenshot%202024-11-11%20024742.png",
    alt: "EduLlama screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  technologies: [
   {
    name: "Python",
    icon: "/assets/tech/python.png",
   },
   {
    name: "Llama AI",
    icon: "/assets/tech/react.svg",
   },
   {
    name: "Groq's Whispher",
    icon: "/assets/tech/groq.png",
   },
   {
    name: "ElevenLabs",
    icon: "/assets/tech/11labs.png",
   },
   {
    name: "Streamlit",
    icon: "/assets/tech/streamlit.svg",
   },
  ],
  website: null,
  github: "https://github.com/Rajesh9998/EduLlama",
 },
 {
  name: "Business QA Bot",
  started: "2024-08-01T00:00:00Z",
  description: "An advanced Retrieval Augmented Generation (RAG) based Question-Answering bot designed specifically for business applications. Features efficient data collection with Firecrawl API, optimized chunk size, advanced LLM integration with Gemini-1.5-Flash, and high-speed inference.",
  images: [
   {
    src: "https://raw.githubusercontent.com/Rajesh9998/Business-QA-Bot/main/Examples/image1.png",
    alt: "Business QA Bot main page screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  technologies: [
   {
    name: "Python",
    icon: "/assets/tech/python.png",
   },
   {
    name: "Pinecone RAG",
    icon: "/assets/tech/pinecone.png",
   },
   {
    name: "FireCrawl",
    icon: "/assets/tech/firecrawl.jpg",
   },
   {
    name: "Groq",
    icon: "/assets/tech/groq.png",
   },
  ],
  website: null,
  github: "https://github.com/Rajesh9998/business-qa-bot",
 },
 {
  name: "AI Compiler",
  started: "2024-06-01T00:00:00Z",
  description: "A powerful tool that leverages multiple AI models to assist with various coding tasks, including code debugging, documentation generation, and language translation. Features Compiler AI for debugging, Coding Guru for complex code generation, and a Mixture of Agents architecture.",
  images: [
   {
    src: "https://raw.githubusercontent.com/Rajesh9998/AI-Compiler/main/Examples/p1.png",
    alt: "AI Compiler main page screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  technologies: [
   {
    name: "Python",
    icon: "/assets/tech/python.png",
   },
   {
    name: "Streamlit",
    icon: "/assets/tech/streamlit.svg",
   },
   {
    name: "MixTure of Agents (MoA)",
    icon: "/assets/tech/togetherai.jpg",
   },
   
  ],
  website: null,
  github: "https://github.com/Rajesh9998/ai-compiler",
 },
 {
  name: "Autopilot for Your Desktop",
  started: "2024-05-01T00:00:00Z",
  description: "An Intelligent Virtual Assistant Framework for Automating Your Mundane System Tasks and Web Task Automations. Features Open Interpreter Integration, Web Task Automation with MultiOn, Speech-to-Text with OpenAI Whisper, and a Streamlit-Powered User Interface.",
  images: [
   {
    src: "https://raw.githubusercontent.com/Rajesh9998/AutoPilot_For_Your_Desktop/main/Examples/Screenshot%202024-03-29%20205433.png",
    alt: "Autopilot for Your Desktop main page screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  technologies: [
   {
    name: "Python",
    icon: "/assets/tech/python.png",
   },
   {
    name: "Streamlit",
    icon: "/assets/tech/streamlit.svg",
   },
   {
    name: "OpenAI API",
    icon: "/assets/tech/openai.png",
   },
   {
    name: "MultiOn API",
    icon: "/assets/tech/multion.png",
   },
  ],
  website: null,
  github: "https://github.com/Rajesh9998/autopilot-desktop",
 },
] satisfies Project[];

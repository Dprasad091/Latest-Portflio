// dialog.tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/core/dialog";
import { PlusIcon, Github, ExternalLink } from "lucide-react";

// Import your images here
import IMG0 from "../assets/NxtWatch.png";
import IMG1 from "../assets/Jobbyapp.png";
import IMG2 from "../assets/VPS.png";
import IMG3 from "../assets/ALP.png";
import IMG4 from "../assets/Nxt_trendz.png";
import IMG5 from "../assets/BA.png";
import IMG6 from "../assets/DNE.png";

interface ProjectData {
  id: number;
  image: string;
  title: string;
  github?: string;
  demo?: string;
  description: string;
}

const data: ProjectData[] = [
  {
    id: 0,
    image: IMG0,
    title: "Nxt-Watch",
    github: "https://github.com/Dprasad091/Nxt-Watch",
    demo:
      "https://drive.google.com/file/d/1ZSf04XUD3vYKV-LQFUhNm8eXDQ1Yn18b/view?usp=drive_link",
    description:
      "Nxt Watch is a responsive YouTube-style video streaming web app where users can sign in to explore, search, watch, and save videos across categories like Trending and Gaming. It features secure authentication, protected routes, theme toggling, and dynamic API-driven content for a smooth viewing experience.",
  },
  {
    id: 1,
    image: IMG1,
    title: "Jobby App - Where Ambition Meets Opportunity",
    github: "https://github.com/Dprasad091/JobbyApp",
    demo: "https://nxtjobsporta115.ccbp.tech/login",
    description:
      "Jobby App is a responsive job-search web app where users can securely log in, explore and filter jobs, view detailed role descriptions, and navigate to apply seamlessly.",
  },
  {
    id: 2,
    image: IMG3,
    title: "Video Streaming and Processing",
    github: "https://github.com/Dprasad091/Pulse-Assignment",
    demo:
      "https://drive.google.com/file/d/14_2zQJ7l9snERv65t1AQyxS0fGUOXSFU/view?usp=sharing",
    description:
      "A project for streaming and processing video content utilizing WebSockets.",
  },
  {
    id: 3,
    image: IMG2,
    title: "AI Learning Path Generator",
    github: "https://github.com/Dprasad091/Learning-Path-Generator",
    demo: "",
    description:
      "AI Learning Path Generator is a smart platform that analyzes a learner’s goals and automatically builds a personalized step-by-step roadmap with curated resources for faster skill mastery.",
  },
  {
    id: 4,
    image: IMG4,
    title: "Nxt Trendz - Where Fashion Meets Innovation",
    github: "",
    demo: "https://ecomtrendz21.ccbp.tech/login",
    description:
      "A modern fashion e-commerce website offering a seamless shopping experience with curated collections, smart filters, secure checkout, and responsive design for effortless style discovery.",
  },
  {
    id: 5,
    image: IMG6,
    title: "Bill Analyser - Smart Expense Tracker",
    github: "https://github.com/Dprasad091/Bill-Analyzer",
    demo: "",
    description:
      "A bill analyser that reads and breaks down expenses automatically, helping users understand spending patterns and track costs with clear, organized insights.",
  },
  {
    id: 6,
    image: IMG5,
    title: "Dine and Eat - Your Culinary Companion",
    github: "https://github.com/Dprasad091/Dine-and-eat",
    demo: "",
    description:
      "A MERN-based food ordering app that lets users browse menus, customize dishes, and place orders seamlessly with real-time updates and a smooth dining experience.",
  },
];

export function ProjectGallery() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data.map((project) => (
        <ProjectDialog key={project.id} project={project} />
      ))}
    </div>
  );
}

interface ProjectDialogProps {
  project: ProjectData;
}

function ProjectDialog({ project }: ProjectDialogProps) {
  return (
    <Dialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex max-w-[270px] flex-col overflow-hidden border-2 border-zinc-950/10 border-gray-800 bg-black text-white shadow-lg shadow-gray-900 dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <DialogImage
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover"
        />
        <div className="flex flex-grow flex-row items-end justify-between p-2">
          <div>
            <DialogTitle className="dark:text-zinc-50">
              {project.title}
            </DialogTitle>
          </div>
          <button
            type="button"
            className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
            aria-label="Open dialog"
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </DialogTrigger>

      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-black dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
        >
          <DialogImage
            src={project.image}
            alt={project.title}
            className="h-64 w-full object-cover"
          />
          <div className="p-6">
            <DialogTitle className="text-2xl text-white dark:text-zinc-50">
              {project.title}
            </DialogTitle>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {project.github && (
                  <a
                    className="inline-flex items-center text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    className="inline-flex items-center text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </DialogDescription>
          </div>
          <DialogClose className="text-zinc-50" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}

import React from 'react';
import AnimatedBackground from '@/components/core/animated-background';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiSvelte, SiDjango, SiFastapi, SiMaterialdesign, SiTailwindcss, SiDocker, SiGooglecloud, SiGit, SiJenkins, SiExpress, SiMongodb, SiAmazon } from 'react-icons/si';
import { TbBrandGolang, TbApi } from 'react-icons/tb';
import { IconType } from 'react-icons';

interface Skill {
  title: string;
  icon: IconType;
  level: string;
}

interface SkillCategory {
  id: number;
  title: string;
  skills: Skill[];
}

const SkillItem: React.FC<Skill> = ({ title, icon: Icon, level }) => (
  <article className="flex gap-4">
    <Icon className="text-xl text-blue-400 mr-2" />
    <div className='flex-grow'>
        <h4 className="text-sm font-medium">{title}</h4>
        <small className="text-xs text-gray-400">{level}</small>
    </div>
  </article>
);

export function Skills() {
  const ITEMS: SkillCategory[] = [
    {
      id: 1,
      title: 'Frontend',
      skills: [
        { title: 'React.js', icon: FaReact, level: 'Intermediate' },
        { title: 'Next.js', icon: SiNextdotjs, level: 'Intermediate' },
        { title: 'Svelte Kit', icon: SiSvelte, level: 'Intermediate' },
        { title: 'JavaScript', icon: SiJavascript, level: 'Experienced' },
        { title: 'TypeScript', icon: SiTypescript, level: 'Intermediate' },
        { title: 'HTML5', icon: FaHtml5, level: 'Experienced' },
        { title: 'CSS3', icon: FaCss3Alt, level: 'Experienced' },
        { title: 'Material-UI', icon: SiMaterialdesign, level: 'Intermediate' },
        { title: 'Tailwind CSS', icon: SiTailwindcss, level: 'Experienced' },
      ],
    },
    {
      id: 2,
      title: 'Backend',
      skills: [
        { title: 'Node.js', icon: FaNodeJs, level: 'Intermediate' },
        { title: 'Express.js', icon: SiExpress, level: 'Intermediate' },
        { title: 'Python', icon: FaPython, level: 'Intermediate' },
        { title: 'Go', icon: TbBrandGolang, level: 'Intermediate' },
        { title: 'Django', icon: SiDjango, level: 'Intermediate' },
        { title: 'Fast API', icon: SiFastapi, level: 'Intermediate' },
        { title: 'MongoDB', icon: SiMongodb, level: 'Experienced' },
        { title: 'RESTful APIs', icon: TbApi, level: 'Experienced' },
      ],
    },
    {
      id: 3,
      title: 'Cloud & DevOps',
      skills: [
        { title: 'AWS', icon: SiAmazon, level: 'Intermediate' },
        { title: 'Google Cloud', icon: SiGooglecloud, level: 'Intermediate' },
        { title: 'Docker', icon: SiDocker, level: 'Intermediate' },
        { title: 'CI/CD', icon: SiJenkins, level: 'Intermediate' },
        { title: 'Git', icon: SiGit, level: 'Intermediate' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 w-full">
        <h5 className="text-center text-lg text-gray-500 mb-2">What Skills I Have?</h5>
        <h2 className="text-center text-3xl font-bold mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            <AnimatedBackground
                className='rounded-lg bg-gray-700 dark:bg-zinc-800 w-full'
                transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.6,
                }}
                enableHover
            >
                {ITEMS.map((category, index) => (
                <div key={index} data-id={`card-${index}`} className='p-4 w-full border-[0.01rem] border-gray-800 rounded-lg'>
                    <h3 className='text-xl sm:text-2xl text-center font-medium mb-4 text-blue-300 mt-4'>
                    {category.title}
                    </h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-full'>
                    {category.skills.map((skill, skillIndex) => (
                        <SkillItem key={skillIndex} {...skill} />
                    ))}
                    </div>
                </div>
                ))}
            </AnimatedBackground>
        </div>
    </div>

  );
}

export default Skills;

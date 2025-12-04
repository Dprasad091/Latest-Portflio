// Timeline.tsx
import { motion } from "framer-motion";
import timelineElements from "../assets/timeLineElements";
import schoolIcon from "../assets/school.svg";
import nxtwave from "../assets/nxtwave.jpeg";
import IBM from "../assets/IBM.png";
import { Cursor } from "@/components/core/cursorprops";

type TimelineItem = {
  id: string | number;
  title: string;
  location: string;
  date: string;
  description: string;
  tech?: string[];
  color?: string; // e.g. "white" | "blue" | "emerald"
  logo?: string;  // "school" | "nxtwave" | "ibm"
  icon?: string;  // same as logo or fallback
};

const getLogoSrc = (key?: string) => {
  switch ((key || "").toLowerCase()) {
    case "school":
      return schoolIcon;
    case "nxtwave":
      return nxtwave;
    case "ibm":
      return IBM;
    default:
      return schoolIcon; // safe generic
  }
};

const getLogoLabel = (key?: string) => {
  switch ((key || "").toLowerCase()) {
    case "school":
      return "Graduation";
    case "nxtwave":
      return "NxtWave CCBP 4.0";
    case "ibm":
      return "IBM SkillsBuild";
    default:
      return "Experience";
  }
};

const getCursorColor = (key?: string) => {
  switch ((key || "").toLowerCase()) {
    case "nxtwave":
      return "#2563eb"; // blue-600
    case "ibm":
      return "#1f2937"; // gray-800
    case "school":
      return "#f97316"; // orange-500
    default:
      return "#3b82f6"; // blue-500 default
  }
};

const MouseIcon = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={31}
      fill="none"
      className="hidden sm:block"
    >
      <g clipPath="url(#a)">
        <path
          fill={color}
          fillRule="evenodd"
          stroke={"#fff"}
          strokeLinecap="square"
          strokeWidth={2}
          d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#000" d="M0 0h26v31H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

function Cursor2({ element }: { element: TimelineItem }) {
  const logoKey = element.logo || element.icon;
  const logoSrc = getLogoSrc(logoKey);
  const logoLabel = getLogoLabel(logoKey);
  const cursorColor = getCursorColor(logoKey);

  const cursorContent = (
    <div className="flex items-center">
      <img
        src={logoSrc}
        alt={logoLabel}
        className={`${
          logoKey?.toLowerCase() === "nxtwave"
            ? "w-10 h-10 sm:w-16 sm:h-16"
            : "w-8 h-8 sm:w-12 sm:h-12"
        } p-1 sm:p-2 bg-white rounded-lg`}
      />
      <p className="ml-2 text-xs sm:text-sm">{logoLabel}</p>
    </div>
  );

  return (
    <div className="w-full sm:w-auto">
      <div className="overflow-hidden rounded-[12px] shadow-md dark:bg-black relative">
        <Cursor
          attachToParent
          variants={{
            initial: { scale: 0.3, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.3, opacity: 0 },
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.15,
          }}
          className="hidden sm:block left-12 top-4"
        >
          <div className="flex items-center">
            <MouseIcon color={cursorColor} />
            <div className="ml-2">{cursorContent}</div>
          </div>
        </Cursor>

        <motion.div
          className="border border-gray-900 rounded-lg px-4 sm:px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-lg sm:text-xl font-medium">
            {element.title}
          </div>

          <div className="text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm">
            {element.location}
            <span className="block sm:inline sm:ml-2">| {element.date}</span>
          </div>

          <div className="mb-4 text-sm text-center">
            {element.description}
          </div>

          <div className="flex flex-wrap mb-4 sm:mb-6 justify-center">
            {(element.tech || []).map((tech, index) => (
              <motion.span
                key={index}
                className="bg-gray-900 rounded-xl px-2 py-1 text-xs sm:text-sm m-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Mobile floating icon */}
          <motion.img
            src={getLogoSrc(element.icon || element.logo)}
            alt="icon"
            className={`${
              element.color === "white"
                ? "bg-white"
                : element.color
                ? `bg-${element.color}-500`
                : "bg-slate-800"
            } ${
              (element.icon || element.logo)?.toLowerCase() === "nxtwave"
                ? "w-10"
                : "w-8"
            } p-1 rounded-lg z-20 absolute -left-14 top-4 sm:hidden`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Timeline({
  defaultColor,
}: {
  defaultColor?: string;
}) {
  return (
    <div className="container mx-auto px-4">
      {(
        timelineElements as unknown as TimelineItem[]
      ).map((element, index) => {
        const colorClass =
          defaultColor ||
          (element.color === "white"
            ? "bg-white"
            : element.color
            ? `bg-${element.color}-500`
            : "bg-slate-800");

        return (
          <motion.div
            key={element.id}
            className="flex flex-col sm:flex-row m-0 sm:m-4 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            {/* Desktop side rail */}
            <div className="hidden sm:flex items-start w-44 pt-0.5 relative">
              <div className="w-4/5 text-gray-500 text-sm">
                {element.date}
              </div>

              <div
                className={`${colorClass} w-px h-full translate-x-5 translate-y-10 opacity-30`}
              />

              <motion.img
                src={getLogoSrc(element.icon || element.logo)}
                alt="icon"
                className={`${colorClass} ${
                  (element.icon || element.logo)?.toLowerCase() === "nxtwave"
                    ? "w-10 sm:w-12"
                    : "w-8 sm:w-10"
                } p-1 rounded-lg z-20`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />

              <div
                className={`${colorClass} h-px w-8 translate-y-5 opacity-30`}
              />
            </div>

            {/* Main card with cursor */}
            <Cursor2 element={element} />

            {/* Mobile vertical line */}
            <div
              className={`${colorClass} w-0.5 h-6 mx-auto my-2 opacity-60 sm:hidden`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}


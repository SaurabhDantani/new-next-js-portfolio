import { CardHoverEffectDemo } from "@/components/skill/Skills.Index";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
export const projects = [
  {
    title: "Stripe",
    description:"A technology company that builds economic infrastructure for the internet.",
    link: "",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
const lightingEffectKeyframes = {
  "0%": { boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" },
  "50%": { boxShadow: "0 0 20px rgba(255, 255, 255, 1)" },
  "100%": { boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" },
};

// Apply the keyframes to a CSS animation
const lightingEffectAnimation = {
  animation: "lighting 2s linear infinite",
  "@keyframes lighting": lightingEffectKeyframes,
};
export default function Skills() {
  return (
    <Card id="skills">
      <CardBody className="dark:bg-gray-900 h-96">
        {/* <CardHoverEffectDemo /> */}
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {projects.map((skill, index) => (
          <motion.li
            className="bg-white border border-red-900 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 animate-pulse"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.title}
          </motion.li>
        ))}
      </ul>
      </CardBody>
    </Card>
  );
}

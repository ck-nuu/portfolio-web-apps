import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AutoCentric",
    description:
      "Professional automotive service management system designed to streamline your shop operations, manage customer relationships, and track vehicle maintenance with precision.",
    image: "/images/autocentric.png",
    demo: "https://autocentric.securewire.net",
    github: "https://github.com/yourusername/taskify",
  },
  {
    title: "UpNext Ghana",
    description:
      "Your one stop portal for all the events and activities happening in Ghana",
    image: "/images/upnextghana.png",
    demo: "https://upnextghana.com",
    github: "https://github.com/yourusername/weathernow",
  },
  {
    title: "LaNMMHD",
    description:
      "Comprehensive health system management platform for tracking facilities, workers, programs, and stock across a municipal health network.",
    image: "/images/lanmmhd.png",
    demo: "https://lanmmhd.evidata.pro",
    github: "https://github.com/yourusername/budgetbuddy",
  },
  {
    title: "PHD Tracker",
    description: "Administrative tool for tracking correspondence across Public Health Division(Ghana).",
    image: "/images/lanmmhd.png",
    demo: "https://phd.teamdesk.pro/",
    github: "https://github.com/yourusername/budgetbuddy",
  },
  {
    title: "Holy Family Catholic Church",
    description:
      "A personal finance tracker with charts and monthly budget planning, built with React and Firebase.",
    image: "/images/holyfamily.png",
    demo: "https://holyfamilychurchdagenham.org",
    github: "https://github.com/yourusername/budgetbuddy",
  },
  {
    title: "Salvation Army",
    description:
      "Comprehensive management system for student admissions, staff directory, and detailed reporting across the Ghana territory educational network",
    image: "/images/salvationarmy.png",
    demo: "https://salvationarmy.dammzu.com",
    github: "https://github.com/yourusername/budgetbuddy",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <p className="text-gray-600 mt-2">
          A collection of web applications I’ve built
        </p>
      </header>

      {/* Projects Grid: 3 in a row, responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex"
          >
            <Card className="overflow-hidden rounded-2xl shadow-lg flex flex-col w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button asChild variant="default">
                    <a href={project.demo} target="_blank">Live Demo</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank">GitHub</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-500">
        © {new Date().getFullYear()} Port233 LTD. All rights reserved.
      </footer>
    </div>
  );
}

/* Vercel Deployment Configuration:

1. Create a `vercel.json` file at the root of your project:
{
  "version": 2,
  "builds": [
    { "src": "package.json", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}

2. Make sure all your images are in the `public/images` folder.
3. Push your repo to GitHub.
4. In Vercel, create a new project, link your repo, and deploy.
   Vercel will detect React/Next.js automatically.
5. Your portfolio will be live at the Vercel-provided URL.
*/

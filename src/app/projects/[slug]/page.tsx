import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { 
  ExternalLink, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook,
  Code,
  Globe,
  Settings,
  Users,
  Calendar,
  Star,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} | Project Details - Abdullah Al Mamun`,
    description: project.description,
    openGraph: {
      title: `${project.name} | Project Details`,
      description: project.description,
      type: 'article',
      url: `https://aamamunszone.vercel.app/projects/${slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);

  if (!project) {
    notFound();
  }

  const featuresWithIcons = [
    { icon: Code, text: 'Modern Tech Stack' },
    { icon: Globe, text: 'Responsive Design' },
    { icon: Settings, text: 'Easy to Customize' },
    { icon: Users, text: 'User-Friendly Interface' },
    { icon: Calendar, text: 'Regular Updates' },
    { icon: Star, text: 'High Performance' },
  ];

  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                Projects
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">{project.name}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <img 
            src={project.image}
            alt={project.name}
            width={1200}
            height={600}
            className="w-full h-96 object-cover rounded-xl mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{project.name}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{project.tagline}</p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            {project.githubClient && (
              <Button asChild variant="outline">
                <a href={project.githubClient} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Client
                </a>
              </Button>
            )}
            {project.githubServer && (
              <Button asChild variant="outline">
                <a href={project.githubServer} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Server
                </a>
              </Button>
            )}
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Overview</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-4xl">
            {project.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {project.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-start">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mr-4">
                    <Code className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.split(' ')[0]}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">Frontend</h3>
              <div className="space-y-3">
                {project.tech.filter(tech => ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Redux', 'Context API', 'React Router', 'Framer Motion', 'shadcn/ui'].includes(tech)).map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 mr-3">
                      <Code className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">Backend</h3>
              <div className="space-y-3">
                {project.tech.filter(tech => ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'RESTful APIs', 'Firebase Admin'].includes(tech)).map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="p-2 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 mr-3">
                      <Settings className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">Tools</h3>
              <div className="space-y-3">
                {project.tech.filter(tech => !['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Redux', 'Context API', 'React Router', 'Framer Motion', 'shadcn/ui', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'RESTful APIs', 'Firebase Admin'].includes(tech)).map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 mr-3">
                      <Globe className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots/Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Screenshots</h2>
          <img 
            src={project.image}
            alt={`${project.name} screenshot`}
            width={1200}
            height={600}
            className="w-full h-96 object-cover rounded-xl"
          />
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Challenges & Solutions</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <MessageCircle className="mr-3 text-red-500" />
                Challenges
              </h3>
              <div className="space-y-6">
                {project.challenges.split(',').map((challenge, index) => (
                  <div key={index} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Challenge {index + 1}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{challenge.trim()}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Star className="mr-3 text-green-500" />
                Solutions
              </h3>
              <div className="space-y-6">
                {project.solutions.split(',').map((solution, index) => (
                  <div key={index} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Solution {index + 1}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{solution.trim()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Improvements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Future Improvements</h2>
          <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
            <ul className="space-y-4">
              {project.futureImprovements.map((improvement, index) => (
                <li key={index} className="flex items-start">
                  <div className="p-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mr-3 mt-1">
                    <Star className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{improvement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Project Links</h2>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="flex-1 min-w-[200px] bg-cyan-600 hover:bg-cyan-700 text-white">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            {project.githubClient && (
              <Button asChild variant="outline" className="flex-1 min-w-[200px]">
                <a href={project.githubClient} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Client
                </a>
              </Button>
            )}
            {project.githubServer && (
              <Button asChild variant="outline" className="flex-1 min-w-[200px]">
                <a href={project.githubServer} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Server
                </a>
              </Button>
            )}
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="outline">
              <Link href="/#projects">
                <MessageCircle className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            
            <div className="flex space-x-3">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((relatedProject) => (
              <div 
                key={relatedProject.id}
                className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
              >
                <img 
                  src={relatedProject.image}
                  alt={relatedProject.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{relatedProject.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{relatedProject.tagline}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {relatedProject.tech.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link href={`/projects/${relatedProject.id}`}>
                      View Project
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/#projects">
                View More Projects
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
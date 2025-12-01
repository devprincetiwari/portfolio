import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Learning Platform Using AI and Inclusive Design',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'Google Dialogflow', 'Botpress'],
      description: [
        'Built an E-learning platform for visually impaired users',
        'Integrated AI chatbot and read-aloud features'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Wedding Database Management System',
      technologies: ['PHP', 'MySQL', 'XAMPP'],
      description: [
        'Implemented Admin Login, Wedding Packages, and Gallery modules'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Weather Forecast Web Application',
      technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
      description: [
        'Fetched and displayed live weather data using OpenWeatherMap API'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Responsive Social Media Dashboard',
      technologies: ['CSS Flexbox', 'CSS Grid', 'Responsive Layouts'],
      description: [
        'Designed a modern dashboard',
        'Added dynamic sidebar and mobile-first design with cross-browser compatibility'
      ],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-slate-700/50 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Code2 className="text-blue-400" size={24} />
                  </div>
                  <ExternalLink className="text-gray-500 group-hover:text-blue-400 transition-colors cursor-pointer" size={20} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-2 mb-4">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-gray-300 text-sm leading-relaxed">
                      • {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-blue-300 rounded-full border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

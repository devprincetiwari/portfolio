import { Code, Wrench, Heart, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'PHP'],
      color: 'blue'
    },
    {
      title: 'Frameworks & SDKs',
      icon: Layers,
      skills: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'ReactJS', 'NodeJS', 'ExpressJS'],
      color: 'cyan'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Jupyter Notebook', 'Google Colab', 'VS Code', 'OOP', 'API Integration', 'Git', 'MySQL', 'MongoDB'],
      color: 'green'
    },
    {
      title: 'Soft Skills',
      icon: Heart,
      skills: ['Leadership', 'Teamwork', 'Project Management', 'Conflict Resolution', 'Adaptability'],
      color: 'pink'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500/20',
      text: 'text-blue-400',
      border: 'border-blue-500/50',
      hover: 'hover:border-blue-400'
    },
    cyan: {
      bg: 'bg-cyan-500/20',
      text: 'text-cyan-400',
      border: 'border-cyan-500/50',
      hover: 'hover:border-cyan-400'
    },
    green: {
      bg: 'bg-green-500/20',
      text: 'text-green-400',
      border: 'border-green-500/50',
      hover: 'hover:border-green-400'
    },
    pink: {
      bg: 'bg-pink-500/20',
      text: 'text-pink-400',
      border: 'border-pink-500/50',
      hover: 'hover:border-pink-400'
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Technical Skills
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 ${colors.hover} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${colors.bg} rounded-lg`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 text-sm font-medium bg-slate-700/50 ${colors.text} rounded-lg border ${colors.border} hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

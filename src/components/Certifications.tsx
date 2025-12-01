import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { name: 'HTML, CSS JavaScript', provider: 'Simplilearn' },
    { name: 'Artificial Intelligence Fundamentals', provider: 'IBM' },
    { name: 'C for Everyone: Structured Programming', provider: 'Coursera' },
    { name: 'Interactive Programming in Python', provider: 'Rice University' },
    { name: 'Information Technology Fundamentals', provider: 'IBM' },
    { name: 'Introduction to Java', provider: 'LearnQuest' },
    { name: 'Linux Fundamentals', provider: 'LearnQuest' },
    { name: 'ACN: Introduction to Networks', provider: 'CISCO' }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Courses & Certifications
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-12"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Award className="text-blue-400" size={24} />
                </div>
                <ExternalLink className="text-gray-500 group-hover:text-blue-400 transition-colors cursor-pointer" size={18} />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {cert.name}
              </h3>

              <p className="text-gray-400 text-sm">{cert.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

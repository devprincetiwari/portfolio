import { GraduationCap, MapPin, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          About Me
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <GraduationCap className="text-blue-400" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <p className="text-gray-300 font-medium">B.Tech in Computer Science & Engineering</p>
                <p className="text-gray-400">Jain (Deemed-to-be-University)</p>
                <div className="flex items-center gap-2 mt-2 text-gray-400">
                  <MapPin size={16} />
                  <span>Bangalore, Karnataka</span>
                </div>
                <p className="text-gray-400 mt-1">2022 – 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <Award className="text-blue-400" size={20} />
              <span className="text-blue-300 font-semibold">CGPA: 8.31/10</span>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a passionate Computer Science student with a strong focus on AI, full-stack development, and data analytics.
              My journey in tech is driven by curiosity and a commitment to building solutions that make a real impact.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With hands-on experience as a Data Analyst at Jindal Steel & Power Ltd and multiple successful projects,
              I specialize in creating inclusive, intelligent applications that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

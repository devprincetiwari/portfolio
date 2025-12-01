import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Work Experience
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-12"></div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

          <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 md:ml-8">
            <div className="absolute -left-3 md:left-1/2 md:-translate-x-1/2 top-8 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Briefcase className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Data Analyst</h3>
                  <p className="text-xl text-blue-400 font-semibold">Jindal Steel & Power Ltd</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={18} />
                <span>June 2024 – Aug 2024</span>
              </div>
            </div>

            <div className="space-y-3">
              {[
                'Utilized various data sources including external datasets, file shares, and databases',
                'Ensured data integrity by writing and optimizing SQL queries',
                'Collaborated with cross-functional teams to define data requirements',
                'Developed dashboards and reports to visualize insights',
                'Applied data analysis techniques to support business decisions'
              ].map((responsibility, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-gray-300">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

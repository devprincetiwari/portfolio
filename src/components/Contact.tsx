import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Get In Touch
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-12"></div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <p className="text-gray-300 text-center text-lg mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:princetiwarikv@gmail.com"
              className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">princetiwarikv@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+918292721696"
              className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                <Phone className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">+91 8292721696</p>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/devprincetiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/prince-kumar-tiwari-371069254/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:princetiwarikv@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <Send size={20} />
              <span>Send Message</span>
            </a>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Prince Kumar Tiwari. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

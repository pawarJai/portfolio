import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaBlogger } from "react-icons/fa";
// @ts-ignore
const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-8 px-5">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-bold mb-4 text-primary">Connect with Me</h3>
        <div className="flex justify-center space-x-6 text-2xl">
          {/* GitHub */}
          <a
            href="https://github.com/yourgithubusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourlinkedinusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          {/* Naukri */}
          <a
            href="https://naukri.com/mynaukri/yourprofileid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="Naukri"
          >
            <FaBlogger />
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/yourinstagramusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          {/* Blog */}
          <a
            href="https://yourblogsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="Blog"
          >
            <FaBlogger />
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/yourtwitterusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
        <p className="text-sm mt-6">
          © 2024 Jayesh Pawar. Crafted with <span className="text-primary">❤</span> and passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

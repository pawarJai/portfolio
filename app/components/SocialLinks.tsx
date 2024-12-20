import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaBlogger, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// @ts-expect-error: Ignore type-checking error for demonstration
const SocialLinks: React.FC = () => {
  return (
    <section id="social" className="py-16 px-5 bg-gradient-to-r from-black via-dark to-black text-light">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Follow Me</h2>
        <p className="text-lg mb-8">
          Connect with me on my professional and personal platforms. Let’s stay in touch!
        </p>
        <div className="flex justify-center space-x-6 text-3xl">
          {/* GitHub */}
          <a
            href="https://github.com/pawarJai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pawarjay/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          {/* Naukri */}
          <a
            href="https://www.naukri.com/mnjuser/profile?id=&altresid"
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
          {/* Contact */}
          <a
            href="tel:+919408342183"
            className="hover:text-primary transition"
            aria-label="Contact Number"
          >
            <FaPhoneAlt />
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/919408342183"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;


import Head from "next/head";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
// import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Jayesh Pawar | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to Jayesh Pawar's portfolio. A Full-Stack Developer with expertise in Python, Django, React, Next.js, and more. Explore projects, skills, and contact details."
        />
        <meta name="keywords" content="Jayesh Pawar, Full-Stack Developer, Python, Django, React, Next.js, Portfolio" />
        <meta name="author" content="Jayesh Pawar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Jayesh Pawar | Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Jayesh Pawar, showcasing skills, projects, and expertise in Full-Stack Development." />
        <meta property="og:image" content="/assets/portfolio-thumbnail.png" /> {/* Update with a valid thumbnail image path */}
        <meta property="og:url" content="https://yourportfolio.com" /> {/* Update with your website's URL */}
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" /> {/* Update the favicon */}
      </Head>

      {/* Components */}
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <ContactForm />
      <SocialLinks /> 
      <Footer />
    </>
  );
}

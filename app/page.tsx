import Appbar from "@/src/Appbar/Appbar";
import styles from "./page.module.css";
import About from "@/src/About/About";
import News from "@/src/News/News";
import { Toolbar } from "@mui/material";
import Experience from "@/src/Experience/Experience";
import Footer from "@/src/Footer/Footer";
import Activities from "@/src/Activities/Activities";
import Contact from "@/src/Contact/Contact";
import Awards from "@/src/Awards/Awards";
import Breadcrumb from "./breadcrumb";

export default function Home() {
  return (
    <div className={styles.page}>
      <Breadcrumb />
      <header>
        <Appbar />
        <Toolbar
          sx={{ minHeight: { xs: 52, sm: 58 }, height: { xs: 52, sm: 58 } }}
        />
      </header>
      <main>
        <section id="about" aria-label="About Nowshin Layla">
          <About />
        </section>
        <section id="news" aria-label="News and Updates">
          <News />
        </section>
        <section id="experience" aria-label="Professional Experience">
          <Experience />
        </section>
        <section id="certifications" aria-label="Certifications and Licenses">
          <Awards />
        </section>
        <section id="activities" aria-label="Professional Activities">
          <Activities />
        </section>
        <section id="contact" aria-label="Contact">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

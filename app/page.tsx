import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import AboutMe from "./component/about-me";
import { aboutMe, skills, professionalData } from "./data/page-data";
import ProfessionalExperience from "./component/professional-experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <AboutMe data={aboutMe} skills={skills} />
        <ProfessionalExperience data={professionalData} />
      </div>
    </main>
  );
}

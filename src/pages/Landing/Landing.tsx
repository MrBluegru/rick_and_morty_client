import styles from "./landing.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className={styles.landingPage}>
      <h1 className={styles.title}>Welcome to the Rick and Morty App</h1>
      <Link to="/home">
        <button className={styles.btnStart}>Start</button>
      </Link>
      <a
        className={styles.linkName}
        href="https://www.linkedin.com/in/mrbluegru/"
        target="_blank"
        rel="noreferrer"
      >
        by Mr. Blue
      </a>
    </main>
  );
}
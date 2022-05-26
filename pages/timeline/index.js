import styles from "../../styles/TimeLine.module.css";
import Link from "next/link";

export default function Timeline(props) {
  console.log({ props });
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> This is the timeline </h1>
      <p>
        Go back to <Link href="/">Home</Link>
      </p>
    </div>
  );
}

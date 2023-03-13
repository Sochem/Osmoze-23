import styles from "@/styles/Home.module.css";

export default function Homepage() {
	return (
		<div className={styles.main}>
			<div className={styles.top}>
                <h1 className={styles.mainHeading}>Welcome to the Annual Chemical Extravaganza</h1>
                <h1 className={styles.osmozeText}>OSMOZE '23</h1>
                <button className={styles.registerButton}>
                    Register
                </button>
            </div>
		</div>
	);
}



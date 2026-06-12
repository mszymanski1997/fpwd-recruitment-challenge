import { ArrowLeftRight } from 'lucide-react';
import styles from './Header.module.scss'; //

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logoSection}>
					<div className={styles.iconWrapper}>
						<ArrowLeftRight size={24} color='#ff6b00' />
					</div>
					<span className={styles.logoText}>
						Crypto<span>X</span>
					</span>
				</div>

				<div className={styles.badgeSection}>
					<span className={styles.badge}>online currency exchange</span>
				</div>
			</div>
		</header>
	);
}

import styles from './RateCard.module.scss';
import { TrendingUp } from 'lucide-react';
import CurrentRateValue from './CurrentRateValue';

export default function RateCard() {
	return (
		<section className={styles.rateCard}>
			<div className={styles.badgeRow}>
				<div className={styles.liveBadge}>
					<span></span> Live Market Data
				</div>
				<TrendingUp size={18} color='#ff6b00' />
			</div>

			<div className={styles.content}>
				<h2 className={styles.title}>Current exchange rate</h2>
				<div className={styles.currencyPair}>Euro / Polish Zloty</div>

				<div className={styles.rateValueWrapper}>
					1 EUR = <CurrentRateValue />
				</div>
			</div>

			<p className={styles.footerInfo}>
				The rate is automatically refreshed. The application server utilizes a
				secure caching mechanism (1-minute cache) to ensure lightning-fast
				conversions without overloading external banking systems.
			</p>
		</section>
	);
}

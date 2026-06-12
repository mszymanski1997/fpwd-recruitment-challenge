'use client';

import { useEffect, useState } from 'react';
import styles from './CurrentRateValue.module.scss';

const CurrentRateValue = () => {
	const [rate, setRate] = useState<number | null>(null);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const fetchRate = async () => {
			try {
				const res = await fetch('http://localhost:3001/rates');

				if (!res.ok) {
					throw new Error('Network response was not ok');
				}

				const data = await res.json();

				setRate(data.exchange_rate);
			} catch (err) {
				console.error('Fetching error:', err);
				setError(true);
			}
		};

		fetchRate();
	}, []);

	if (error) return <span className={styles.errorText}>Fetch error</span>;
	if (rate === null) return <span className={styles.loadingText}>...</span>;

	return (
		<span className={styles.rateValueWrapper}>
			{rate.toFixed(4)}
			<span className={styles.currency}>PLN</span>
		</span>
	);
};

export default CurrentRateValue;

'use client';

import React, { useState } from 'react';
import styles from './Form.module.scss';

type TransactionResult = {
	id: string;
	amountEur: number;
	amountPln: number;
	rate: number;
	timestamp: number;
};

export default function TransactionForm() {
	const [amountEur, setAmountEur] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [result, setResult] = useState<TransactionResult | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const parsedAmount = parseFloat(amountEur);
		if (isNaN(parsedAmount) || parsedAmount <= 0) {
			setError('Please enter a valid amount greater than 0');
			return;
		}

		setLoading(true);
		setError(null);
		setResult(null);

		try {
			const response = await fetch('http://localhost:3001/transactions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ amountEur: parsedAmount }),
			});

			if (!response.ok) {
				throw new Error('Failed to process transaction');
			}

			const data = (await response.json()) as TransactionResult;
			setResult(data);
			setAmountEur('');
		} catch {
			setError('Server connection error. Try again later.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className={styles.transactionForm}>
			<h2>Simulate Transaction</h2>

			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.formGroup}>
					<label htmlFor='amount'>Amount to exchange</label>
					<div className={styles.inputWrapper}>
						<input
							id='amount'
							type='number'
							step='0.01'
							placeholder='0.00'
							value={amountEur}
							onChange={(e) => setAmountEur(e.target.value)}
							disabled={loading}
							required
						/>
						<span className={styles.inputCurrency}>EUR</span>
					</div>
				</div>

				<button
					type='submit'
					className={styles.submitBtn}
					disabled={loading || !amountEur}
				>
					{loading ? 'Processing...' : 'Convert to PLN'}
				</button>
			</form>

			{error && <p className={styles.errorText}>{error}</p>}

			{result && (
				<div className={styles.resultBox}>
					<div className={styles.resultTitle}>Conversion Result</div>
					<div className={styles.resultValues}>
						{result.amountEur.toFixed(2)} EUR ={' '}
						<span>{result.amountPln.toFixed(2)} PLN</span>
					</div>
					<div className={styles.resultMeta}>
						Applied exchange rate: 1 EUR = {result.rate.toFixed(4)} PLN
					</div>
				</div>
			)}
		</section>
	);
}

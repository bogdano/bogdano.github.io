import { useState, useEffect } from 'react';
import './Counter.css';

export default function Counter({
	children,
	count: initialCount,
}: {
	children: JSX.Element;
	count: number;
}) {
	const [count, setCount] = useState(initialCount);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	useEffect(() => {
		const savedCount = localStorage.getItem('count');
		setCount(Number(savedCount) || initialCount);
	}, []);
	useEffect(() => {
		localStorage.setItem('count', count.toString());
	}, [count]);

	return (
		<>
			<div className="counter">
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div className="counter-message">{children}</div>
		</>
	);
}

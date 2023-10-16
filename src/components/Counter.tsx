import { useState, useEffect } from 'react';
import './Counter.css';

export default function Counter({
	children,
	count: initialCount,
}: {
	children: JSX.Element;
	count: number;
}) {
	const isBrowser = typeof window !== 'undefined';
	const [count, setCount] = useState(() => {
		if (isBrowser) {
			const storedCount = localStorage.getItem('count');
			return storedCount ? parseInt(storedCount) : initialCount;
		}
		
	});
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	useEffect(() => {
		if (isBrowser) {
			localStorage.setItem('count', count.toString());
		}
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

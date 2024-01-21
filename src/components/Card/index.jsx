export default function Card({ children, className = "" }) {
	return (
		<div className={'rounded bg-theme shadow ' + className}>
			{children}
		</div>
	);
}

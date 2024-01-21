import Sidenav from './components/Sidenav';
import { Outlet } from 'react-router-dom';

export default function Layout({ children }) {
	return (
		<div className="main">
			<Sidenav />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

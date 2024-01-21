import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import { FaGithub, FaTwitter, FaBook } from 'react-icons/fa';

export default function Sidenav() {
	return (
		<div className={styles.SidenavWrapper + ' py-2'}>
			<div className={styles.Sidenav + ' container rounded-lg shadow'}>
				<div className="row column acenter">
					<h1 className={styles.brand + ' col-10'}>
						<Link to={'/'}>Go Home</Link>
					</h1>

					<div className={styles.links + ' col-10'}>
						<div className="row between acenter w-100">
							<div className="text-center">
								<a href="https://github.com/peteradeojo/" target="_blank" rel="noreferrer" title='Github'>
									<FaGithub size={30} />
								</a>
							</div>
							<div className="text-center">
								<a href="https://twitter.com/boluwatifee__" target="_blank" rel="noreferrer" title='Twitter'>
									<FaTwitter size={30} />
								</a>
							</div>
							<div className="text-center">
								<a href="https://read.cv/peteru" target="_blank" rel="noreferrer" title='My CV'>
									<FaBook size={30} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

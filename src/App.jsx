import { Link } from 'react-router-dom';
import Card from './components/Card';
import Notes from './components/Notes';

import { loadNotes } from './util';
import { useEffect } from 'react';

function App() {
	const notes = loadNotes();

	useEffect(() => {
		document.title = 'Tekker';
	});

	return (
		<>
			<div className="py-5"></div>
			<div className="container px-0">
				<Link to="/note">Save a Note</Link>
				<div className="py-3"></div>
				<Card className="h-min-25 p-5">
					<h1>Take Notes!</h1>
					<div className="py-1"></div>
					<p>
						Welcome to our note-taking web app! 📝 This platform is designed
						with simplicity in mind, allowing you to capture your thoughts
						effortlessly. Take notes, jot down ideas, or create to-do lists—it's
						your space to organize and express. Your notes are securely stored
						on your own device, ensuring your privacy and accessibility anytime
						you return. No need to worry about losing your thoughts—our app
						saves them for you. Feel free to customize your notes with different
						styles and formatting options. As you navigate through the app,
						you'll find a user-friendly interface that makes managing and
						retrieving your notes a breeze.
					</p>
				</Card>
			</div>

			<div className="py-1"></div>
			<div className="container">
				<h2>Your Notes</h2>
			</div>
			<div className="container px-0">
				{notes.length < 1 ? (
					<p>You haven't saved any notes.</p>
				) : (
					<Notes notes={notes} />
				)}
			</div>
		</>
	);
}

export default App;

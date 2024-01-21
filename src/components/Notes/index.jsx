/**
 * @typedef {{
 *    id: number,
 *    title:string,
 *    content:EditorState,
 *    html: string,
 *  }} Note
 *
 */

// =================
import { Link } from 'react-router-dom';
import Card from '../Card';
import style from './style.module.scss';

/**
 *
 * @param {{note: Note}}
 */
function Note({ note }) {
	let noteText = note.content.blocks[0]?.text.substring(0, 50);

	return (
		<Card className={'p-3 ' + style.noteCard}>
			<h3 className={style.title}>{note.title}</h3>
			<p>{noteText}</p>

			<span className={style.footer}>
				{new Date(note.date).toLocaleDateString()}
			</span>
		</Card>
	);
}

/**
 *
 * @param {{notes: Note[]}}
 * @returns
 */
export default function Notes({ notes }) {
	return (
		<div className="row between">
			{notes.map((n, i) => (
				<div className="col-5 p-1" key={i}>
					<Link to={`/note/${n.id}`} style={{ textDecoration: 'none' }}>
						<Note note={n} key={n.id} />
					</Link>
				</div>
			))}
		</div>
	);
}

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw } from 'draft-js';
import { useEffect, useState } from 'react';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import style from './style.module.scss';

import {
	loadNotes,
	saveNote as updateNotes,
	updateNote,
	findNote,
} from '../../util';
import { useParams } from 'react-router-dom';

/**
 * @typedef {{
 *    id: number,
 *    title:string,
 *    content:EditorState,
 *    html: string,
 *  }} Note
 *
 */

export default function Note() {
	const { id } = useParams();
	let note = undefined;
	if (id) {
		note = findNote(id);
	}

	const [editorState, setEditorState] = useState(
		note != undefined
			? EditorState.createWithContent(convertFromRaw(note.content))
			: EditorState.createEmpty()
	);

	const [editTitle, setEditTitle] = useState(true);
	const [title, setTitle] = useState(note?.title ?? 'Untitled');

	useEffect(() => {
		document.title = title;
	}, [title]);

	const saveNote = () => {
		const content = convertToRaw(editorState.getCurrentContent());
		const html = draftToHtml(content);

		const noteCount = loadNotes().length;

		if (note == undefined) {
			const n = {
				title: title,
				html: html,
				content,
				id: noteCount + 1,
			};

			updateNotes(n);
			return;
		}

		// console.log(note);
		updateNote({ ...note, title, content, html });
	};

	const updateTitle = (e) => {
		if (e.target.value == '') {
			setTitle('Untitled');
			return;
		}
		setTitle(e.target.value);
	};

	/**
	 * @type Note n
	 */
	const n = {};

	return (
		<>
			<title>{note?.title ?? 'Untitled'}</title>
			<div className="py-5"></div>
			<div className="container py-0">
				{editTitle == true ? (
					<>
						<input
							type="text"
							// onChange={updateTitle}
							onBlur={(e) => {
								updateTitle(e);
								setEditTitle(false);
							}}
							defaultValue={title}
							autoFocus
							className={style.Input}
						/>
					</>
				) : (
					<>
						<h1 onClick={() => setEditTitle(true)}>{title}</h1>
						<hr style={{ border: '1px solid #999' }} />
					</>
				)}
			</div>
			<div className="container">
				<Editor
					editorState={editorState}
					editorStyle={{
						background: '#fff',
						color: '#000',
						padding: '5px',
						minHeight: '300px',
					}}
					onEditorStateChange={(editorState) => {
						setEditorState(editorState);
					}}
				/>
				{/* <textarea
					disabled
					value={JSON.stringify(editorState.getCurrentContent())}
				/> */}
				<button onClick={saveNote}>Save</button>
			</div>
		</>
	);
}

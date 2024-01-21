/**
 * @typedef {{
 *    id: number,
 *    title:string,
 *    content:EditorState,
 *    html: string,
 *  }} Note
 *
 */

// ==============
/**
 *
 * @returns {Note[]} notes
 */
export const loadNotes = () =>
	JSON.parse(localStorage.getItem('savedNotes') ?? '[]');

/**
 *
 * @param {Note} note
 */
export const saveNote = (note) => {
	const notes = loadNotes();
	note.date = new Date().valueOf();
	localStorage.setItem('savedNotes', JSON.stringify([note, ...notes]));
};

/**
 *
 * @param {Note} note
 */
export const updateNote = (note) => {
	const notes = loadNotes();

	note.date = new Date().valueOf();

	const notNotes = notes.filter((n) => n.id != note.id);
	localStorage.setItem('savedNotes', JSON.stringify([note, ...notNotes]));
};

export const findNote = (id) => {
	const notes = loadNotes();
	const n = notes.find((n) => n.id == id);
	return n;
};

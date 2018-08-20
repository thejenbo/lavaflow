import { database } from '../firebase/firebase';

export const createNote = note => ({
    type: 'CREATE_NOTE',
    note
});

export const startCreateNote = (noteData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            text = '', 
            createdAt = ''
        } = noteData;

        const note = {text, createdAt};

        database.ref(`users/${uid}/notes`).push(note)
        .then((ref) => {
            dispatch(createNote({
                id: ref.key,
                ...note
            }))
        });
    }
};

export const editNote = (id, updates) => ({
    type: 'EDIT_NOTE',
    id,
    updates
});

export const startEditNote = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/notes/${id}`).update(updates)
            .then(() => {
                dispatch(editNote(id, updates));
            });
    };
}

export const deleteNote = ({id} = {}) => ({
    type: 'DELETE_NOTE',
    id
});

export const startDeleteNote = ({id} = {}) => {
    return (dispatch, getState) => {
        console.log('deleting note from action ', id)
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/notes/${id}`).remove()
            .then(() => {
                dispatch(deleteNote({id}));
            });
    };
};

export const getNotes = notes => ({
    type: 'GET_NOTES',
    notes
});

export const startGetNotes = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/notes`).once('value')
            .then((snapshot) => {
                const notes = [];

                snapshot.forEach((childSnapshot) => {
                    notes.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                })

                dispatch(getNotes(notes));
            });
    };
};

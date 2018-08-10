
import uid from 'uuid';
import { database } from '../firebase/firebase';

export const createNote = note => ({
    type: 'CREATE_CASE',
    note
});

export const startCreateNote = (noteData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            text = '', 
            category = ''
        } = noteData;

        const note = {text, category};

        database.ref(`users/${uid}/notes`).push(note)
        .then((ref) => {
            dispatch(createNote({
                id: ref.key,
                ...note
            }))
        });
    }
};

export const removeNote = id => ({
    type: 'REMOVE_NOTE',
    id
});

export const startRemoveNote = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/notes/${id}`).remove()
            .then(() => {
                dispatch(removeNote({id}));
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

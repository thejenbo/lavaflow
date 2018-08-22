import { createNote, deleteNote, editNote, getNotes } from '../../actions/notes';

test('should trigger addition of new note', () => {
    const note = {id: '123', text: 'hello', createdAt: '12:00'};
    const action = createNote(note);

    expect(action).toEqual({
        type: 'CREATE_NOTE',
        note
    });
});

test('should trigger deletion of note with action id', () => {
    const action = deleteNote({id: '123'});

    expect(action).toEqual({
        type: 'DELETE_NOTE',
        id: '123'
    });
});

// test('should trigger replacement of the text of note with action id with action text', () => {
//     const updates = {text: 'hello there', createdAt: '12:01'};
//     const action = editNote({id: '123', updates});

//     expect(action).toEqual({
//         type: 'EDIT_NOTE',
//         id: '123',
//         updates
//     });
// });

test('should trigger return all notes', () => {
    const notes = [
        {
            id: '123', 
            text: 'hello there', 
            createdAt: '12:01'
        },
        {
            id: '124', 
            text: 'hey', 
            createdAt: '12:05'
        },
    ]
    const action = getNotes(notes);

    expect(action).toEqual({
        type: 'GET_NOTES',
        notes
    });
});

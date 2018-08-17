
const displayReducerDefaultState = {
    noteFormIsOpen: false
};

export default (state = displayReducerDefaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_NOTE_FORM':
            return { 
                ...state,
                noteFormIsOpen: !state.noteFormIsOpen 
            };
        default:
            return state;
    }
};

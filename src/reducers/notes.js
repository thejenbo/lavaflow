
const notesReducerDefaultState = [];

export default (state = notesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                action.note
            ];
        case 'REMOVE_NOTE':
            return state.filter(({id}) => id !== action.id);
        // case 'EDIT_CASE':
        //     return state.map((expense) => {
        //         if (expense.id === action.id) {
        //             return {
        //                 ...expense,
        //                 ...action.updates
        //             }
        //         } else {
        //             return expense;
        //         }
        //     })
        case 'GET_NOTES':
            return action.notes;
        default:
            return state;
    }
};

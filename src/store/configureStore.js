import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import notesReducer from '../reducers/notes';
import displayReducer from '../reducers/display';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            notes: notesReducer,
            display: displayReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { injectGlobal } from 'emotion'
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase';
import { logIn, logOut } from './actions/auth';
import { startGetNotes } from './actions/notes';

injectGlobal`
	* {
		box-sizing: border-box;
    }
    
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600');

	body {
		color: #ec008c;
        font-family: 'Montserrat';
        margin: 0;
	}

	.App {
		min-height: 100%;
		height: 100%;
		position: fixed;
		width: 100%;
        background: #ec008c;
        background: linear-gradient(to bottom, #fc6767, #ec008c);
	}
`;

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<div className="App">
			<AppRouter/>
		</div>
	</Provider>
);

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(logIn(user.uid));
        store.dispatch(startGetNotes()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/');
            }
        });
    } else {
        store.dispatch(logOut());
        renderApp();
        history.push('/');
    }
});

registerServiceWorker();

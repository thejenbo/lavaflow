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
	@import url('https://fonts.googleapis.com/css?family=Varela+Round');

	body {
		background-color: #98bbd8;
		color: #fff;
		font-family: 'Varela Round';
	}

	.App {
		min-height: 100%;
		height: 100%;
		position: fixed;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.AppContainer {
		position: relative;
		height: 100%;
	}

`;

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<div className="App">
			<div className="AppContainer">
				<AppRouter/>
			</div>
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
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logOut());
        renderApp();
        history.push('/');
    }
});

registerServiceWorker();

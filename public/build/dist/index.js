import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './modules/app/App';
import './index.css';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import ReduxThunk from 'redux-thunk';
// import routeReducer from './store/reducers/route';
import userReducer from './store/reducers/user';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
var RootReducer = combineReducers({ user: userReducer,
    router: routerReducer
});
// https://github.com/ReactTraining/react-router/issues/4801
export var history = createHistory({ basename: process.env.PUBLIC_URL });
var middlewares = [routerMiddleware(history), ReduxThunk];
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(RootReducer, composeEnhancers(applyMiddleware.apply(void 0, middlewares)));
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(ConnectedRouter, { history: history },
        React.createElement(App, null))), document.getElementById('root'));
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
//# sourceMappingURL=index.js.map
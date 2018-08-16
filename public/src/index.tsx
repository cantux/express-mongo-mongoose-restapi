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

const RootReducer = combineReducers(
  { user: userReducer,
    router: routerReducer
  }
);

// https://github.com/ReactTraining/react-router/issues/4801
export const history = createHistory({basename: process.env.PUBLIC_URL});

const middlewares = [routerMiddleware(history), ReduxThunk];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

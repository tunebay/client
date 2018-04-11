import { createStore, combineReducers, compose } from 'redux';

import reducers from '../reducers';

let reduxStore: any = null;
const isBrowser: boolean = typeof window !== 'undefined';

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = (f: any) => f;
if (isBrowser && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__();
}

function create(apollo: any, initialState = {}) {
  return createStore(
    combineReducers({
      // Setup reducers
      ...reducers,
    }),
    initialState, // Hydrate the store with server-side data
    compose(
      // Add additional middleware here
      devtools
    )
  );
}

export default function initRedux(initialState: any) {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState);
  }

  // Reuse store on the client-side
  if (!reduxStore) {
    reduxStore = create(initialState);
  }

  return reduxStore;
}

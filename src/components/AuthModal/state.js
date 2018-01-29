// @flow
export type AuthModalAction = ShowAction | HideAction;
type ShowAction = { type: 'AuthModal/show' };
type HideAction = { type: 'AuthModal/hide' };

export const actions = {
  show(): ShowAction {
    console.log('show loginModal');
    return { type: 'AuthModal/show' };
  },
  hide(): HideAction {
    console.log('hide modal');
    return { type: 'AuthModal/hide' };
  },
};

export type AuthModalState = {
  visible: boolean,
};

const initialState: AuthModalState = {
  visible: false,
};

export default function reducer(
  state: AuthModalState = initialState,
  action: AuthModalAction
): AuthModalState {
  console.log(state);
  switch (action.type) {
    case 'AuthModal/show':
      return { ...state, visible: true };
    case 'AuthModal/hide':
      return { ...state, visible: false };
    default:
      return state;
  }
}

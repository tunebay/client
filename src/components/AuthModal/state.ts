// @flow
export type AuthModalAction = ShowAction | HideAction;
type ShowAction = { type: 'AuthModal/show' };
type HideAction = { type: 'AuthModal/close' };

export const actions = {
  show(): ShowAction {
    return { type: 'AuthModal/show' };
  },
  close(): HideAction {
    return { type: 'AuthModal/close' };
  },
};

export type AuthModalState = {
  visible: boolean;
};

const initialState: AuthModalState = {
  visible: false,
};

export default function reducer(
  state: AuthModalState = initialState,
  action: AuthModalAction
): AuthModalState {
  switch (action.type) {
    case 'AuthModal/show':
      return { ...state, visible: true };
    case 'AuthModal/close':
      return { ...state, visible: false };
    default:
      return state;
  }
}

// @flow

export type AuthModalAction = ShowAction;
type ShowAction = { type: 'AuthModal/show' };

export const actions = {
  show(): ShowAction {
    return { type: 'AuthModal/show' };
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
  switch (action.type) {
    case 'AuthModal/show':
      return { ...state, visible: true };
    default:
      return state;
  }
}

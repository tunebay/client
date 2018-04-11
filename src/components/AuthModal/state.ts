export type AuthModalAction = ShowAction | HideAction;

interface ShowAction {
  type: 'AuthModal/show';
}

interface HideAction {
  type: 'AuthModal/close';
}

export const actions = {
  /** Show the auth modals */
  show(): ShowAction {
    return { type: 'AuthModal/show' };
  },
  /** Hide the auth modal */
  close(): HideAction {
    return { type: 'AuthModal/close' };
  },
};

export interface AuthModalState {
  visible: boolean;
}

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

export type ModalAction = ShowAction | HideAction;

interface ShowAction {
  type: 'Modal/show';
  payload: JSX.Element;
}

interface HideAction {
  type: 'Modal/close';
}

export const actions = {
  /**
   * Show the modal
   * @param content JSX element to show in the modal
   */
  show(content: JSX.Element): ShowAction {
    console.log('show', content);
    return { type: 'Modal/show', payload: content };
  } /** Hide the modal */,
  close(): HideAction {
    return { type: 'Modal/close' };
  },
};

export interface ModalState {
  visible: boolean;
  content: JSX.Element | null;
}

const initialState: ModalState = {
  visible: false,
  content: null,
};

export default function reducer(
  state: ModalState = initialState,
  action: ModalAction
): ModalState {
  switch (action.type) {
    case 'Modal/show':
      return { ...state, visible: true, content: action.payload };
    case 'Modal/close':
      return { ...state, visible: false };
    default:
      return state;
  }
}

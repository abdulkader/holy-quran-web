import { useReducer } from 'react';

export const DELETE_DIALOG_OPEN = 'DELETE_DIALOG_OPEN';
export const DELETE_DIALOG_CLOSE = 'DELETE_DIALOG_CLOSE';

export const useDeleteDialog = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
      case DELETE_DIALOG_OPEN:
        return {
          ...state,
          active: true,
          id: action.payload,
        };
      case DELETE_DIALOG_CLOSE:
        return {
          ...state,
          active: false,
          id: null,
        };
      default:
        return state;
      }
    },
    { id: null, active: false }
  );
  return [state, dispatch];
};

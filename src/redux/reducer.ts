const initialState = {
  users: [],
};

export const usersReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case 'USER_LIST':
      return {
        ...state,
        users: action.payload,
      };
    case 'ADD_TO_LIST':
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    default:
      return state;
  }
};

export const getUsersList = (param: any) => {
  return {
    type: 'USER_LIST',
    payload: param,
  };
};

export const addToUsers = (param: any) => {
  return {
    type: 'ADD_TO_LIST',
    payload: param,
  };
};

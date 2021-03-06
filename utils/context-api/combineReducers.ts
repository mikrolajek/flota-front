const combineReducers = (reducers: any) => {
  return (state: any = {}, action: any) => {
    // Reduce all the keys for reducers from `todos` and `visibilityFilter`
    return Object.keys(reducers).reduce(
      (nextState: any, key) => {
        // Call the corresponding reducer function for a given key
        nextState[key] = reducers[key](state[key], action);
        return nextState;
      },
      {} // The `reduce` on our keys gradually fills this empty object until it is returned.
    );
  };
};

export default combineReducers;

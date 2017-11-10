const initialState = {
  matches: []
}

const ADD_MATCH = 'ADD_MATCH'

export const addMatch = (match) => ({ type: ADD_MATCH, match})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATCH:
      return [...state.matches, action.match]

    default: return state
  }
}

export default reducer;

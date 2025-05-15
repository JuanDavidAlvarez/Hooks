import React, { useReducer } from 'react';

const initialState = { cuenta: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return { cuenta: state.cuenta + 1 };
    case 'reiniciar':
      return { cuenta: 0 };
    default:
      return state;
  }
}

function ContadorReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Cuenta: {state.cuenta}</p>
      <button onClick={() => dispatch({ type: 'incrementar' })}>+1</button>
      <button onClick={() => dispatch({ type: 'reiniciar' })}>Reiniciar</button>
    </>
  );
}

export default ContadorReducer;
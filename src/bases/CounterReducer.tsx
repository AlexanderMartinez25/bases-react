import { useReducer } from "react"

interface CounterState {
  counter: number;
  previoues: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previoues: 0,
  changes: 0
}

export const CounterReducerComponent = () => {

  const [state, dispatch] = useReducer(first, INITIAL_STATE)

  const handleClick = () => {
    setCunter(prev => prev + 1)
  }

  return (
    <>
      <h1>Counter Reducer: {counter}</h1>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
}


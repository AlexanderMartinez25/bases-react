import './App.css'
import { CounterBy } from './bases/CounetBy'
import { Counter } from './bases/Counter'
import { CounterEffect } from './bases/CounterEffect'
import { CounterHook } from './bases/CounterHook'
import { CounterReducerComponent } from './bases/CounterReducer'

function App() {
  return (
    <>
      <CounterReducerComponent />
      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
    </>
  )
}

export default App

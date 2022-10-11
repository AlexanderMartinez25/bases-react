import './App.css'
import { CounterBy } from './bases/CounetBy'
import { Counter } from './bases/Counter'
import { CounterEffect } from './bases/CounterEffect'
import { CounterHook } from './bases/CounterHook'

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
    </>
  )
}

export default App

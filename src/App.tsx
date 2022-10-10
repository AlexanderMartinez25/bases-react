import './App.css'
import { CounterBy } from './bases/CounetBy'
import { Counter } from './bases/Counter'
import { CounterEffect } from './bases/CounterEffect'

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect />
    </>
  )
}

export default App

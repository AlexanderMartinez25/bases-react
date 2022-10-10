import './App.css'
import { CounterBy } from './bases/CounetBy'
import { Counter } from './bases/Counter'

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterBy />
    </>
  )
}

export default App

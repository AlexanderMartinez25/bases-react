import './App.css'
import { CounterBy } from './bases/CounetBy'
import { Counter } from './bases/Counter'
import { CounterEffect } from './bases/CounterEffect'
import { CounterHook } from './bases/CounterHook'
import { CounterReducerComponent } from './counter-reducer/CounterReducer'
// import { CounterReducerComponent } from './bases/CounterReducer'

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </>
  )
}

export default App

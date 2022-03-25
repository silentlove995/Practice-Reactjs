import React, { useEffect, useState } from 'react'
import store from './store'

export default function Counter() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        // component did mount
        let state = store.getState()
        setCounter(state.counter)

        store.subscribe((state) => {
            console.log(state);
            setCounter(state.counter)
        })
    }, [])

    let increase = () => {
        // setCounter(counter + 1)
        store.increaseCounter()
        // setCounter(store.getState().counter)
        // console.log(store.getState())
    }

    let increaseAsync = () =>{
        store.increaseCounterAsync()
        // setCounter(store.getState().counter)
    }

  return (
    <div>
        <h3>Counter: {counter}</h3>
        <button onClick={increase}>Increase</button>
        <button onClick={increaseAsync}>Increase after 1 sec</button>
    </div>
  )
}

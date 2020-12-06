import React, {Fragment, useState} from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    const reset = () => setCount(0)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    const increment2 = () => setCount(prevCount => prevCount + 1)
    const decrement2 = () => setCount(prevCount => prevCount - 1)
    const double = () => setCount(prevCount => prevCount * 2)
    const devide = () => setCount(prevCount => (prevCount % 3 === 0 ? prevCount/3 : prevCount))
    return (
        <>
            <div>count: {count}</div>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
            </div>
            <div>
                <button onClick={increment2}>+1</button>
                <button onClick={decrement2}>-1</button>
            </div>
            <div>
                <button onClick={reset}>reset</button>
                <button onClick={double}>double</button>
                <button onClick={devide}>３の倍数のときだけ３でわる</button>
            </div>
        </>
    )
}

export default App
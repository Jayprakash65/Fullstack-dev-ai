import {useEffect, useReducer, useRef, useState} from "react";


function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}    
    }
}


function Counter(){

    //  const [count, setCount] = useState(10)

    //  function increment(){
    //     setCount(count => count + 1 )
    //  }

    //  function decrement(){
    //     setCount(count => count - 1 )
        
    //  }


    //  useEffect(() => {
    //     alert('hi')
    //  }, [count])

    const initialValue = {count: 0}

    const [state, dispatch] = useReducer(reducer, initialValue)

    return(
        <>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            {state.count}
            <button onClick={() => dispatch({type: 'increment'})}>+</button>

        </>
    )
}

export default Counter;

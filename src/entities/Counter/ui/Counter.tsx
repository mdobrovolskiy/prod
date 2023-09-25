import { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'widgets/Button'
import { ThemeButton } from 'widgets/Button/ui/Button'
import { counterActions } from '../model/slice/CounterSlice'

interface CounterProps {
  className?: string
}
export const Counter: FC<CounterProps> = (props) => {
    const dispatch = useDispatch()
    const count = useSelector((state: any) => state.counterReducer.value)
    const increment = () => {
        dispatch(counterActions.incremented())
        console.log(112)
    }
    const decrement = () => {
        dispatch(counterActions.decremented())
    }

    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={increment} theme={ThemeButton.MAIN}>Increment</Button>
            <Button onClick={decrement} theme={ThemeButton.MAIN}>Decrement</Button>
        </div>
    )
}

import { useEffect, useState } from 'react'
import { Button, ThemeButton } from 'widgets/Button/ui/Button'

const Main = () => {
    const [error, setError] = useState(false)
    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])
    return <Button onClick={() => { setError(true) }} theme={ThemeButton.MAIN}>Error</Button>
}

export default Main

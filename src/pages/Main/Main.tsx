import { useEffect, useState } from 'react'
import { Page } from 'shared/Page/Page'
import { Button, ThemeButton } from 'widgets/Button/ui/Button'

const Main = () => {
    const [error, setError] = useState(false)
    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])
    return <Page></Page>
}

export default Main

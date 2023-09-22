import React, { type ReactNode, type ErrorInfo } from 'react'
import { Button } from 'widgets/Button'
import { ThemeButton } from 'widgets/Button/ui/Button'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component <ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: any) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (error: Error) {
        // Update state so the next render will show the fallback UI.
        console.log(error)
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo)
    }

    render () {
        if (this.state.hasError) {
            return (<>
                <h1>Something went wrong</h1>
                <Button theme={ThemeButton.MAIN} onClick={() => { location.reload() }}>Refresh page</Button>
            </>)
        }

        return this.props.children
    }
}

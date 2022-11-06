import React from 'react'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        </BrowserRouter>
    )
}

export default App

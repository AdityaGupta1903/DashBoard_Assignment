import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './Components/ErrorBoundaries/Error.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
    <App/>
    </ErrorBoundary>
)

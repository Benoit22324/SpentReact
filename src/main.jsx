import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SpentContextProvider from './utils/SpentContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpentContextProvider>
      <App />
    </SpentContextProvider>
  </React.StrictMode>,
)

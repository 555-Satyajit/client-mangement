import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/AppContext'
import { MuiThemeWrapper } from './theme/MuiThemeWrapper'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <MuiThemeWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiThemeWrapper>
    </AppProvider>
  </React.StrictMode>,
)

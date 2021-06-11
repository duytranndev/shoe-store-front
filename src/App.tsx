import { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import AppLayout from './ui/templates/layout'

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <AppLayout />
      </Fragment>
    </BrowserRouter>
  )
}

export default App

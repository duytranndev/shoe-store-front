import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../../pages/home/HomePage'

export default function AppRouting() {
  const routeList = [
    {
      component: <Route key={1} path='/' component={HomePage} exact />
    }
  ]
  return (
    <BrowserRouter>
      <Switch>
        {routeList.map((item) => item.component)}
        {/* <Route path='*' component={NotFound}/> */}
      </Switch>
    </BrowserRouter>
  )
}

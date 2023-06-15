import { Route, Routes } from 'react-router-dom'

import Home from '../pages/home/Home'

import { routesPath } from './routesPath'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={ <Home /> } path={ routesPath.home.route } />
    </Routes>
  )
}

export default AppRouter


import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AdquisicionHistorial } from './pages/AdquisicionHstorial'
import { Home } from './pages/Home'


const App = createBrowserRouter(
  createRoutesFromElements(
    <Route element={ <Layout /> }>
      <Route path='/' element={<Home />} />
      <Route path='/adquisiciones/:id' element={ <AdquisicionHistorial />} />
    </Route>
  )
)

export { App }

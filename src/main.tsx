import './sass/main.scss'
import ReactDOM from 'react-dom/client'
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import Initial from './containers/Initial/Initial';
import Game from './containers/Game';

const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to='/choose-game' replace />
  },
  {
    path: '/choose-game',
    element: <Initial />
  },
  {
    path: '/game/:mode',
    element: <Game />
  },
  {
    path: '*',
    element: <h1 style={{ color: '#fff' }}>Ups! This route does not exist | 404</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)

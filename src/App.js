import './App.scss'
import { Routes, Route } from "react-router-dom"
import PublicPage from './pages/PublicPage/PublicPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RequireAuth from './pages/RequireAuh/RequireAuth'
import MoviesPage from './pages/MoviesPage/MoviesPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<PublicPage />} />
        <Route
            path="/"
            element={
              <RequireAuth>
                <MoviesPage />
              </RequireAuth>
            }
          />
      </Routes>
    </div>
  )
}

export default App

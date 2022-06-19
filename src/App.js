import './App.scss'
import { Routes, Route } from "react-router-dom"
import RequireAuth from './pages/RequireAuh/RequireAuth'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import PublicPage from './pages/PublicPage/PublicPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<PublicPage />} />
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

import './App.scss'
import { Routes, Route } from "react-router-dom"
import Layout from './pages/Layout/Layout'
import PublicPage from './pages/PublicPage/PublicPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RequireAuth from './pages/RequireAuh/RequireAuth'
import ProtectedPage from './pages/ProtectedPage/ProtectedPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage isBerk={true} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App

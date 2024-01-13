
import Navbar from './components/Navbar'
import Home from './pages/Home'
import User from './pages/User'
import Recruiter from './pages/Recruiter'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import GetStarted from './pages/GetStarted'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/user"
                    element={<User />}
                />
                <Route
                    path="/companies"
                    element={<Recruiter />}
                />
                <Route
                    path="/start"
                    element={<GetStarted />}
                />
                <Route
                    path="/login"
                    element={<GetStarted />}
                />
                <Route
                    path="/user/signup"
                    element={<LoginPage isUser={true} isLogin={false} />}
                />
                <Route
                    path="/user/login"
                    element={<LoginPage isUser={true} isLogin={true} />}
                />
                <Route
                    path="/recruiter/signup"
                    element={<LoginPage isUser={false} isLogin={false} />}
                />
                <Route
                    path="/recruiter/login"
                    element={<LoginPage isUser={false} isLogin={true} />}
                />

            </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App

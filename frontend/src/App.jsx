import Navbar from './components/Navbar'
import Home from './pages/Home'
import User from './pages/User'
import Recruiter from './pages/Recruiter'
import ContactUs from './pages/ContactUs'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import GetStarted from './pages/GetStarted'
import LoginPage from './pages/LoginPage'
import { useAuthContext } from './hooks/useAuthContext'
import NotFound from './pages/NotFound'

function App() {
    const { user } = useAuthContext()
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
                        element={(user && user.user)?<User />:<Navigate to="/" />}
                    />
                    <Route
                        path="/recruiter"
                        element={(user && !user.user)?<Recruiter />:<Navigate to="/" />}
                    />
                    <Route
                        path="/ContactUs"
                        element={<ContactUs />}
                    />
                    <Route
                        path="/start"
                        element={!user?<GetStarted />:<Navigate to={user.user?"/user":"/recruiter"}/>}
                    />
                    <Route
                        path="/login"
                        element={!user?<GetStarted />:<Navigate to={user.user?"/user":"recruiter"} />}
                    />
                    <Route
                        path="/user/signup"
                        element={(user && user.user) ? <Navigate to="/user" />:<LoginPage isUser={true} isLogin={false} />}
                    />
                    <Route
                        path="/user/login"
                        element={(user && user.user) ? <Navigate to="/user" />:<LoginPage isUser={true} isLogin={true} />}
                    />
                    <Route
                        path="/recruiter/signup"
                        element={(user && !user.user) ? <Navigate to="/recruiter" />:<LoginPage isUser={false} isLogin={false} />}
                    />
                    <Route
                        path="/recruiter/login"
                        element={(user && !user.user) ? <Navigate to="/recruiter" />:<LoginPage isUser={false} isLogin={true} />}
                    />
                    <Route
                        path="*"
                        element={<NotFound />}
                    />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

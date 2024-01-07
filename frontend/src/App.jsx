import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Login from './components/Log in and sign in/Login'
import Signin from './components/Log in and sign in/Signin'
import Tab from './components/Log in and sign in/Tab'

function App() {

  const [selected, setSelected] = useState('Sign In');

  const handleSelect = (tab) => {
    setSelected(tab);
  };

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <div className="flex-col justify-center py-4">
        <Tab selected={selected} onSelect={handleSelect} />
        {selected === 'Sign In' ? <Signin /> : <Login />}
      </div>
    </>
  )
}

export default App

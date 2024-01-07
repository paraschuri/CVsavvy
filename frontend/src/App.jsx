import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Login from './pages/Log-in-and-sign-up/Login'
import Signup from './pages/Log-in-and-sign-up/Signup'
import Tab from './pages/Log-in-and-sign-up/Tab'

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
        {selected === 'Sign In' ? <Signup /> : <Login />}
      </div>
    </>
  )
}

export default App

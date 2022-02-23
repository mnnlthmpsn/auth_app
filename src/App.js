import { Register, Login, Home, Details } from './pages/pages'
import { Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/details" element={<Details />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default App
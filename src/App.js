import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageDefault from './Pages/Default/Default'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<PageDefault />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

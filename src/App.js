import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageDefault from './src/Pages/Default/Default'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route element={<PageDefault />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

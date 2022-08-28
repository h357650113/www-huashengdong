import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageDefault from './Pages/Default/Default'
import PageAlbumItems from './Pages/AlbumItems/AlbumItems'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<PageDefault />} />
                </Route>
                <Route path="/item">
                    <Route path=":id" element={<PageAlbumItems />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

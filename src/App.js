import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageDefault from './Pages/Default/Default'
import PageAlbumItems from './Pages/AlbumItems/AlbumItems'
import PageDetail from './Pages/Detail/Detail'
import PageChart from './Pages/Chart/Chart'
import PageNodes from './Pages/Nodes/Nodes'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<PageDefault />} />
                </Route>
                <Route path="/item">
                    <Route path=":id/:title" element={<PageAlbumItems />} />
                </Route>
                <Route path="/detail">
                    <Route path=":id/:title" element={<PageDetail />} />
                </Route>
                <Route path="/nodes">
                    <Route index element={<PageNodes />} />
                </Route>
                <Route path="/chart" element={<PageChart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

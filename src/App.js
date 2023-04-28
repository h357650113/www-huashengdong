import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageAlbumItems from './Pages/AlbumItems/AlbumItems'
import PageDetail from './Pages/Detail/Detail'
import PageChart from './Pages/Chart/Chart'
import PageNodes from './Pages/Nodes/Nodes'

const PageDefault = lazy(() => import('./Pages/Default/Default'))

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={
                            <Suspense fallback={'loading...'}>
                                <PageDefault />
                            </Suspense>
                        }
                    />
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

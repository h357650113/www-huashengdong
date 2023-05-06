import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

const PageDefault = lazy(() => import('./Pages/Default/Default'))
const PageDetail = lazy(() => import('./Pages/Detail/Detail'))
const PageAlbumItems = lazy(() => import('./Pages/AlbumItems/AlbumItems'))
const PageChart = lazy(() => import('./Pages/Chart/Chart'))
const PageNodes = lazy(() => import('./Pages/Nodes/Nodes'))

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={
                            <Suspense fallback={'lazy loading...'}>
                                <PageDefault />
                            </Suspense>
                        }
                    />
                </Route>
                <Route path="/item">
                    <Route
                        path=":id/:title"
                        element={
                            <Suspense fallback={'lazy loading...'}>
                                <PageAlbumItems />
                            </Suspense>
                        }
                    />
                </Route>
                <Route path="/detail">
                    <Route
                        path=":id/:title"
                        element={
                            <Suspense fallback={'lazy loading...'}>
                                <PageDetail />
                            </Suspense>
                        }
                    />
                </Route>
                <Route path="/nodes">
                    <Route
                        index
                        element={
                            <Suspense fallback={'lazy loading...'}>
                                <PageNodes />
                            </Suspense>
                        }
                    />
                </Route>
                <Route
                    path="/chart"
                    element={
                        <Suspense fallback={'lazy loading...'}>
                            <PageChart />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App

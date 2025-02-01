import { Route, Routes } from "react-router-dom"
import OverviewPage from "./pages/OverviewPage"
import ProductsPage from "./pages/ProductsPage"
import Sidebar from "./components/common/Sidebar"



function App() {
  return (
    <div className='flex h-screen bg-indigo-950 text-indigo-100 overflow-hidden'>
      	<div className='fixed inset-0 z-0'>
			<div className='absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-400 to-indigo-900 opacity-20' />
			<div className='absolute inset-0 backdrop-blur-sm' />
		</div>
		<Sidebar/>
		<Routes>
			<Route path='/' element={<OverviewPage />} />
			<Route path='/products' element={<ProductsPage />} />
		</Routes>
	</div>
  )
}

export default App
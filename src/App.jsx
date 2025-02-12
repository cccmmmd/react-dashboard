import { Route, Routes } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async'
import OverviewPage from "./pages/OverviewPage"
import ProductsPage from "./pages/ProductsPage"
import Sidebar from "./components/common/Sidebar"
import UsersPage from "./pages/UsersPage"
import SalesPage from "./pages/SalesPage"
import OrdersPage from "./pages/OrdersPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import SettingsPage from "./pages/SettingsPage"




function App() {
  return (
    <div className='flex h-screen bg-indigo-950 text-indigo-100 overflow-hidden'>
      	<div className='fixed inset-0 z-0'>
			<div className='absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-400 to-indigo-900 opacity-20' />
			<div className='absolute inset-0 backdrop-blur-sm' />
		</div>
		<Sidebar/>
		<HelmetProvider>
			<Routes>
				<Route path='/' element={<OverviewPage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/users' element={<UsersPage />} />
				<Route path='/sales' element={<SalesPage />} />
				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
		</HelmetProvider>
	</div>
  )
}

export default App
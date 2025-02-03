import Header from "../components/common/Header";
import { Helmet } from 'react-helmet-async';

import UsersTable from "../components/users/UsersTable";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";

const UsersPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Helmet>
				<title>Users Page</title>
				<meta name="description" content="歡迎來到 Users Page" />
				<meta name="keywords" content="react, dashboard, users" />
			</Helmet>
			<Header title='Users' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				
				<UsersTable />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
					<UserGrowthChart />
					<UserActivityHeatmap />
				</div>
			</main>
		</div>
	);
};
export default UsersPage;
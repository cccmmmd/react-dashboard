import Header from "../components/common/Header";
import { Helmet } from 'react-helmet-async';

import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";
import Notifications from "../components/settings/Notifications";
import Security from "../components/settings/Security";

const SettingsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Helmet>
				<title>Settings Page</title>
				<meta name="description" content="歡迎來到 Settings Page" />
				<meta name="keywords" content="react, dashboard, settings" />
			</Helmet>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				<Notifications />
				<Security />
				<ConnectedAccounts />
				<DangerZone />
			</main>
		</div>
	);
};
export default SettingsPage;
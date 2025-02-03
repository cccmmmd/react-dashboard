import Header from "../components/common/Header";
import { Helmet } from 'react-helmet-async';

import OverviewCards from "../components/analytics/OverviewCards";
import RevenueChart from "../components/analytics/RevenueChart";
import ChannelPerformance from "../components/analytics/ChannelPerformance";
import ProductPerformance from "../components/analytics/ProductPerformance";
import CustomerSegmentation from "../components/analytics/CustomerSegmentation";
import AIPoweredInsights from "../components/analytics/AIPoweredInsights";

const AnalyticsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Helmet>
				<title>Analytics Page</title>
				<meta name="description" content="歡迎來到 Analytics Page" />
				<meta name="keywords" content="react, dashboard, analytics" />
			</Helmet>
			<Header title={"Analytics Dashboard"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<OverviewCards />
                <AIPoweredInsights />
				<RevenueChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ProductPerformance />
					<CustomerSegmentation />
                    <ChannelPerformance />
				</div>

				
			</main>
		</div>
	);
};
export default AnalyticsPage;
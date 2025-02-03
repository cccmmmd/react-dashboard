import Header from "../components/common/Header";
import { Helmet } from 'react-helmet-async';

import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Helmet>
        <title>Sales Page</title>
        <meta name="description" content="歡迎來到 Sales Page" />
        <meta name="keywords" content="react, dashboard, sales" />
      </Helmet>
      <Header title="Sales Dashboard" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <SalesOverviewChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
};
export default SalesPage;

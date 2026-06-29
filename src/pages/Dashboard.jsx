import DataTable from "../components/DataTable"
import PieChartComponent from "../components/PieChart"
import SalesChart from "../components/SalesChart"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import StatsCard from "../components/StatsCard"

function Dashboard(){
    return(
        <div className="min-h-screen bg-grey-100">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-4 md:p-6 overflow-x-auto">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Analytics Dashboard</h1>
                    <p className="text-gray-500 mt-2">
                        Welcome Back, Sejal</p>    
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 hover:shadow-xl hover:translate-y-1 transition-all duration-300">

                        <StatsCard
                        title="Total Revenue"
                        value="₹1,25,000"
                        color="text-green-600"
                        />

                        <StatsCard
                        title="Users"
                        value="2,350"
                        color="text-blue-600"
                        />

                        <StatsCard
                        title="Orders"
                        value="480"
                        color="text-purple-600"
                        />

                        <StatsCard
                        title="Profit"
                        value="₹42,000"
                        color="text-red-500"
                        />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                        <SalesChart />
                        <PieChartComponent />
                    </div>
                    <DataTable />
                </main>
            </div>
        </div>
    )
}

export default Dashboard
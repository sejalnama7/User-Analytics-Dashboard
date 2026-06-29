import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    } from "recharts";

    import { salesData } from "../data/Data"
    function SalesChart(){
        return(
            <div className="bg-white p-5 rounded-xl shadow-md h-[350px] w-full">
                <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="sales" fill="#2563eb" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }

    export default SalesChart;
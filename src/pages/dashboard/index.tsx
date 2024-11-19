import { Button } from '@/components/ui/button';
import { Search, Bell, ChevronDown, Home, Activity, Cpu, Shield, DollarSign, FileText, Zap, MapPin } from 'lucide-react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Report from './report';
import Topology from './topology';
import Alert from './alert';


const Dashboard = () => {
    const navigate = useNavigate();
    const searchParams = useLocation().search.split('=');
    const query = searchParams[searchParams.length - 1]

    const networkData = [
        { name: 'Jan', value: 400, traffic: 240 },
        { name: 'Feb', value: 300, traffic: 139 },
        { name: 'Mar', value: 200, traffic: 980 },
        { name: 'Apr', value: 278, traffic: 390 },
        { name: 'May', value: 189, traffic: 480 },
        { name: 'Jun', value: 239, traffic: 380 },
        { name: 'Jul', value: 349, traffic: 430 },
    ];

    return (

        query === 'topology'
            ? <Topology />
            : query === 'report'
                ? <Report />
                : query === 'alert'
                    ? <Alert />
                    : <main className="flex-1 p-8">
                        {/* Top Bar */}
                        <div className="flex justify-between items-center mb-8">
                            <div className="relative">
                                <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-full bg-white" />
                                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                            </div>
                            <div className="flex items-center">
                                <Bell className="mr-4 text-gray-600" />
                                <div className="flex items-center">
                                    <img src="/shubhm.jpg" alt="User" className="w-8 h-8 rounded-full mr-2" />
                                    <span className="mr-2">Shubham</span>
                                    <ChevronDown size={18} />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    <Button onClick={() => navigate("/?type=topology")} className='h-8 rounded-md px-3 text-xs'><MapPin className="mr-2 size-4" /> View Topology</Button>
                                    <Button onClick={() => navigate("/?type=alert")} className='h-8 rounded-md px-3 text-xs'><Bell className="mr-2 size-4" /> View Alerts</Button>
                                    <Button onClick={() => navigate("/?type=report")} className='h-8 rounded-md px-3 text-xs'><FileText className="mr-2 size-4" /> Generate Report</Button>
                                </div>
                            </div>

                            {/* Top Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-6 min-w-[200px]">
                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <div className="text-xl font-bold">23.0%</div>
                                    <div className="text-sm text-gray-600">New Vulnerabilities</div>
                                </div>
                                <div className="bg-green-100 p-4 rounded-lg min-w-[200px]">
                                    <div className="text-xl font-bold">23.00%</div>
                                    <div className="text-sm text-gray-600">Monitored Devices</div>
                                </div>
                                <div className="bg-red-100 p-4 rounded-lg min-w-[200px]">
                                    <div className="text-xl font-bold">21.%</div>
                                    <div className="text-sm text-gray-600">Failed Scans</div>
                                </div>
                            </div>
                        </div>

                        {/* Main Dashboard Grid */}
                        <div className="grid grid-cols-3 gap-6">
                            {/* Network Health */}
                            <div className="col-span-2 bg-gray-900 text-white p-6 rounded-lg">
                                <h2 className="text-xl font-bold mb-4">Network Health Overview</h2>
                                <div className="flex justify-between mb-4">
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <Home size={24} />
                                        </div>
                                        <div>Connections</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <Zap size={24} />
                                        </div>
                                        <div>Speed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <Activity size={24} />
                                        </div>
                                        <div>Connected</div>
                                    </div>
                                </div>
                                {/* Placeholder for network topology visualization */}
                                <div className="w-full h-48 bg-gray-800 rounded-lg"></div>
                            </div>

                            {/* Activity Percentage */}
                            <div className="bg-gray-900 text-white p-6 rounded-lg">
                                <h2 className="text-xl font-bold mb-4">Activity</h2>
                                <div className="relative w-32 h-32 mx-auto">
                                    <svg viewBox="0 0 36 36" className="w-full h-full">
                                        <path
                                            d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#444"
                                            strokeWidth="3"
                                        />
                                        <path
                                            d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#4CAF50"
                                            strokeWidth="3"
                                            strokeDasharray="20, 100"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                                        19%
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-white p-6 rounded-lg">
                                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                                <DollarSign className="text-orange-500" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">Start Discovery</div>
                                                <div className="text-sm text-gray-500">Scan network</div>
                                            </div>
                                        </div>
                                        <span className="text-blue-500">Initiate</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                                <FileText className="text-blue-500" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">Generate Report</div>
                                                <div className="text-sm text-gray-500">Network status</div>
                                            </div>
                                        </div>
                                        <span className="text-blue-500">Create</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                                <Activity className="text-purple-500" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">View Alerts</div>
                                                <div className="text-sm text-gray-500">Recent issues</div>
                                            </div>
                                        </div>
                                        <span className="text-blue-500">View</span>
                                    </div>
                                </div>
                            </div>

                            {/* Network Performance Graph */}
                            <div className="col-span-2 bg-white p-6 rounded-lg">
                                <h2 className="text-xl font-bold mb-4">Network Performance</h2>
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={networkData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                                        <Bar dataKey="traffic" fill="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Recent Events */}
                            <div className="bg-white p-6 rounded-lg">
                                <h2 className="text-xl font-bold mb-4">Recent Events</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                                <Bell className="text-red-500" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">Critical Alert</div>
                                                <div className="text-sm text-gray-500">Server down</div>
                                            </div>
                                        </div>
                                        <span className="text-red-500">$2,415.16</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                                <Shield className="text-green-500" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">Security Update</div>
                                                <div className="text-sm text-gray-500">Patch applied</div>
                                            </div>
                                        </div>
                                        <span className="text-green-500">$1,308.93</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                                <Cpu className="text-blue-500" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">New Device</div>
                                                <div className="text-sm text-gray-500">Added to network</div>
                                            </div>
                                        </div>
                                        <span className="text-blue-500">$1,834.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
    );
}

export default Dashboard;
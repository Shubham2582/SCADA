import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Home, Download } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function ReportAnalytics() {
    const networkData = [
        { name: 'Mon', packets: 4000, errors: 240 },
        { name: 'Tue', packets: 3000, errors: 198 },
        { name: 'Wed', packets: 2000, errors: 980 },
        { name: 'Thu', packets: 2780, errors: 308 },
        { name: 'Fri', packets: 1890, errors: 800 },
        { name: 'Sat', packets: 2390, errors: 300 },
        { name: 'Sun', packets: 3490, errors: 150 },
    ];

    const bandwidthData = [
        { name: '00:00', inbound: 4000, outbound: 2400 },
        { name: '04:00', inbound: 3000, outbound: 1398 },
        { name: '08:00', inbound: 2000, outbound: 9800 },
        { name: '12:00', inbound: 2780, outbound: 3908 },
        { name: '16:00', inbound: 1890, outbound: 4800 },
        { name: '20:00', inbound: 2390, outbound: 3800 },
    ];

    const latencyData = [
        { name: 'Router1', value: 20 },
        { name: 'Router2', value: 15 },
        { name: 'Router3', value: 30 },
        { name: 'Router4', value: 25 },
    ];

    const ipVisitsData = [
        { ip: '192.168.1.1', visits: 120 },
        { ip: '192.168.1.2', visits: 80 },
        { ip: '192.168.1.3', visits: 150 },
        { ip: '192.168.1.4', visits: 70 },
        { ip: '192.168.1.5', visits: 200 },
    ];

    return (
        <main className="flex-1 p-8 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Reports and Analytics</h1>
                <Button><Home className="mr-2" /> Home</Button>
            </div>

            <div className="grid grid-cols-2 gap-8">
                {/* Network Analytics */}
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">Network Analytics</h2>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={networkData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="packets" stroke="#8884d8" />
                                <Line type="monotone" dataKey="errors" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Bandwidth Usage */}
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">Bandwidth Usage</h2>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={bandwidthData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="inbound" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="outbound" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Latency */}
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">Latency</h2>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie dataKey="value" data={latencyData} fill="#8884d8" label />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Frequency of IP Visits */}
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">Frequency of IP Visits</h2>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={ipVisitsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="ip" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="visits" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            <Button className="mt-8"><Download className="mr-2" /> Download Full Report</Button>
        </main>
    )
}

export default ReportAnalytics
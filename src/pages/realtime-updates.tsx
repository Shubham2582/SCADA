import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, AlertTriangle, Info, CheckCircle, RefreshCw } from 'lucide-react';

enum TYPE {
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
    SUCCESS = 'success'
}

interface AlertItemProps {
    id: number;
    type: TYPE;
    message: string;
    timestamp: string;
}

const AlertItem = ({ type, message, timestamp }: AlertItemProps) => {
    const icons = {
        error: <AlertTriangle className="w-5 h-5 text-red-500" />,
        warning: <Info className="w-5 h-5 text-yellow-500" />,
        info: <Info className="w-5 h-5 text-blue-500" />,
        success: <CheckCircle className="w-5 h-5 text-green-500" />,
    };

    return (
        <div className="flex items-start space-x-4 p-4 border-b last:border-b-0">
            {icons[type]}
            <div className="flex-1">
                <p className="font-medium">{message}</p>
                <p className="text-sm text-gray-500">{timestamp}</p>
            </div>
            {/* <Badge variant={type}>{type}</Badge> */}
        </div>
    );
};

const RealTimeUpdates = () => {
    const [alerts, setAlerts] = useState([
        { id: 1, type: TYPE.ERROR, message: 'Network device offline: Router-01', timestamp: '2 minutes ago' },
        { id: 2, type: TYPE.WARNING, message: 'High CPU usage detected on Server-03', timestamp: '5 minutes ago' },
        { id: 3, type: TYPE.INFO, message: 'New device connected: Switch-05', timestamp: '10 minutes ago' },
        { id: 4, type: TYPE.SUCCESS, message: 'Firmware update completed on Firewall-02', timestamp: '15 minutes ago' },
    ]);

    const handleRefresh = () => {
        // Simulate fetching new alerts
        const newAlert = {
            id: alerts.length + 1,
            type: TYPE.INFO,
            message: 'Topology map updated',
            timestamp: 'Just now'
        };
        setAlerts([newAlert, ...alerts]);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen w-full">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Real Time Updates</h1>
                    <Button onClick={handleRefresh}>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Refresh
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Bell className="w-5 h-5 mr-2" />
                            Live Alerts
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {alerts.map((alert) => (
                                <AlertItem key={alert.id} id={alert.id} message={alert.message} timestamp={alert.timestamp} type={alert.type} />
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Network Changes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li>• New device added: Printer-02</li>
                                <li>• IP address changed: Server-01</li>
                                <li>• VLAN configuration updated</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Performance Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li>• Avg. Network Latency: 15ms</li>
                                <li>• Bandwidth Utilization: 68%</li>
                                <li>• Packet Loss Rate: 0.02%</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default RealTimeUpdates;
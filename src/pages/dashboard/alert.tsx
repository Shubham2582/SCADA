import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Home, Bell, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Alert = () => {
    const navigate = useNavigate();
    const alerts = [
        { id: 1, severity: 'High', message: 'CPU usage exceeds 90% on Router-01', timestamp: '2024-06-15 14:30:00' },
        { id: 2, severity: 'Medium', message: 'Memory usage above 80% on Switch-03', timestamp: '2024-06-15 13:45:00' },
        { id: 3, severity: 'Low', message: 'New device detected: Firewall-02', timestamp: '2024-06-15 12:15:00' },
      ];
    
    return (
        <main className="flex-1 p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Network Alerts</h1>
                <Button onClick={()=> navigate('/')}><Home className="mr-2" /> Home</Button>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Active Alerts</h2>
                        <Button><Bell className="mr-2" /> Mark All as Read</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {alerts.map(alert => (
                            <li key={alert.id} className="border-b pb-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className={`inline-block px-2 py-1 rounded text-white text-sm font-semibold mb-2 ${alert.severity === 'High' ? 'bg-red-500' :
                                                alert.severity === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500'
                                            }`}>
                                            {alert.severity}
                                        </span>
                                        <p className="font-semibold">{alert.message}</p>
                                        <p className="text-sm text-gray-500">{alert.timestamp}</p>
                                    </div>
                                    <Button size="sm"><CheckCircle size={18} className="mr-2" /> Acknowledge</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </main>
    )
}

export default Alert;
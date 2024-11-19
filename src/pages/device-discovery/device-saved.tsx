import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Search, RefreshCw, Plus, Edit, Trash2 } from 'lucide-react';

const DeviceSaved = () => {
    const [isDiscovering, setIsDiscovering] = useState(false);
    const [discoveryProgress, setDiscoveryProgress] = useState(0);
    const [devices, setDevices] = useState([
        { id: 1, name: 'Router-01', ip: '192.168.1.1', type: 'Router', status: 'Online' },
        { id: 2, name: 'Switch-02', ip: '192.168.1.2', type: 'Switch', status: 'Online' },
        { id: 3, name: 'Firewall-01', ip: '192.168.1.3', type: 'Firewall', status: 'Offline' },
        { id: 4, name: 'Server-01', ip: '192.168.1.4', type: 'Server', status: 'Online' },
    ]);

    const handleStartDiscovery = () => {
        setIsDiscovering(true);
        setDiscoveryProgress(0);
        // Simulate discovery process
        const interval = setInterval(() => {
            setDiscoveryProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    setIsDiscovering(false);
                    return 100;
                }
                return prevProgress + 10;
            });
        }, 500);
    };

    const handleAddDevice = () => {
        // Implement add device logic
        console.log('Adding new device');
    };

    const handleEditDevice = (id) => {
        // Implement edit device logic
        console.log('Editing device', id);
    };

    const handleDeleteDevice = (id) => {
        // Implement delete device logic
        console.log('Deleting device', id);
    };

    return (
        <main className="p-8 flex-1 w-full">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Device Discovery</h1>
                    <Button onClick={handleStartDiscovery} disabled={isDiscovering}>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        {isDiscovering ? 'Discovering...' : 'Start Discovery'}
                    </Button>
                </div>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Discovery Configuration</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">IP Range Start</label>
                                <Input type="text" placeholder="e.g. 192.168.1.1" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">IP Range End</label>
                                <Input type="text" placeholder="e.g. 192.168.1.254" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {isDiscovering && (
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Discovery Progress</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Progress value={discoveryProgress} className="w-full" />
                            <p className="text-center mt-2">{discoveryProgress}% Complete</p>
                        </CardContent>
                    </Card>
                )}

                <Card>
                    <CardHeader>
                        <CardTitle>Discovered Devices</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between items-center mb-4">
                            <div className="relative w-64">
                                <Input type="text" placeholder="Search devices..." className="pl-10" />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                            <Button onClick={handleAddDevice}>
                                <Plus className="w-4 h-4 mr-2" />
                                Add Device
                            </Button>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>IP Address</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {devices.map((device) => (
                                    <TableRow key={device.id}>
                                        <TableCell>{device.name}</TableCell>
                                        <TableCell>{device.ip}</TableCell>
                                        <TableCell>{device.type}</TableCell>
                                        <TableCell>
                                            <span className={`px-2 py-1 rounded-full text-xs ${device.status === 'Online' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                                                }`}>
                                                {device.status}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="ghost" size="sm" onClick={() => handleEditDevice(device.id)}>
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="sm" onClick={() => handleDeleteDevice(device.id)}>
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
};

export default DeviceSaved;
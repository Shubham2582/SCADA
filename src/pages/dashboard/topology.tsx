import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Home, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Topology = () => {
    const [zoomLevel, setZoomLevel] = useState(100);
    const navigate = useNavigate();

    return (
        <main className="flex-1 p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Network Topology</h1>
                <Button onClick={() => navigate("/")}><Home className="mr-2" /> Home</Button>
            </div>

            <Card className="mb-8">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Topology Map</h2>
                        <div>
                            <Button onClick={() => setZoomLevel(zoomLevel + 10)} className="mr-2"><ZoomIn size={18} /></Button>
                            <Button onClick={() => setZoomLevel(zoomLevel - 10)}><ZoomOut size={18} /></Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="border-2 border-dashed border-gray-300 flex items-center justify-center">
                        <img src="/topology.jpeg" alt="map" className='h-full w-full rounded-md' />
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">Network Statistics</h2>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li>Total Devices: 42</li>
                            <li>Routers: 12</li>
                            <li>Switches: 24</li>
                            <li>Firewalls: 6</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-semibold">Device Details</h2>
                    </CardHeader>
                    <CardContent>
                        <p>Click on a device in the topology map to view its details here.</p>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

export default Topology
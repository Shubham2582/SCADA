import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Database, Play, Pause, RotateCw, Save } from 'lucide-react';

const SavedConfig = () => {
    const [isCollecting, setIsCollecting] = useState(false);
    const [collectionInterval, setCollectionInterval] = useState(5);
    const [selectedProtocols, setSelectedProtocols] = useState(['SNMPv3']);

    const handleToggleCollection = () => {
        setIsCollecting(!isCollecting);
    };

    const handleSaveConfig = () => {
        console.log('Saving configuration...');
        // Implement save logic here
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen w-full">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Data Collection</h1>
                    <Button onClick={handleToggleCollection} variant={isCollecting ? "destructive" : "default"}>
                        {isCollecting ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                        {isCollecting ? 'Stop Collection' : 'Start Collection'}
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Database className="w-5 h-5 mr-2" />
                                Collection Configuration
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Collection Interval (minutes)</label>
                                    <Input
                                        type="number"
                                        value={collectionInterval}
                                        onChange={(e) => setCollectionInterval(Number(e.target.value))}
                                        min="1"
                                        max="60"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Protocols</label>
                                    <Select
                                        multiple
                                        value={selectedProtocols}
                                        onChange={(e) => setSelectedProtocols(Array.from(e.target.selectedOptions, option => option.value))}
                                    >
                                        <option value="SNMPv3">SNMPv3</option>
                                        <option value="EIGRP">EIGRP</option>
                                        <option value="NetFlow">NetFlow</option>
                                        <option value="Syslog">Syslog</option>
                                    </Select>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Enable Real-time Updates</span>
                                    <Switch />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Collection Status</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span>Status:</span>
                                    <span className={`font-bold ${isCollecting ? 'text-green-500' : 'text-red-500'}`}>
                                        {isCollecting ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Last Collection:</span>
                                    <span>2023-09-16 14:30:00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Next Collection:</span>
                                    <span>{isCollecting ? '2023-09-16 14:35:00' : 'N/A'}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Devices Scanned:</span>
                                    <span>127</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Data Points Collected:</span>
                                    <span>15,234</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Recent Collection Logs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li>• [2023-09-16 14:30:00] Collection completed successfully</li>
                            <li>• [2023-09-16 14:25:00] Started collection on 127 devices</li>
                            <li>• [2023-09-16 14:20:00] Updated EIGRP routing tables</li>
                            <li>• [2023-09-16 14:15:00] Received NetFlow data from core switches</li>
                        </ul>
                    </CardContent>
                </Card>

                <div className="flex justify-end mt-6 space-x-4">
                    <Button variant="outline" onClick={() => console.log('Resetting...')}>
                        <RotateCw className="w-4 h-4 mr-2" />
                        Reset Configuration
                    </Button>
                    <Button onClick={handleSaveConfig}>
                        <Save className="w-4 h-4 mr-2" />
                        Save Configuration
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SavedConfig;
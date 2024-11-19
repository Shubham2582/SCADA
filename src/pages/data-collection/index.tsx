import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Home, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Config() {
    const navigate = useNavigate();
    const [snmpConfig, setSnmpConfig] = useState({
        username: '',
        password: '',
        authProtocol: '',
        encryptionProtocol: '',
        port: '161'
    });

    const [ipRange, setIpRange] = useState({
        startIp: '',
        endIp: ''
    });

    const [pollingFrequency, setPollingFrequency] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('SNMP Config:', snmpConfig);
        console.log('IP Range:', ipRange);
        console.log('Polling Frequency:', pollingFrequency);
        navigate("/data-collection/saved")
        // Here you would typically send this data to your backend
    };

    return (
        <main className="flex-1 p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Data Collection Configuration</h1>
                <Button><Home className="mr-2" /> Home</Button>
            </div>

            <form onSubmit={handleSubmit} className='pb-5'>
                <Card className="mb-8">
                    <CardHeader>
                        <h2 className="text-xl font-semibold">SNMPv3 Credentials</h2>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2">Username</label>
                                <Input
                                    type="text"
                                    value={snmpConfig.username}
                                    onChange={(e) => setSnmpConfig({ ...snmpConfig, username: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Password</label>
                                <Input
                                    type="password"
                                    value={snmpConfig.password}
                                    onChange={(e) => setSnmpConfig({ ...snmpConfig, password: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Authentication Protocol</label>
                                <Select onValueChange={(value) => setSnmpConfig({ ...snmpConfig, authProtocol: value })}
                                    required>
                                    <SelectTrigger>Select Protocol</SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='md5'>MD5</SelectItem>
                                        <SelectItem value='sha'>SHA</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="block mb-2">Encryption Protocol</label>
                                <Select onValueChange={(value) => setSnmpConfig({ ...snmpConfig, encryptionProtocol: value })}
                                    required>
                                    <SelectTrigger>Select Protocol</SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='DES'>DES</SelectItem>
                                        <SelectItem value='AES'>AES</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="block mb-2">Port</label>
                                <Input
                                    type="number"
                                    value={snmpConfig.port}
                                    onChange={(e) => setSnmpConfig({ ...snmpConfig, port: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="mb-8">
                    <CardHeader>
                        <h2 className="text-xl font-semibold">Device IP Range</h2>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2">Start IP</label>
                                <Input
                                    type="text"
                                    value={ipRange.startIp}
                                    onChange={(e) => setIpRange({ ...ipRange, startIp: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2">End IP</label>
                                <Input
                                    type="text"
                                    value={ipRange.endIp}
                                    onChange={(e) => setIpRange({ ...ipRange, endIp: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="mb-8">
                    <CardHeader>
                        <h2 className="text-xl font-semibold">Polling Frequency</h2>
                    </CardHeader>
                    <CardContent>
                        <Select onValueChange={(value) => setPollingFrequency(value)}
                            required>
                            <SelectTrigger>Select Frequency</SelectTrigger>
                            <SelectContent>
                            <SelectItem value="hourly">Hourly</SelectItem>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardContent>
                </Card>
                <Button type="submit"><Save className="mr-2" /> Save Configuration</Button>
            </form>
        </main>
    );
};
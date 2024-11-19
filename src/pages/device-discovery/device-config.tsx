import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectItem, SelectContent, SelectTrigger } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Home, Save, Plus, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DeviceConfig = () => {
    const [ipRanges, setIpRanges] = useState([{ startIp: '', endIp: '' }]);
    const [eigrpKey, setEigrpKey] = useState({ keyId: '', keyString: '' });
    const [neighbourRelationships, setNeighbourRelationships] = useState([
        { neighbourIp: '', holdTime: '', authMode: '' }
    ]);
    const navigate = useNavigate();
    const [fingerprint, setFingerprint] = useState({
        os: [],
        deviceType: []
    });

    const handleAddIpRange = () => {
        setIpRanges([...ipRanges, { startIp: '', endIp: '' }]);
    };

    const handleRemoveIpRange = (index: number) => {
        const newRanges = ipRanges.filter((_, i) => i !== index);
        setIpRanges(newRanges);
    };

    const handleAddNeighbour = () => {
        setNeighbourRelationships([...neighbourRelationships, { neighbourIp: '', holdTime: '', authMode: '' }]);
    };

    const handleRemoveNeighbour = (index: number) => {
        const newNeighbours = neighbourRelationships.filter((_, i) => i !== index);
        setNeighbourRelationships(newNeighbours);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('IP Ranges:', ipRanges);
        console.log('EIGRP Key:', eigrpKey);
        console.log('Neighbour Relationships:', neighbourRelationships);
        console.log('Fingerprint:', fingerprint);
        navigate("/device-discovery/saved");
        // Here you would typically send this data to your backend
    };

    return (
        <main className="p-8 flex-1 w-full">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Device Discovery Configuiration</h1>
                <Button><Home className="mr-2" /> Home</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <Card className="mb-8">
                    <CardHeader>
                        <h2 className="text-xl font-semibold">IP Ranges</h2>
                    </CardHeader>
                    <CardContent>
                        {ipRanges.map((range, index) => (
                            <div key={index} className="flex mb-4 space-x-4">
                                <Input
                                    placeholder="Start IP"
                                    value={range.startIp}
                                    onChange={(e) => {
                                        const newRanges = [...ipRanges];
                                        newRanges[index].startIp = e.target.value;
                                        setIpRanges(newRanges);
                                    }}
                                />
                                <Input
                                    placeholder="End IP"
                                    value={range.endIp}
                                    onChange={(e) => {
                                        const newRanges = [...ipRanges];
                                        newRanges[index].endIp = e.target.value;
                                        setIpRanges(newRanges);
                                    }}
                                />
                                <Button type="button" onClick={() => handleRemoveIpRange(index)} variant="destructive"><Trash size={18} /></Button>
                            </div>
                        ))}
                        <Button type="button" onClick={handleAddIpRange}><Plus size={18} className="mr-2" /> Add IP Range</Button>
                    </CardContent>
                </Card>

                <Card className="mb-8">
                    <CardHeader>
                        <h2 className="text-xl font-semibold">EIGRP Parameters</h2>
                    </CardHeader>
                    <CardContent>
                        <h3 className="text-lg font-semibold mb-4">EIGRP Key</h3>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <Input
                                placeholder="Key ID"
                                value={eigrpKey.keyId}
                                onChange={(e) => setEigrpKey({ ...eigrpKey, keyId: e.target.value })}
                            />
                            <Input
                                placeholder="Key String"
                                value={eigrpKey.keyString}
                                onChange={(e) => setEigrpKey({ ...eigrpKey, keyString: e.target.value })}
                            />
                        </div>

                        <h3 className="text-lg font-semibold mb-4">Neighbour Relationship Key</h3>
                        {neighbourRelationships.map((neighbour, index) => (
                            <div key={index} className="grid grid-cols-3 gap-4 mb-4">
                                <Input
                                    placeholder="Neighbour IP"
                                    value={neighbour.neighbourIp}
                                    onChange={(e) => {
                                        const newNeighbours = [...neighbourRelationships];
                                        newNeighbours[index].neighbourIp = e.target.value;
                                        setNeighbourRelationships(newNeighbours);
                                    }}
                                />
                                <Input
                                    placeholder="Hold Time"
                                    value={neighbour.holdTime}
                                    onChange={(e) => {
                                        const newNeighbours = [...neighbourRelationships];
                                        newNeighbours[index].holdTime = e.target.value;
                                        setNeighbourRelationships(newNeighbours);
                                    }}
                                />
                                <Select
                                    value={neighbour.authMode}
                                    onValueChange={(value) => {
                                        const newNeighbours = [...neighbourRelationships];
                                        newNeighbours[index].authMode = value;
                                        setNeighbourRelationships(newNeighbours);
                                    }}
                                >
                                    <SelectTrigger>Select Auth Mode</SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="md5">MD5</SelectItem>
                                        <SelectItem value="sha">SHA</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Button type="button" onClick={() => handleRemoveNeighbour(index)} variant='destructive' className='w-fit'><Trash size={18} /></Button>
                            </div>
                        ))}
                        <Button type="button" onClick={handleAddNeighbour}><Plus size={18} className="mr-2" /> Add Neighbour</Button>
                    </CardContent>
                </Card>

                <Card className="mb-8">
                    <CardHeader>
                        <h2 className="text-xl font-semibold">Fingerprint Options</h2>
                    </CardHeader>
                    <CardContent>
                        <h3 className="text-lg font-semibold mb-4">Operating Systems</h3>
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {['Windows', 'Linux', 'macOS', 'iOS', 'Android', 'Cisco IOS'].map((os) => (
                                <div key={os} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={os}
                                        checked={fingerprint.os.includes(os)}
                                        onCheckedChange={(checked) => {
                                            if (checked) {
                                                setFingerprint({ ...fingerprint, os: [...fingerprint.os, os] });
                                            } else {
                                                setFingerprint({ ...fingerprint, os: fingerprint.os.filter(item => item !== os) });
                                            }
                                        }}
                                    />
                                    <label htmlFor={os}>{os}</label>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-lg font-semibold mb-4">Device Types</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {['Router', 'Switch', 'Firewall', 'Server', 'Workstation', 'IoT Device'].map((type) => (
                                <div key={type} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={type}
                                        checked={fingerprint.deviceType.includes(type)}
                                        onCheckedChange={(checked) => {
                                            if (checked) {
                                                setFingerprint({ ...fingerprint, deviceType: [...fingerprint.deviceType, type] });
                                            } else {
                                                setFingerprint({ ...fingerprint, deviceType: fingerprint.deviceType.filter(item => item !== type) });
                                            }
                                        }}
                                    />
                                    <label htmlFor={type}>{type}</label>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Button type="submit" className='mb-4'><Save className="mr-2" /> Save Configuration</Button>
            </form>
        </main>
    );
};
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Home, FileText, Download } from 'lucide-react';
import { Select, SelectItem, SelectContent, SelectTrigger } from '@/components/ui/select';
import { DatePicker } from '@/components/ui/date-picker';
import { useNavigate } from 'react-router-dom';

const Report = () => {
    const navigate = useNavigate();
    const [reportType, setReportType] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <main className="flex-1 p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Generate Report</h1>
                <Button onClick={()=> navigate('/')}><Home className="mr-2" /> Home</Button>
            </div>

            <Card className="mb-8">
                <CardHeader>
                    <h2 className="text-xl font-semibold">Report Configuration</h2>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-2">Report Type</label>
                            <Select
                                value={reportType}
                                onValueChange={(value) => setReportType(value)}
                            >
                                <SelectTrigger>Select a report type</SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="network_performance">Network Performance</SelectItem>
                                    <SelectItem value="security_audit">Security Audit</SelectItem>
                                    <SelectItem value="topology_changes">Topology Changes</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2">Start Date</label>
                                <DatePicker
                                />
                            </div>
                            <div>
                                <label className="block mb-2">End Date</label>
                                <DatePicker
                                />
                            </div>
                        </div>
                        <Button type="submit" className="w-full"><FileText className="mr-2" /> Generate Report</Button>
                    </form>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <h2 className="text-xl font-semibold">Recent Reports</h2>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                            <span>Network Performance Report - June 2024</span>
                            <Button size="sm"><Download size={18} className="mr-2" /> Download</Button>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Security Audit Report - May 2024</span>
                            <Button size="sm"><Download size={18} className="mr-2" /> Download</Button>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Topology Changes Report - Q2 2024</span>
                            <Button size="sm"><Download size={18} className="mr-2" /> Download</Button>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </main>)
}

export default Report
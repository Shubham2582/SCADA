import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Download, Eye, Trash2, Calendar } from 'lucide-react';

const GenerateReportSection = () => {
    const [reportType, setReportType] = useState('network-summary');
    const [dateRange, setDateRange] = useState('last-7-days');
    const [includeCharts, setIncludeCharts] = useState(true);
    const [generatedReports, setGeneratedReports] = useState([
        { id: 1, name: 'Network Summary Report', type: 'Network Summary', date: '2023-09-15', status: 'Completed' },
        { id: 2, name: 'Security Audit Report', type: 'Security Audit', date: '2023-09-14', status: 'Completed' },
        { id: 3, name: 'Performance Analysis', type: 'Performance', date: '2023-09-13', status: 'In Progress' },
    ]);

    const handleGenerateReport = () => {
        console.log('Generating report with:', { reportType, dateRange, includeCharts });
        // Implement report generation logic here
    };

    const handleDownloadReport = (id) => {
        console.log('Downloading report:', id);
        // Implement report download logic here
    };

    const handleViewReport = (id) => {
        console.log('Viewing report:', id);
        // Implement report viewing logic here
    };

    const handleDeleteReport = (id) => {
        console.log('Deleting report:', id);
        // Implement report deletion logic here
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen w-full">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Generate Report</h1>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Report Configuration</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Report Type</label>
                                <Select value={reportType} onChange={(e) => setReportType(e.target.value)}>
                                    <option value="network-summary">Network Summary</option>
                                    <option value="security-audit">Security Audit</option>
                                    <option value="performance-analysis">Performance Analysis</option>
                                    <option value="device-inventory">Device Inventory</option>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Date Range</label>
                                <Select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
                                    <option value="last-24-hours">Last 24 Hours</option>
                                    <option value="last-7-days">Last 7 Days</option>
                                    <option value="last-30-days">Last 30 Days</option>
                                    <option value="custom">Custom Range</option>
                                </Select>
                            </div>
                        </div>
                        {dateRange === 'custom' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Start Date</label>
                                    <Input type="date" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">End Date</label>
                                    <Input type="date" />
                                </div>
                            </div>
                        )}
                        <div className="flex items-center space-x-2">
                            <Checkbox id="includeCharts" checked={includeCharts} onCheckedChange={setIncludeCharts} />
                            <label htmlFor="includeCharts" className="text-sm font-medium">
                                Include charts and graphs
                            </label>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end mb-6">
                    <Button onClick={handleGenerateReport}>
                        <FileText className="w-4 h-4 mr-2" />
                        Generate Report
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Generated Reports</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Report Name</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Date Generated</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {generatedReports.map((report) => (
                                    <TableRow key={report.id}>
                                        <TableCell>{report.name}</TableCell>
                                        <TableCell>{report.type}</TableCell>
                                        <TableCell>{report.date}</TableCell>
                                        <TableCell>
                                            <span className={`px-2 py-1 rounded-full text-xs ${report.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                                                }`}>
                                                {report.status}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="ghost" size="sm" onClick={() => handleDownloadReport(report.id)}>
                                                <Download className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="sm" onClick={() => handleViewReport(report.id)}>
                                                <Eye className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="sm" onClick={() => handleDeleteReport(report.id)}>
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
        </div>
    );
};

export default GenerateReportSection;
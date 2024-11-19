import { Home, Map, Activity, Database, Cpu, Shield, FileText, ChartLine } from 'lucide-react';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from '@/pages/dashboard';
import Topology from '@/pages/topology';
import RealTimeUpdates from '@/pages/realtime-updates';
import GenerateReportSection from '@/pages/generate-result';
import Config from '@/pages/data-collection';
import SavedConfig from '@/pages/data-collection/saved-config';
import { DeviceConfig } from '@/pages/device-discovery/device-config';
import DeviceSaved from '@/pages/device-discovery/device-saved';
import ReportAnalytics from '@/pages/report-analytics';
import Security from '@/pages/security';


const App = () => {
  return (
    <div className="flex bg-gray-100 h-screen overflow-y-auto">
      {/* Left Sidebar */}
      <aside className="sticky left-0 top-0 w-64 bg-gray-900 text-white p-6 h-screen min-w-[280px]">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-xl font-bold">NetSecure</span>
        </div>
        <nav>
          <Link to="/" className="flex items-center py-2 px-4 bg-gray-800 rounded mb-2">
            <Home className="mr-2" size={18} />
            Dashboard
          </Link>
          <Link to="/topology" className="flex items-center py-2 px-4 hover:bg-gray-800 rounded mb-2">
            <Map className="mr-2" size={18} />
            Topology Mapping
          </Link>
          <Link to="realtime" className="flex items-center py-2 px-4 hover:bg-gray-800 rounded mb-2">
            <Activity className="mr-2" size={18} />
            Real-Time Updates
          </Link>
          <Link to="data-collection/config" className="flex items-center py-2 px-4 hover:bg-gray-800 rounded mb-2">
            <Database className="mr-2" size={18} />
            Data Collection
          </Link>
          <Link to="device-discovery/config" className="flex items-center py-2 px-4 hover:bg-gray-800 rounded mb-2">
            <Cpu className="mr-2" size={18} />
            Device Discovery
          </Link>
          <Link to="security" className="flex items-center py-2 px-4 hover:bg-gray-800 rounded mb-2">
            <Shield className="mr-2" size={18} />
            Security & Access
          </Link>
          <Link to="generate-report" className="flex items-center py-2 px-4 hover:bg-gray-800 rounded mb-2">
            <FileText className="mr-2" size={18} />
            Generate Report
          </Link>
          <Link to="report-analytics" className="flex items-center py-2 px-4 hover:bg-gray-800 rounded mb-2">
            <ChartLine className="mr-2" size={18} />
            Reports and Analytics
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {/* <Route path='/' element={<Dashboard2 />} /> */}
        <Route path='/topology' element={<Topology />} />
        <Route path='/realtime' element={<RealTimeUpdates />} />
        <Route path='/data-collection'>
          <Route path='/data-collection/config' element={<Config />} />
          <Route path='/data-collection/saved' element={<SavedConfig />} />
        </Route>
        <Route path='/device-discovery'>
          <Route path='/device-discovery/config' element={<DeviceConfig />} />
          <Route path='/device-discovery/saved' element={<DeviceSaved />} />
        </Route>
        <Route path='/security' element={<Security />} />
        <Route path='/generate-report' element={<GenerateReportSection />} />
        <Route path='/report-analytics' element={<ReportAnalytics />} />
      </Routes>
    </div>
  );
};

export default App;
import { useState } from 'react';
import { Search, Bell, ChevronDown, ZoomIn, ZoomOut, Filter, RefreshCw } from 'lucide-react';

// Placeholder for a network topology visualization library
const NetworkTopology = () => (
    <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center text-white">
        <img src="/topology.jpeg" alt="map" className='h-full w-full rounded-md' />
    </div>
);

const Topology = () => {
    const [selectedNode, setSelectedNode] = useState(null);

    return (
        <main className="flex-1 p-8">
            {/* Top Bar - same as Dashboard */}
            <div className="flex justify-between items-center mb-8">
                <div className="relative">
                    <input type="text" placeholder="Search devices..." className="pl-10 pr-4 py-2 rounded-full bg-white" />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
                <div className="flex items-center">
                    <Bell className="mr-4 text-gray-600" />
                    <div className="flex items-center">
                        <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full mr-2" />
                        <span className="mr-2">Albert</span>
                        <ChevronDown size={18} />
                    </div>
                </div>
            </div>

            <h1 className="text-3xl font-bold mb-6">Topology Mapping</h1>

            {/* Topology Controls */}
            <div className="bg-white p-4 rounded-lg mb-6 flex justify-between items-center">
                <div className="flex space-x-4">
                    <button className="p-2 bg-gray-200 rounded-full"><ZoomIn size={20} /></button>
                    <button className="p-2 bg-gray-200 rounded-full"><ZoomOut size={20} /></button>
                    <button className="p-2 bg-gray-200 rounded-full"><Filter size={20} /></button>
                </div>
                <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg">
                    <RefreshCw size={18} className="mr-2" /> Refresh Topology
                </button>
            </div>

            {/* Main Topology View */}
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 bg-white p-6 rounded-lg" style={{ height: '600px' }}>
                    <h2 className="text-xl font-bold mb-4">Network Topology</h2>
                    <NetworkTopology />
                </div>

                {/* Sidebar for Node Details and Statistics */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Node Details</h2>
                        {selectedNode ? (
                            <div>
                                <p><strong>Name:</strong> {selectedNode.name}</p>
                                <p><strong>IP:</strong> {selectedNode.ip}</p>
                                <p><strong>Type:</strong> {selectedNode.type}</p>
                                <p><strong>Status:</strong> {selectedNode.status}</p>
                            </div>
                        ) : (
                            <p>Select a node to view details</p>
                        )}
                    </div>
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Network Statistics</h2>
                        <ul className="space-y-2">
                            <li>Total Nodes: 145</li>
                            <li>Active Connections: 287</li>
                            <li>Alerts: 3</li>
                            <li>Last Updated: 2 mins ago</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Topology;
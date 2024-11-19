
import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Home } from 'lucide-react';

const Security = () => {
    const [users, setUsers] = useState([
        { id: 1, username: 'admin', role: 'Super User', active: true },
        { id: 2, username: 'operator', role: 'Normal User', active: true },
    ]);


    const [newUser, setNewUser] = useState({ username: '', role: '', password: '' });

    const handleAddUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUsers([...users, { ...newUser, id: users.length + 1, active: true }]);
        setNewUser({ username: '', role: '', password: '' });
    };

    return (
        <main className="flex-1 p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Security & Access Management</h1>
                <Button><Home className="mr-2" /> Home</Button>
            </div>

            <Card className="mb-8">
                <CardHeader>
                    <h2 className="text-xl font-semibold">User Management</h2>
                </CardHeader>
                <CardContent>
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left">Username</th>
                                <th className="p-2 text-left">Role</th>
                                <th className="p-2 text-left">Status</th>
                                <th className="p-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="border-b">
                                    <td className="p-2">{user.username}</td>
                                    <td className="p-2">{user.role}</td>
                                    <td className="p-2">
                                        <Switch checked={user.active} />
                                    </td>
                                    <td className="p-2">
                                        <Button size="sm">Edit</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <h2 className="text-xl font-semibold">Add New User</h2>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleAddUser} className="space-y-4">
                        <div>
                            <label className="block mb-2">Username</label>
                            <Input
                                type="text"
                                value={newUser.username}
                                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Role</label>
                            <Select
                                value={newUser.role}
                                onValueChange={(value) => setNewUser({ ...newUser, role: value })}
                                required
                            >
                                <SelectTrigger>Select a role</SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Super User">Super User</SelectItem>
                                    <SelectItem value="Normal User">Normal User</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label className="block mb-2">Password</label>
                            <Input
                                type="password"
                                value={newUser.password}
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                required
                            />
                        </div>
                        <Button type="submit">Add User</Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}

export default Security
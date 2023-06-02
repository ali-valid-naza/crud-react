import { useState } from "react";
import AddUserForm from "./form/AddUserForm";
import EditUserForm from "./form/EditUserForm";
import UserTable from "./table/UserTable";
import { User } from './types/user';

export default function App() {
    const userData: User[] = [
        {id: 1, name: "1", username: "11"},
        {id: 2, name: "2", username: "22"},
        {id: 3, name: "3", username: "33"}
    ];
    const [users, setUsers] = useState(userData);

    const addUser = (user: User) => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };
    const deleteUser = (id: number) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const initialForm = {id: null, name: "", username: ""};
    const [currentUser, setCurrentUser] = useState(initialForm);
    const [editing, setEditing] = useState(false);

    const updateUser = (id: number, updateUser: User) => {
        setEditing(false);
        setUsers(users.map((user) => (user.id === id ? updateUser : user)));
    };
    const editRow = (user: User) => {
        setEditing(true);
        setCurrentUser({id: user.id, name: user.name, username: user.username});
    };
    return (
        <div className="App">
            <h1> CRUD </h1>
            <div>
                <div>
                    { editing ? (
                        <div>
                            <h5>Edit</h5>
                            <EditUserForm
                                editing={ editing }
                                setEditing={ setEditing }
                                currentUser={ currentUser }
                                updateUser={ updateUser }
                            />
                        </div>
                    ) : (
                        <div>
                            <h5>Add</h5>
                            <AddUserForm addUser={ addUser }/>
                        </div>
                    ) }
                </div>
                <div>
                    <h3> View User </h3>
                    <UserTable users={ users } deleteUser={ deleteUser } editRow={ editRow }/>
                </div>
            </div>
        </div>
    );
}

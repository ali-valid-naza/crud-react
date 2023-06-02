import { User } from '../types/user';

const UserTable = (props: any) => {
    console.log(props);
    return (
        <table>
            <thead>
            <tr>
                <th> Id</th>
                <th> UserName</th>
                <th> Action</th>
            </tr>
            </thead>
            <tbody>
            { props.users?.length > 0 ? (
                props.users.map((user: User) => {
                    return (
                        <tr key={ user.id }>
                            <td> { user.id } </td>
                            <td> { user.username } </td>
                            <td>
                                <button onClick={ () => props.editRow(user) }>Edit</button>
                                <button onClick={ () => props.deleteUser(user.id) }>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })
            ) : (
                <tr>
                    <td>No User</td>
                    { " " }
                </tr>
            ) }
            </tbody>
        </table>
    );
};

export default UserTable;

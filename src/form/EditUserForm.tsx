import { useEffect, useState } from "react";

const EditUserForm = (props: any) => {
    const [user, setUser] = useState(props.currentUser);
    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                props.updateUser(user.id, user);
            }}
        >
            <label> Name </label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
            />
            <br /> <label> UserName </label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
            />
            <br />
            <button> Update User </button>
            <button onClick={() => props.setEditing(false)}> cancel </button>
        </form>
    );
};

export default EditUserForm;

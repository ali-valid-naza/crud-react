import { useState } from "react";

const AddUserForm = (props: any) => {
    const initialFormState = {id: null, name: "", username: ""};
    const [user, setUser] = useState(initialFormState);
    const handleInputChange = (event: any) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    };
    return (
        <form
            onSubmit={ (event) => {
                event.preventDefault();
                props.addUser(user);
                setUser(initialFormState);
            } }
        >
            <label> Name </label>
            <input
                type="text"
                name="name"
                value={ user.name }
                onChange={ handleInputChange }
            />
            <br/> <label> UserName </label>
            <input
                type="text"
                name="username"
                value={ user.username }
                onChange={ handleInputChange }
            />
            <br/>
            <button> Add User</button>
        </form>
    );
};

export default AddUserForm;

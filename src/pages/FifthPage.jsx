import React, { useReducer } from 'react';

const initialState = {
    users: [],
    form: { name: '', email: '' },
};

// Actions
const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const UPDATE_FORM = 'UPDATE_FORM';
const RESET_FORM = 'RESET_FORM';

// Reducer function
function reducer(state, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
                form: initialState.form,
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user, index) => index !== action.payload),
            };
        case UPDATE_FORM:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.field]: action.payload.value,
                },
            };
        case RESET_FORM:
            return {
                ...state,
                form: initialState.form,
            };
        default:
            return state;
    }
}

function UserForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInputChange = (e) => {
        dispatch({
            type: UPDATE_FORM,
            payload: { field: e.target.name, value: e.target.value },
        });
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_USER,
            payload: { name: state.form.name, email: state.form.email },
        });
    };

    const handleDeleteUser = (index) => {
        dispatch({ type: DELETE_USER, payload: index });
    };

    const handleResetForm = () => {
        dispatch({ type: RESET_FORM });
    };

    return (
        <div>
            <h2>User List</h2>
            <form onSubmit={handleAddUser}>
                <input
                    type="text"
                    name="name"
                    value={state.form.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={state.form.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                />
                <button type="submit">Add User</button>
                <button type="button" onClick={handleResetForm}>Reset</button>
            </form>

            <ul>
                {state.users.map((user, index) => (
                    <li key={index}>
                        {user.name} ({user.email})
                        <button onClick={() => handleDeleteUser(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserForm;

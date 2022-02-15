import React, {useState, useEffect} from 'react'

export const UserCombo = ({changeItem}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
         fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
            setUsers(data);
        }, 
        (error) => {
           console.log('error in user components', error)
        })
    }
    return (
        <select className="form-control" onChange={(event) => changeItem(event.target.value)}>
                            <option>انتخاب کنید</option>
                            {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                      </select>
    )
}

import React, { useEffect, useState } from 'react';
import Loading from '../../custom-components/Loading';
import PostInfo from './PostInfo';

const UserPost = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    console.log(posts)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        const urlApi = 'https://jsonplaceholder.typicode.com/users';
        fetch(urlApi)
            .then((response) => response.json())
            .then(
                (data) => {
                    setUsers(data);
                },
                (error) => {
                    alert('error....');
                },
            );
    };

    const handelChang = (event) => {
        setIsLoading(true);
        const idUser = event.target.value;
        const urlApi = `https://jsonplaceholder.typicode.com/posts?userId=${idUser}`;
        fetch(urlApi)
            .then((response) => response.json())
            .then(
                (data) => {
                    setPosts(data);
                    setIsLoading(false);
                },
                (error) => {
                    setIsLoading(false);
                    alert('error post user');
                },
            );
    };

    return (
        <>
            <div className="card">
                <div className="card-header">لیست کاربران </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <label>کاربر مورد نظر :</label>
                            <select
                                className="form-control"
                                onChange={(event) => handelChang(event)}
                            >
                                <option>انتخاب کنید </option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        {isLoading ? (
                            <Loading />
                        ) : (
                            posts.map((item) => <PostInfo key={item.id} info={item} />)
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPost;

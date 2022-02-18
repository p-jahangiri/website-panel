import React, { useState, useRef, useEffect } from 'react';
import { UserCombo } from '../custom-components/UserCombo';
import { insert, getAll, remove } from '../servises/PostServis';
const FetchCrud = () => {
    const titleRef = useRef();
    const bodyRef = useRef();
    const [userId, setUserId] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const changeUser = (id) => {
        setUserId(id);
    };

    useEffect(async () => {
        const results = await getAll();
        setPosts(results);
    }, []);


    const save = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const post = {
            title: titleRef.current.value,
            body: bodyRef.current.value,
            userId: userId,
        };
        const result = await insert(post);
        setIsLoading(false);
    };

    const removeItem = async (id) => {
        const result = await remove(id);
        setPosts([...posts.filter((q) => q.id != id)]);
    };
    
    return (
        <>
            <div className="card">
                <div className="card-header">مدیریت داده ها با fetch</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <form onSubmit={(event) => save(event)}>
                                <div className="form-group">
                                    <label>عنوان : </label>
                                    <input ref={titleRef} type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>کاربر :</label>
                                    <UserCombo changeItem={changeUser} />
                                </div>
                                <div className="form-group">
                                    <label>توضیح : :</label>
                                    <textarea ref={bodyRef} className="form-control"></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isLoading ? 'disabled' : ''}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>User</th>
                                    <th>Body</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.body}</td>
                                        <td>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="btn btn-danger btn-sm"
                                            >
                                                delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FetchCrud;

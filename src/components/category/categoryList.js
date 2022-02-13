import React, { useState, useEffect } from 'react';
import { PageTitle } from '../../custom-components/PageTitle';
import Loading from '../../custom-components/Loading'
export const CategoryList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);

    const gateCategories = () => {
        const apiUrl = 'https://apitester.ir/api/Categories';
        fetch(apiUrl)
            .then((response) => response.json())
            .then(
                (data) => {
                    setItems(data);
                    setIsLoading(false);
                },
                (error) => {
                    setIsLoading(false);
                },
            );
    };

    useEffect(() => {
        gateCategories();
    }, []);

    return (
        <>
            <PageTitle title="گروه محصولات" />
            <div className="card">
                <div className="card-header">گروه بندی محصولات</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {isLoading ? (
                                     <Loading />
                                    ) : (
                                        items.map((item) => (
                                            <tr key={item.categoryId}>
                                                <td>{item.categoryId}</td>
                                                <td>{item.categoryName}</td>
                                                <td>{item.description}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

import React from 'react'
import {useNavigate, Link } from 'react-router-dom'
export const ProductList = ({ data,editMode, remove }) => {
    let navigate = useNavigate();
    return (
        <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>کد</th>
                    <th>عنوان</th>
                    <th>گروه</th>
                    <th>قیمت</th>
                    <th>مدیریت</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item =>
                    <tr className={item.editMode ? 'selected-row' : ''} key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.categoryName}</td>
                        <td>{item.price}</td>
                        <td>
                            <button className="btn btn-sm btn-info ml-2" onClick={() => navigate.push(`/products/${item.id}`)}>مشاهده - History</button>
                            <Link className="btn btn-sm btn-primary ml-2" to={`/products/${item.id}`}>Link</Link>
                            <Link className="btn btn-sm btn-secondary ml-2" to={`/products/info?id=${item.id}&title=${item.title}`}>Query String</Link>
                            <button className="btn btn-warning btn-sm ml-2" 
                            onClick={() => editMode(item.id)}>ویرایش</button>
                            <button className="btn btn-danger btn-sm ml-2" onClick={() =>remove(item.id)}>حذف</button>
                        </td>
                    </tr>)}
            </tbody>
        </table>
    )
}

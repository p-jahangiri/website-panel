import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainDashboard } from '../../components/dashboard/MainDashboard';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import { FormDataSample } from '../../sampleForm/FormDataSample';
import { ReactHookForm } from '../../sampleForm/ReactHookForm';
import { ProductContainer } from '../../components/product/ProductContainer';
import { ProductDetails } from '../../components/product/ProductDetails';
import {CategoryList} from '../../components/category/categoryList'
import FormikSample from '../../sampleForm/FormikSample';
import PageNotFount from '../../components/not-fount/page-not-fount';
// import Login from '../../components/auth/Login'
import '../../assets/css/paper-dashboard.css';
import '../../assets/css/demo.css';
import UserPost from '../../components/post/UserPost';
import FormWithRef from '../../sampleForm/FormWithRef';
import FetchCrud from '../../crud/FetchCrud';
const AdminLayout = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <TopNavbar />
                <div className="content">
                    <Routes>
                        <Route path="/"  element={<MainDashboard />} />
                        <Route path="/products" element={<ProductContainer />} />
                        <Route path="/category" element={<CategoryList />} />/
                        <Route path="/userPost" element={<UserPost />} />
                        <Route path="/fetchCrud" element={<FetchCrud />} />
                        <Route path="/products/:id" element={<ProductDetails />} />
                        <Route path="products/info" element={<ProductDetails />} />
                        <Route path="/formdata" element={<FormDataSample />} />
                        <Route path="/react-hook-form" element={<ReactHookForm />} />
                        <Route path="/form-sample" element={<FormikSample />} />
                        <Route path="/form-ref" element={<FormWithRef />} />
                        {/* <Route path="/login" exact element={<Login />} /> */}
                        <Route path="*" element={<PageNotFount />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;

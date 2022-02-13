import React from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';

//... => rest parameters 

const PrivateRoute = ({ element: Element, ...rest }) => {
    const location = useLocation();

    return (
        <Route {...rest}>
            {localStorage.getItem('user') ? (
                <Element />
            ) : (   <Route path="*/" element={<Navigate to='/login' />}
                
                
            />
                // <Navigate to={{ pathname: '/login', state: { from: location } }} />
            )}
        </Route>
    );
};

export default PrivateRoute;

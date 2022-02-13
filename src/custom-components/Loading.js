import React from 'react';

const Loading = () => {
    return (
        <>
            <div className="btn btn-primary" type="button" disabled>
                <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                ></span>
                در حال دریافت اطلاعات...
            </div>
        </>
    );
};

export default Loading;

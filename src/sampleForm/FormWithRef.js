import React, { useState, useRef } from 'react';
const FormWithRef = () => {
    const [items, setItems] = useState([]);
    const valueInputRef = useRef();
    const addList = () => {
        if (valueInputRef.current.value == '') {
            alert('پس هشداد یازمامشای');
            valueInputRef.current.focus();
        } else {
            setItems([...items, valueInputRef.current.value]);
            valueInputRef.current.value = '';
        }
    };
    return (
        <div className="card">
            <div className="card-header">use ref Sample</div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <label>نام گروه : </label>
                        <input ref={valueInputRef} placeholder="یاز گوراخ" />
                        <button className="btn btn-primary btn-sm mr-2" onClick={addList}>
                            اضافه اله
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>یازدیخلاری : </h4>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormWithRef;

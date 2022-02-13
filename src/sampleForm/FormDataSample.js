import React, { useState } from 'react'

export const FormDataSample = props => {
    const submit = e => {
        e.preventDefault()
        const form = new FormData(e.target);
        console.log(form.get('firstName'));
        console.log(form.get('lastName'));
        console.log(form);
        alert('data save succ...');
    }

    return (
        <div className="card">
            <div className="card-header">نمونه فرم با FormData</div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <form onSubmit={submit}>
                            {/* <input name="firstName" onChange={(e) => setFirstName(e.target.value)} /> */}
            FirstName:
            <input type="text" name="firstName" />
            LastName:
            <input type="text" name="lastName" />
                            <button type="submit">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
import React from 'react';
import { useForm } from 'react-hook-form';

export function ReactHookForm() {
    const { register, handleSubmit, formState: { errors } } = useForm(); // initialize the hook
    const submitForm = (data) => {
        console.log(data);
    };

    return (
        <div className="card">
        <div className="card-header">نمونه فرم با React-Hook-Form</div>
        <div className="card-body">
            <div className="row">
              <div className="col">
              <form onSubmit={handleSubmit(submitForm)}>
            First Name :
            <input name="firstname" register={register} />
            Last Name :
            <input name="lastname" {...register("lastname", { required: true})} />
            {errors.lastname && 'Last name is required.'}
            Age :
            <input name="age"  {...register('age', {pattern: /[ /\d+/ ]{3}/, })} />  
                        
                   
            {errors.age && 'Please enter number for age.'}
            <input type="submit" />
        </form>
              </div>
            </div>
        </div>
    </div>
 
       
    );
}
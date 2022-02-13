import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { products } from '../../globalData/InitialData';
import PropTypes from 'prop-types';

const ProductInfo = ({ categories, product, save }) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        defaultValues: { ...product },
    });

    useEffect(() => {
        reset({ ...product });
        console.log('product');
        console.log(product);
    }, [product]);

    const submitForm = (data) => {
        console.log(data);
        console.log(watch('id'));
        save(data);
    };
    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <input type="hidden" name="id" register={register} />
            <div className="form-group">
                <label htmlFor="title">عنوان محصول</label>
                <input type="text" name="title"  {...register("title", { required: true, maxLength: 20 })}className="form-control" />
                {errors.title ?.type === "required" && <small className="form-text text-danger">عنوان اجباری می باشد</small>} 
                {errors.title ?.type === "minLength" && <small className="form-text text-danger">حداقل 5 کاراکتر</small>}
            </div>
            <div className="form-group">
                <label htmlFor="title">گروه محصول</label>
                <select name="categoryId" {...register("categoryId", { required: true})} className="form-control">
                    <option value="">انتخاب کنید</option>
                    {categories.map((item, index) => <option value={item.id}>{item.title}</option>)}
                </select>
                {errors.categoryId ?. type=== "required" && <span className="form-text text-danger">گروه اجباری می باشد</span>}
            </div>
            <div className="form-group">
                <label htmlFor="price">قیمت</label>
                <input
                    type="text"
                    name="price"
                    {...register('price', {
                        pattern: /\d+/,
                    })}
                    className="form-control"
                />
                {errors.price ?. type === 'pattern' && <small className="form-text text-danger">مقدار عددی وارد کنید</small>}
            </div>
            <button type="submit" className="btn btn-primary">
                ذخیره
            </button>
        </form>
    );
};

ProductInfo.propTypes = {
    categories: PropTypes.array.isRequired,
    save: PropTypes.func.isRequired,
    product: PropTypes.object,
};

ProductInfo.defaultProps = {
    categories: [],
    product: {},
};

export default React.memo(ProductInfo);

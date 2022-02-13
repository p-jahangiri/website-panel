import React from 'react';
import ProductInfo from './ProductInfo';
import { ProductList } from './ProductList';
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';

import { categories, products, emptyProduct } from '../../globalData/InitialData';
import { PageTitle } from '../../custom-components/PageTitle';
export const ProductContainer = () => {
    const [items, setItems] = React.useState(products);
    const [selectedItem, setSelectedItem] = React.useState({});

    const setEditMode = (id) => {
        const temp = [...items];
        const index = temp.findIndex((q) => q.id == id);
        temp.forEach((q) => (q.editMode = false));
        temp[index].editMode = true;
        setSelectedItem(temp[index]);
        setItems([...temp]);
    };

    const saveItem = (item) => {
        const category = categories.find((q) => q.id == item.categoryId);
        item = { ...item, categoryName: category.title, editMode: false };

        if (item.id != '') {
            //Edit selected item
            const temp = [...items];
            const index = temp.findIndex((q) => q.id == item.id);
            temp[index] = item;
            setItems([...temp]);
        } else {
            //Add new item
            item.id = uuidv4();
            const temp = [...items, item];
            setItems([...temp]);
        }
        setSelectedItem({ ...emptyProduct });
    };

    const removeItem = (id) => {
        swal({
            title: 'حذف محصول',
            text: 'در صورت حذف قابل بازیابی نمی باشد',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
            buttons: ['انصراف', 'حذف'],
        }).then((willDelete) => {
            if (willDelete) {
                setItems([...items.filter((q) => q.id != id)]);
            }
        });
    };

    return (
        <>
            <PageTitle title="لیست محصولات" />
            <div className="card">
                <div className="card-header">مدیریت محصولات</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <ProductList data={items} editMode={setEditMode} remove={removeItem} />
                        </div>
                        <div className="col-md-3">
                            <ProductInfo
                                categories={categories}
                                product={selectedItem}
                                save={saveItem}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

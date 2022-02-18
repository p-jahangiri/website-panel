import React from 'react'

const Paging = ({pageCount, currentPage, changePage}) => {
    let items = [];
    for (let i = 1; i <= pageCount; i++) {
        const item =  <li  className={i == currentPage ? "page-item active" : "page-item"}>
            <a onClick={() => changePage(i)} className="page-link" href="#">{i}</a>
            </li>;
        items.push(item);
        console.log(items)
    }
    return (
        [items]
        );
}

export default Paging;
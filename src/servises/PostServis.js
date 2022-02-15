// export const insert = (data) => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify(data),
//     })
//         .then((Response) => Response.json())
//         .then(
//             (result) => {
//                 alert(JSON.stringify(result));
//             },
//             (error) => {},
//         );
// };
export const insert = async (data) => {
   const response= await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    })
   const result = response.json();
   return response
};
 
export const getAll = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const result = response.json();
return result;
}


export const remove = async(id) => {
const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method:'DELETE'});
return response.status == 200 ;
}
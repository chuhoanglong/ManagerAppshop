// FETCH DATA To server for product
const getDataProducts = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://dmkjo.sse.codesandbox.io/products"; // site that doesn’t send Access-Control-*
    try {
        let response = await fetch(
            proxyurl + url,
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error('getDataProducts err',error);
    }

};

// FETCH DATA To server for user.
const getDataCustomers = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://dmkjo.sse.codesandbox.io/customers"; // site that doesn’t send Access-Control-*
    try {
        let response = await fetch(
            proxyurl + url,
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
};

// FETCH DATA while user login
// const getUserLogin = async (name,pass) => {
//     // const res = await fetch(URL_USER,
//     //     {
//     //         method: 'POST',
//     //         headers: {
//     //             Accept: "application/json",
//     //             "Content-Type": "application/json"
//     //         },
//     //         body: JSON.stringify({
//     //             name,
//     //             pass,
//     //         }),
//     //     }
//     // );

//     // const response = await res.json();
//     // return response;
// }

module.exports = {
    getDataProducts,
    getDataCustomers,
    // getUserLogin
}
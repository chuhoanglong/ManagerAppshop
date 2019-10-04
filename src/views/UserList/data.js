import uuid from 'uuid/v1';
const fetchAPI = async () => {
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
}
fetchAPI();

export default [
  {
    id: uuid(),
    name: 'Ekaterina Tankova',
    address: {
      country: 'USA',
      state: 'West Virginia',
      city: 'Parkersburg',
      street: '2849 Fulton Street'
    },
    email: 'ekaterina.tankova@devias.io',
    phone: '304-428-3097',
    avatarUrl: '/images/avatars/avatar_3.png',
    createdAt: 1555016400000
  },

];

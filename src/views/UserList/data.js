import uuid from 'uuid/v1';
var DATA = [];
const fetchAPI = () => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://dmkjo.sse.codesandbox.io/customers"; // site that doesn’t send Access-Control-*
  return fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.json())
    .then(contents => {
      DATA = contents;
      console.log("ben trong fetch",DATA);
      return DATA

    })
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

}
console.log('ben ngoai fetch:,,,,,,', fetchAPI());

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

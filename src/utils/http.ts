// export function httpRequest(url: string) {
//   return fetch(url).then(res => {
//     console.log(res.headers.get('X-Total-Count'));
//     return res.json();
//   });
// }

export function httpRequest(url: string) {
  return fetch(url).then(res => {
    const headers = Object.fromEntries(res.headers.entries());
    return res.json().then(data => ({
      data,
      headers,
    }));
  });
}

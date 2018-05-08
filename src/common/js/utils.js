export function getToken() {
  if (localStorage.getItem('token')) {
    return localStorage.getItem('token');
  } else {
    return '';
  }
}
export function getNickname() {
  if (localStorage.getItem('nickname')) {
    return localStorage.getItem('nickname');
  } else {
    return '';
  }
}

const fetcher = async (url: string, options = {}) => {
  const defaultOptions: RequestInit = {
    method: 'POST',
    mode: 'cors',
    credentials: "include",
  };

  const fetchOptions = {...defaultOptions, ...options};
  const response = await fetch (url, fetchOptions);
  const text = await (response.text())
  return text;
}

const getUser = () => {
  const options = {
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({userName: 'newguy', password: 'hello'})
  }

  return fetcher('https://localhost:8443/', options);
}

const login = (userName: string, password: string) => {
  const options = {
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({userName: 'newguy', password: 'hello'})
  }

  return fetcher(
    'https://localhost:8443/login',
    options,
  )
}

const logout = () => {
  return fetcher('https://localhost:8443/logout')
}
// const getUser = () => {
//   return fetcher('https://130.61.61.87/db');
// }

const register = async (userName: string, password: string) => {
  const options = {
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({userName, password})
  }

  return fetcher(
    'https://localhost:8443/register',
    options,
  )
}

export {
  getUser,
  login,
  logout,
  register
}
const BASE_URL = "https://localhost:8443";

const fetcher = async (url: string, options = {}) => {
  const defaultOptions: RequestInit = {
    method: 'POST',
    mode: 'cors',
    credentials: "include",
  };

  const fetchOptions = {...defaultOptions, ...options};
  const response = await fetch (url, fetchOptions);
  return response;
}

const login = (username: string, password: string) => {
  const options = {
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({username: username, password: password})
  }

  return fetcher(
    BASE_URL + '/login',
    options,
  )
}

const logout = () => {
  return fetcher(BASE_URL + '/logout')
}

const register = async (username: string, password: string) => {
  const options = {
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({username, password})
  }

  return fetcher(
    BASE_URL + '/register',
    options,
  )
}

const createBlock = async (username: string, startTime: Date, endTime: Date) => {
  const options = {
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({username, startTime, endTime})
  }
  return fetcher(
    BASE_URL + '/db/createblock',
    options,
  )
}

const getBlocks = async (username: string, from: Date, to: Date) => {
  const options = {
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({username, from, to})
  }
  return fetcher(
    BASE_URL + '/db/getBlocks',
    options,
  )
}

export {
  login,
  logout,
  register,
  createBlock,
  getBlocks
}
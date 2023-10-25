const fetcher = async (url: string, options = {}, data={}) => {
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
  return fetcher('https://localhost:8443/db');
}

export {
  getUser,
}
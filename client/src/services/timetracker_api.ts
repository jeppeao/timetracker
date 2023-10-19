const fetcher = async (url: string, options = {}, data={}) => {
  const defaultOptions: RequestInit = {
    method: 'get',
    mode: 'cors'
  };

  const fetchOptions = {...defaultOptions, ...options};
  const response = await fetch (url, fetchOptions);
  const text = await (response.text())
  return text;
}

const getUser = () => {
  return fetcher('http://localhost:4001/api');
}

export {
  getUser,
}
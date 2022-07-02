import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const token = '0404bbd47a30eed4111df9fb91696e56cb5fcc3d';

export const getAllData = async (url: string) => {
  const data: [] = await axios.get(url, {
    headers: {
      Accept: 'application/json',
      // 'Authorization': `Bearer  + ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return data;
};

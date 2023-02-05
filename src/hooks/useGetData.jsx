import BaseUrl from './../Api/BaseUrl';

const useGetData = async (url , params) => {
  const {data} = await BaseUrl.get(url , params);
  return data;
}

export const useGetDataToken = async (url, parmas) => {
  const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  }
  const res = await BaseUrl.get(url, config);
  return res.data;
}

export default useGetData
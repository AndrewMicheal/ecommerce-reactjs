import BaseUrl from "../Api/BaseUrl";

const useDeleteData = async (url , params) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
}
  const {data} = await BaseUrl.delete(url ,config , params);
  return data;
}

export default useDeleteData
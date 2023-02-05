import BaseUrl from "../Api/BaseUrl";


export const useUpdatetDataWithImage = async (url , params) => {
    const config = {
        headers: {"Content-type": "multipart/form-data"}
    }
    const res = await BaseUrl.put(url , params , config);
    return res;
}

export const useUpdateData = async (url , params) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const {data} = await BaseUrl.put(url , params, config);
    return data;
}

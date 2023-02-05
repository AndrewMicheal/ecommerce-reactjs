import BaseUrl from "../Api/BaseUrl";

export const useInsertData = async (url , params) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    console.log(localStorage.getItem("token"))
    const {data} = await BaseUrl.post(url , params, config);
    return data;
}


export const useInsertDataWithImage = async (url , params) => {
    const config = {
        headers: {
            "Content-type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await BaseUrl.post(url , params , config);
    return res;
}

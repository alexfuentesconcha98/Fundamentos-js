class ClientWrapper{
    makeGetRequest(url,callback){
        return axios
        .get(url)
        .then(callback);
    }
}
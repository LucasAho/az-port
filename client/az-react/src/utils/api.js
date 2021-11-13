import axios from "axios";

const API = {
    getTukrenDictionary: function() {
        return axios.get("/api/wordlist/tukren");
    },
    createNewWord: function(obj) {
        return axios.post("/api/wordlist", obj)
    }
}

export default API;
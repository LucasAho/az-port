import axios from "axios";

const API = {
    getTukrenDictionary: function() {
        return axios.get("/api/wordlist/tukren");
    }
}

export default API;
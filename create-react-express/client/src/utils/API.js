import axios from "axios";
import Axios from "axios";

export default {
        // Search for items.
    // ===================
    searchItems: function(itemData) {
        console.log(itemData);
        return axios.get(`/api/items/${itemData.medium}/${itemData.nsfw}/${itemData.weirdness}`);
    },
    // Deletes the item with the given Id.
    // =====================================
    deleteItem: function(id) {
        return axios.delete("/api/items/" + id);
    },
    // Saves the item data to the database.
    saveItem: function(itemData) {
        console.log(itemData);
         return axios.post("/api/items/", itemData);
    },
    // Login for local.
    loginLocal: function(loginData) {
        return axios.post("/login-local", loginData);
    },
    // Login for Google.
    loginGoogle: function(loginData) {
        return axios.get("/google");
    }
  
};

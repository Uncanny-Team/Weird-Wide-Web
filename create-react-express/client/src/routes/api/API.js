import axios from "axios";

export default {
        // Search for items.
    // ===================
    searchItems: function(itemData) {
        console.log(itemData);
        return axios.get(`/api/items/${itemData.tags}/${itemData.medium}/${itemData.nsfw}/${itemData.weirdness}`);
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
    }
  
};

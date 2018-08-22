import axios from "axios";

export default {
    // Gets all items.
    // =================
    getItems: function() {
        return axios.get("/api/items");
    },
    // Get a specific item by title.
    // ===========================
    getItem: function(title) {
        return axios.get("/api/items/" + title);
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

import axios from "axios";

export default {
    // Gets all items.
    // =================
    getItems: function() {
        return axios.get("/api/items");
    },
    // Get a specific item by Id.
    // ===========================
    getItem: function(id) {
        return axios.get("/api/items/" + id);
    },
    // Deletes the item with the given Id.
    // =====================================
    deleteItem: function(id) {
        return axios.delete("/api/items/" + id);
    },
    // Saves the item data to the database.
    saveItem: function(itemData) {
        return axios.post("/api/items", itemData);
    }

}
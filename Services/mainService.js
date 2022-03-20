const ClientResponse = require('../Models/ClientResponse');
const Note = require('../Models/Note');
const notes = require('../assets/db');

const mainService = {
    get: (id) => {
        if (id) {
            const result = notes.data.find(note => note.id == id);
            
            if (result) {
                return new ClientResponse(200, result);
            } else {
                return new ClientResponse(400, null, 'No matches found!');
            }
        } else {
            return new ClientResponse(400, null, 'Please provide an id!');
        }
    },
    getAll: () => {
        return new ClientResponse(200, notes.data);
    },
    add: (title, description) => {
        if (title && description) {
            const note = notes.add(title, description);
            return note ? new ClientResponse(201, note, 'New note added successfully!')
                : new ClientResponse(500, null);
        } else {
            return new ClientResponse(400, null, 'Note data is missing!');
        }
    },
    update: (id, title, description) => {
        const note = new Note(id, title, description);
    
        if (notes.update(note)) {
            return new ClientResponse(200, true, 'Note updated successfully!');
        } else {
            return new ClientResponse(400, false, 'An error has ocurred!');
        }
    },
    delete: (id) => {
        if (id) {
            const result = notes.delete(id);
            if (result) {
                return new ClientResponse(200, result, 'Note deleted successfully!');
            } else {
                return new ClientResponse(400, null, 'No matches found to delete!');
            }
        } else {
            return new ClientResponse(400, null, 'Please provide an id!');
        }
    }
};

module.exports = mainService;
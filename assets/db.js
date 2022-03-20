const Note = require('../Models/Note');

const notes = {
    lastIndex: 3,
    data: [
        {
            id: 1,
            title: 'New note',
            description: 'Lorem ipsum dolor sit amet.'
        },
        {
            id: 2,
            title: 'Shopping list',
            description: '* Toilet paper\n* Eggs\n* Milk'
        },
        {
            id: 3,
            title: 'Travel goals',
            description: '- Japan\n- France\n- Thailand\n- Morocco'
        }
    ],
    add: (title, description) => {
        if (title && description) {
            const note = new Note(++notes.lastIndex, title, description);
            notes.data.push(note);
            return note;
        }
        return null;
    },
    update: (item) => {
        const index = notes.data.findIndex(note => note.id == item.id);
        if (index >= 0) {
            if (item.title) {
                notes.data[index].title = item.title;
            }
            if (item.description) {
                notes.data[index].description = item.description;
            }
            return true;
        }
        return false;
    },
    delete: (id) => {
        if (id) {
            const index = notes.data.findIndex(note => note.id == id);
            if (index >= 0) {
                return notes.data.splice(index, 1);
            }
        }
        return null;
    }
};

module.exports = notes;
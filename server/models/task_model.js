const db = require('./database');

module.exports = {
    FindAllTask: async function() {
        try {
            const result = await db.query('SELECT * from task');
            return {data: result[0], error: null};
        } catch (error) {
            return {data: null, error: error}
        }
    },
    FindOneTask: async function(id) {
        try {
            const result = await db.query('SELECT * from task where id=?', [id]);
            return {data: result[0][0], error: null};
        } catch (error) {
            return {data: null, error: error}
        }
    },
    AddTask: async function(task) {
        try {
            const result = await db.query('INSERT INTO task SET ?', task);
            return {data: result[0], error: null};
        } catch (error) {
            return {data: null, error: error}
        }
    },
    UpdateTask: async function(id, completed) {
        try {
            const result = await db.query('UPDATE task SET completed=? where id=?', [completed, id]);
            return {data: result[0], error: null};
        } catch (error) {
            return {data: null, error: error}
        }
    },
    DeleteTask: async function(id) {
        try {
            const result = await db.query('DELETE FROM task where id=?', [id]);
            return {data: result[0], error: null};
        } catch (error) {
            return {data: null, error: error}
        }
    },
    
}
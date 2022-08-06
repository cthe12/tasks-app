// Create schema/ template/ format for things that will be passed into database

const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('tasks', taskSchema, 'tasks')
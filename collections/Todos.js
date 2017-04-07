import SimpleSchema from 'simpl-schema';

Todos = new Meteor.Collection('todos');

Todos.allow({
    insert: function () {
        return true;
    }
});

TodoSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    whatTodo: {
        type: String,
        label: "WhatTodo"
    }
});

Todos.attachSchema(TodoSchema);
import { db } from "../configs/firebase";

//When the user is new, create initial setup with the uid!s
function initialize(userUid) {
	return db.ref("users/" + userUid).set({
		todos: {}
	});
}

function createTodo(userUid, todoObj) {
	return db
		.ref("users/" + userUid)
		.child("todos")
		.push(todoObj);
}

function getAllTodo(userUid) {
	return db.ref("users/" + userUid + "/todos").once("value");
}

function updateTodo(userUid, todoId, todoUpdatePayload) {
	return db
		.ref("users/" + userUid + "/todos/" + todoId)
		.update(todoUpdatePayload);
}

function deleteTodo(userUid, todoId) {
	return db.ref("users/" + userUid + "/todos/" + todoId).set(null);
}

export default {
	initialize,
	createTodo,
	getAllTodo,
	updateTodo,
	deleteTodo
};

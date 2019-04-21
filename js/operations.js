const assert = require('assert');

//This funtion inserts a document in the collection
exports.insert((db, document, collection, callback) => {
	const coll = db.collection(collection);
	coll.insert(document, (err, result) =>{
		assert.equal(err, null);
		console.log("This is the result sent back by the function " + result);
		 callback(result);
	});
});

//This function searches for a document in the collection
exports.find((db, document, collection, callback) => {
	const coll = db.collection(collection);
	coll.find({}).toArray((err, docs)=>{
		assert.equal(err, null);
		callback(docs);
	});
});

//This function deletes a document
exports.delete((db, document, collection, callback) => {
	const coll = db.collection(collection);
	coll.deleteOne(document, (err, result) =>{
		assert.equal(err, null);
		console.log("Deleted the document ",document);
		callback(result);
	});
});

//This function updates a document
exports.update((db, document, update, collection, callback) => {
	const coll = db.collection(collection);
	coll.updateOne(document, {$set: update}, null, (err, result) =>{
		assert.equal(err, null);
		console.log("Updated the document with ", update);
		callback(result);
	});
});

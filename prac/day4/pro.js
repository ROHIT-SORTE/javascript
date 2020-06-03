module.exports = function(app, db) {

	var ObjectID = require('mongodb').ObjectID;

	// Update
	app.put('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		const note = {text: req.body.body, title: req.body.title};
		db.collection('notes').update(details, note, (err, result) => {
			if (err) {
				res.send({'error': 'An error occerred ' + err});
			} else {
				res.send(result);
			}
		});
	});

	// Delete
	app.delete('/notes/:id', (req, res) => {

		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		db.collection('notes').remove(details, (err, item) => {
			if (err) {
				res.send({'error':'An error has occerred deleting.'});
			} else {
				res.send('Note ' + id + ' deleted!');
			}
		});
	});


	// Get
	app.get('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		db.collection('notes').findOne(details, (err, item) => {
			if (err) {
				res.send({"error": "An error has occurred "});
			} else {
				res.send(item);
			}
		});
	});

	// Post
	app.post('/notes', (req, res) => {
		// Create your notes here
		const note = {text: req.body.body, title: req.body.title};
		db.collection('notes').insert(note, (err, result) => {
			if (err) {
				res.send({'error':'An error has occurred' + err});
			} else {
				res.send(result.ops[0]);
			}
		});
	});	
};
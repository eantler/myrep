var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){ 
	//we are connected to the db

	var trialSchema = mongoose.Schema({
		name: String 
	});

	var trial = mongoose.model('trial', trialSchema);
// /
// 	f1 = new trial();
// 	f1.name = 'duduzar';
// 	f2 = new trial();
// 	f2.name = 'the one and only';

// 	f1.save();
// 	f2.save();

// 	console.log('now reading from the db:');
// 	trial.find(function (err, t){
// 			console.log(t);

// 	});

	//	
});


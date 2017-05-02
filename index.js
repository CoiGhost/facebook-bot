var login = require('facebook-chat-api');

var answeredThreads = {};

//created simple echo bot
login({
	email: 'coyestillwagen44@gmail.com',
	password: 'CoyeM2000'
}, function callback(err, api) {
	if (err)
		return console.error(err);

	api.listen(function callback(err, message) {
		console.log(message.threadID);
		if (!answeredThreads.hasOwnProperty(message.threadID)) {
			answeredThreads[message.threadID] = true;
			api.sendMessage('test', message.threadID);
		}
	});
});

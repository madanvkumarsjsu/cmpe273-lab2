
/**
 * Login Class
 */
function Login() {
	// sessionId -> user map
	this.sessionMap = {
		99999 : { name: 'Foo', email: 'foo@bar.com' }
	};
}
/**
 * Say Hello {name} to the user
 */
Login.prototype.hello = function(sessionId) {
	return 'Hello ' + this.sessionMap[sessionId].name + '\n';
};

/**
 * Check whether the given session id is valid (is in sessionMap) or not.
 */
Login.prototype.isLoggedIn = function(sessionId) {
	return sessionId in this.sessionMap;
};

/**
 * Create a new session id for the given user.
 */
Login.prototype.login = function(_name, _email) {
   /*
	* Generate unique session id and set it into sessionMap like foo@bar.com
	*/
	var sessionId = new Date().getTime();
	this.sessionMap[sessionId] = { name: _name, email: _email } 
	
	console.log('new session id ' + sessionId + ' for login::' + _email);
	
	return sessionId;
};

/**
 * Refresh session id for the given user.
 */
Login.prototype.refresh = function(oldSessionId) {
   /*
	* Generate unique session id and set it into sessionMap like foo@bar.com
	*/
	var newSessionId = new Date().getTime();
	var _name = this.sessionMap[oldSessionId].name;
	var _email = this.sessionMap[oldSessionId].email
	this.sessionMap[newSessionId] = { name: _name, email: _email } 
	delete this.sessionMap[oldSessionId];
	console.log('Deleted old session id ' + oldSessionId)
	console.log('new session id ' + newSessionId + ' for login::' + _email);
	
	return newSessionId;
};

/**
 * Logout from the server
 */ 
Login.prototype.logout = function(sessionId) {
	console.log('logout::' + sessionId);
	delete this.sessionMap[sessionId]; 
};

// Export the Login class
module.exports = new Login();

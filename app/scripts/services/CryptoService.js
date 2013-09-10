'use strict';

angular.module('siteTicketPortal.CryptoService', [])
/**
 * Provides crypto functionality for creating a Basic Auth header string
 */
	.service('Crypto', function () {

		return {
			/**
			 * creates an authentication string based on the provided username and password
			 * @param username
			 * @param password
			 * @returns {string}
			 */
			getAuthString: function(username, password) {
				var mash = username + ":" + password;
				var wordArray = CryptoJS.enc.Utf8.parse(mash);
				var encodedStr = CryptoJS.enc.Base64.stringify(wordArray);
				var authString = "Basic " + encodedStr;

				return authString;
			}
		}
	});

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
				var mash = username + ":" + password,
				wordArray = CryptoJS.enc.Utf8.parse(mash),
				encodedStr = CryptoJS.enc.Base64.stringify(wordArray),
				authString = "Basic " + encodedStr;

				return authString;
			}
		};
	});

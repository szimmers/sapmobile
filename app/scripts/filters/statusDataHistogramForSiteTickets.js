'use strict';

angular.module('siteTicketPortal')
/**
 * filter for transforming ticket data into histogram object that provides a count (statusCount) for each
 * unique siteWorkItem.status (statusVal).
 */
	.filter('statusDataHistogramForSiteTicket', function () {
		return function (tickets) {
			var histogram = {},
				i, len,
				statusVal;

			if (tickets === undefined) {
				return histogram;
			}

			for (i=0, len = tickets.length; i < len; i++) {

				statusVal = tickets[i].siteWorkItem.status;

				if (histogram[statusVal] === undefined) {
					histogram[statusVal] = {};
					histogram[statusVal].statusCount = 0;
				}

				histogram[statusVal].statusCount++;
			}

			return histogram;
		};
	});

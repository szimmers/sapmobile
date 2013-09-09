'use strict';

angular.module('siteTicketPortal')
/**
 * Controller for the project overview screen, which shows a chart reflecting the ticket data.
 * project and tickets are on the scope and resolved beforehand.
 */
  .controller('ProjectOverviewCtrl', function ($scope, $filter) {

		/**
		 * parse the ticket data and return it as chart data
		 * @param tickets
		 * @returns {Array}
		 */
		var parseTicketsIntoChartData = function(tickets) {
			var chartData = [];

			var histogram = $filter('statusDataHistogramForSiteTicket')(tickets);

			for (var statusVal in histogram) {
				var statusCount = histogram[statusVal].statusCount;
				var statusDescription = $filter('statusConstantFilter')(parseInt(statusVal, 10));
				var item = [{v: statusDescription}, {v: statusCount}];
				chartData.push({ c: item });
			}

			return chartData;
		};

		// create the chart
		var chart = {
			"type": "PieChart",
			"displayed": true,
			"options": {
				"backgroundColor": "#eeeeee",
				"pieHole": 0.3,
				"chartArea": {
					"height": "75%"
				},
				"legend": {
					"position": "bottom"
				}
			}
		};

		// create the chart data from the ticket data
		var chartData = parseTicketsIntoChartData($scope.tickets);

		// configure the chart with teh chart data
		chart.data = {"cols": [
			{ label: "Status", type: "string"},
			{ label: "Count", type: "number"}
		], "rows": chartData };

		$scope.siteTicketStatusChart = chart;
	});

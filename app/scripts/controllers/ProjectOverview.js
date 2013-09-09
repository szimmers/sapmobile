'use strict';

angular.module('siteTicketPortal')
/**
 * Controller for the project overview screen, which shows a chart reflecting the ticket data.
 * project and tickets are on the scope and resolved beforehand.
 */
  .controller('ProjectOverviewCtrl', function ($scope, $filter) {

		var createHistogramOfStatusData = function(tickets) {
			var histogram = {};

			for (var i=0; i < tickets.length; i++) {

				var statusVal = tickets[i].siteWorkItem.status;

				if (histogram[statusVal] == undefined) {
					histogram[statusVal] = {};
					histogram[statusVal].statusCount = 0;
				}

				histogram[statusVal].statusCount++;
			}

			return histogram;
		};

		var parseTicketsIntoChartData = function(tickets) {
			var chartData = [];

			var histogram = createHistogramOfStatusData(tickets);

			for (var statusVal in histogram) {
				var statusCount = histogram[statusVal].statusCount;
				var statusDescription = $filter('statusConstantFilter')(parseInt(statusVal));
				var item = [{v: statusDescription}, {v: statusCount}];
				chartData.push({ c: item });
			}

			return chartData;
		};

		var chart = {
			"type": "PieChart",
			"displayed": true,
			"options": {
				"legend": {
					"position": "bottom",
					"alignment": "start"
				}
			}
		};

		//chart.cssStyle = "height:400px; width:100%;";

		var chartData = parseTicketsIntoChartData($scope.tickets);

		chart.data = {"cols": [
			{ label: "Status", type: "string"},
			{ label: "Count", type: "number"}
		], "rows": chartData };

		$scope.siteTicketStatusChart = chart;
	});

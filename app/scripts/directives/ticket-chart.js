'use strict';

angular.module('siteTicketPortal.directives', [])
/**
 * Given ticket data, creates a pie chart with sections based on unique status id's.
 */
	.directive('ticketChart', function ($filter) {
		return {
			template: '<div google-chart chart="chart" ></div>',
			restrict: 'E',
			scope : {
				data: '='
			},
			link: function postLink(scope, element, attrs) {
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
				var chartData = parseTicketsIntoChartData(scope.data);

				// configure the chart with the chart data
				chart.data = {"cols": [
					{ label: "Status", type: "string"},
					{ label: "Count", type: "number"}
				], "rows": chartData };

				scope.chart = chart;
			}
		};
	});

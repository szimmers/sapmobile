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
			link: function postLink(scope) {
				/**
				 * parse the ticket data and return it as chart data
				 * @param tickets
				 * @returns {Array}
				 */
				var parseTicketsIntoChartData = function(tickets) {
					var chartData = [],
					statusVal,
					histogram,
					statusCount,
					statusDescription,
					item;

					histogram = $filter('statusDataHistogramForSiteTicket')(tickets);

					for (statusVal in histogram) {
						statusCount = histogram[statusVal].statusCount;
						statusDescription = $filter('statusConstantFilter')(parseInt(statusVal, 10));
						item = [{v: statusDescription}, {v: statusCount}];

						chartData.push({ c: item });
					}

					return chartData;
				};

				var chart, chartData;

				// create the chart
				chart = {
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
				chartData = parseTicketsIntoChartData(scope.data);

				// configure the chart with the chart data
				chart.data = {"cols": [
					{ label: "Status", type: "string"},
					{ label: "Count", type: "number"}
				], "rows": chartData };

				scope.chart = chart;
			}
		};
	});

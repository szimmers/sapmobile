'use strict';

angular.module('siteTicketPortal')
/**
 * When the project detail is requested, use the provided project to load associated data,
 * including the project tickets.
 */
  .controller('ProjectDetailCtrl', function ($scope, $filter, $location, project, ProjectTickets) {

		var parseTicketsIntoChartData = function(tickets) {
			var chartData = [];
			var histogram = {};

			for (var i=0; i < tickets.length; i++) {

				var statusVal = tickets[i].siteWorkItem.status;

				if (histogram[statusVal] == undefined) {
					histogram[statusVal] = {};
					histogram[statusVal].statusCount = 0;
				}

				histogram[statusVal].statusCount++;

			}

			for (var statusVal in histogram) {
				var statusCount = histogram[statusVal].statusCount;
				var statusDescription = $filter('statusConstantFilter')(parseInt(statusVal));
				var item = [{v: statusDescription}, {v: statusCount}];
				chartData.push({ c: item });
			}

			return chartData;
		};

		$scope.project = project;

		ProjectTickets.get(project).then(function(tickets) {
			$scope.tickets = tickets;

			var chartData = parseTicketsIntoChartData($scope.tickets);

			chart.data = {"cols": [
				{ label: "Status", type: "string"},
				{ label: "Count", type: "number"}
			], "rows": chartData };

			$scope.siteTicketStatusChart = chart;
		});

		var chart = {
			"type": "PieChart",
			"displayed": true,
			"options": {
				"title": "Site Ticket Status",
				"legend": {
					"position": "bottom",
					"alignment": "start"
				}
			}
		};

		chart.cssStyle = "height:400px; width:100%;";


		// when a site detail is requested, load the detail page
		$scope.openSiteDetail = function(brandKey, siteIdentifier) {
			$location.path("/site/detail/brand/" + brandKey + "/site/" + siteIdentifier);
		}
  });

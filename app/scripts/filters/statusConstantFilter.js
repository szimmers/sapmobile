'use strict';

angular.module('siteTicketPortal')
/**
 * Filter for converting a status constant into a human-readable string
 */
  .filter('statusConstantFilter', function () {
	return function (status) {
		var display = "";

		switch (status)
		{
			case 1:
				display = "New";
				break;
			case 2:
				display = "Started";
				break;
			case 3:
				display = "Completed";
				break;
			case 4:
				display = "Installation";
				break;
			case 5:
				display = "Pre-Rollout";
				break;
			case 6:
				display = "Rollout";
				break;
			case 7:
				display = "Post-Rollout";
				break;
			case 8:
				display = "Survey";
				break;
			case 9:
				display = "Awaiting Confirmation";
				break;
			case 10:
				display = "Assigned";
				break;
			case 11:
				display = "Confirmed";
				break;
			case 12:
				display = "Awaiting Reschedule";
				break;
			case 13:
				display = "Unable to Confirm";
				break;
			case 14:
				display = "Order Shipped";
				break;
			case 15:
				display = "Scheduled";
				break;
			case 16:
				display = "Configuration Required";
				break;
			case 17:
				display = "Waiting for Group Assignment";
				break;
			case 18:
				display = "Waiting for Surveyor Assignment";
				break;
			case 19:
				display = "Waiting for Installer Assignment";
				break;
			case 20:
				display = "Waiting for Schedule";
				break;
			case 21:
				display = "Waiting for Closeout";
				break;
			case 22:
				display = "Waiting for Shipping Information";
				break;
			case 23:
				display = "Waiting for Approval Complete";
				break;
			case 24:
				display = "Waiting for Survey Complete";
				break;
			case 25:
				display = "Waiting for Installation Complete";
				break;
			case 33:
				display = "Awaiting Service Provider Assignment";
				break;
			case 34:
				display = "Awaiting Call Center Assignment";
				break;
			case 26:
				display = "Waiting for Review";
				break;
			case 28:
				display = "Survey Review Rejected";
				break;
			case 29:
				display = "Installation Review Rejected";
				break;
			case 30:
				display = "Installation Unnecessary";
				break;
			case 31:
				display = "Approval Intervention Required";
				break;
			case 32:
				display = "Unscheduled";
				break;
			case 35:
				display = "Submit Shipping Data";
				break;
			case 36:
				display = "Waiting for Service Ticket Complete";
				break;
			case 37:
				display = "Waiting for Followup Complete";
				break;
			case 38:
				display = "Closeout Exception";
				break;
			case 39:
				display = "Create Ticket Exception";
				break;
			case 0:
			default :
				display = "Unknown";
				break;
		}
		return display;
	};
  });

'use strict';

angular.module('siteTicketPortal')
/**
 * Filter for converting a status constant into a human-readable string
 */
  .filter('statusConstantFilter', ['statusConstants', function (statusConstants) {
	return function (status) {
		var display = "";

		switch (status)
		{
			case statusConstants.New:
				display = "New";
				break;
			case statusConstants.Started:
				display = "Started";
				break;
			case statusConstants.Completed:
				display = "Completed";
				break;
			case statusConstants.Installation:
				display = "Installation";
				break;
			case statusConstants.PreRollout:
				display = "Pre-Rollout";
				break;
			case statusConstants.Rollout:
				display = "Rollout";
				break;
			case statusConstants.PostRollout:
				display = "Post-Rollout";
				break;
			case statusConstants.Survey:
				display = "Survey";
				break;
			case statusConstants.AwaitingConfirmation:
				display = "Awaiting Confirmation";
				break;
			case statusConstants.Assigned:
				display = "Assigned";
				break;
			case statusConstants.Confirmed:
				display = "Confirmed";
				break;
			case statusConstants.AwaitingReschedule:
				display = "Awaiting Reschedule";
				break;
			case statusConstants.UnableToConfirm:
				display = "Unable to Confirm";
				break;
			case statusConstants.OrderShipped:
				display = "Order Shipped";
				break;
			case statusConstants.Scheduled:
				display = "Scheduled";
				break;
			case statusConstants.ConfigurationRequired:
				display = "Configuration Required";
				break;
			case statusConstants.WaitingForGroupAssignment:
				display = "Waiting for Group Assignment";
				break;
			case statusConstants.WaitingForSurveyorAssignment:
				display = "Waiting for Surveyor Assignment";
				break;
			case statusConstants.WaitingForInstallerAssignment:
				display = "Waiting for Installer Assignment";
				break;
			case statusConstants.WaitingForSchedule:
				display = "Waiting for Schedule";
				break;
			case statusConstants.WaitingForCloseout:
				display = "Waiting for Closeout";
				break;
			case statusConstants.WaitingForShippingInformation:
				display = "Waiting for Shipping Information";
				break;
			case statusConstants.WaitingForApprovalComplete:
				display = "Waiting for Approval Complete";
				break;
			case statusConstants.WaitingForSurveyComplete:
				display = "Waiting for Survey Complete";
				break;
			case statusConstants.WaitingForInstallationComplete:
				display = "Waiting for Installation Complete";
				break;
			case statusConstants.AwaitingServiceProviderAssignment:
				display = "Awaiting Service Provider Assignment";
				break;
			case statusConstants.AwaitingCallCenterAssignment:
				display = "Awaiting Call Center Assignment";
				break;
			case statusConstants.WaitingForReview:
				display = "Waiting for Review";
				break;
			case statusConstants.SurveyReviewRejected:
				display = "Survey Review Rejected";
				break;
			case statusConstants.InstallationReviewRejected:
				display = "Installation Review Rejected";
				break;
			case statusConstants.InstallationUnnecessary:
				display = "Installation Unnecessary";
				break;
			case statusConstants.ApprovalInterventionRequired:
				display = "Approval Intervention Required";
				break;
			case statusConstants.Unscheduled:
				display = "Unscheduled";
				break;
			case statusConstants.SubmitShippingData:
				display = "Submit Shipping Data";
				break;
			case statusConstants.WaitingForServiceTicketComplete:
				display = "Waiting for Service Ticket Complete";
				break;
			case statusConstants.WaitingForFollowupComplete:
				display = "Waiting for Followup Complete";
				break;
			case statusConstants.CloseoutException:
				display = "Closeout Exception";
				break;
			case statusConstants.CreateTicketException:
				display = "Create Ticket Exception";
				break;
			default :
				display = "Unknown";
				break;
		}
		return display;
	};
  }]);

'use strict';

/**
 * constants for status
 */
angular.module('siteTicketPortal')
	.config(['$provide', function($provide) {
		$provide.constant('statusConstants',
			{
				New: 1,
				Started: 2,
				Completed: 3,
				Installation: 4,
				PreRollout: 5,
				Rollout: 6,
				PostRollout: 7,
				Survey: 8,
				AwaitingConfirmation: 9,
				Assigned: 10,
				Confirmed: 11,
				AwaitingReschedule: 12,
				UnableToConfirm: 13,
				OrderShipped: 14,
				Scheduled: 15,
				ConfigurationRequired: 16,
				WaitingForGroupAssignment: 17,
				WaitingForSurveyorAssignment: 18,
				WaitingForInstallerAssignment: 19,
				WaitingForSchedule: 20,
				WaitingForCloseout: 21,
				WaitingForShippingInformation: 22,
				WaitingForApprovalComplete: 23,
				WaitingForSurveyComplete: 24,
				WaitingForInstallationComplete: 25,
				AwaitingServiceProviderAssignment: 33,
				AwaitingCallCenterAssignment: 34,
				WaitingForReview: 26,
				SurveyReviewRejected: 28,
				InstallationReviewRejected: 29,
				InstallationUnnecessary: 30,
				ApprovalInterventionRequired: 31,
				Unscheduled: 32,
				SubmitShippingData: 35,
				WaitingForServiceTicketComplete: 36,
				WaitingForFollowupComplete: 37,
				CloseoutException: 38,
				CreateTicketException: 39
			}
		);
	}
	]);

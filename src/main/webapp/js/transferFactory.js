/**
 * File with the Asset operations
 * 
 * @author Erion R Barasuol
 */
var TranferFactory = (function() {
	var OPERATION = {
		TRANSFER : "TRANSFER_ASSET",
		QUERY : "QUERY_ASSET",
		ECHO : "ECHO_MESSAGE"
	};

	var REST_SERVICE = "././api/blockchain";
	var SERVICES = {
		TRANSFER : REST_SERVICE + "/transf"
	};

	return {

		/**
		 * Function responsible to do an operation related to an Asset
		 */
		doAssetOperation : function(asset, operation, success, showErrors) {
			if (operation == OPERATION.TRANSFER) {
				this.transfer(asset, showErrors);
			} else {
				showErrors({
					message : "The Asset can't be added due to an invalid Opeation key"
				});
			}
		},

		/**
		 * Transfer and Asset to the Blockchain network
		 */
		transfer : function(asset, success, showErrors) {
			$.ajax({
				method : "POST",
				url : SERVICES.TRANSFER,
				contentType : "application/json",
				data : JSON.stringify(asset),
				error : function(request, status, error) {
					showErrors(request);
				}
			}).done(function(data) {
				success(data)
			});
		},

		/**
		 * Function only to echo the message on screen
		 */
		echoMessage : function(asset, success, showErrors) {
			$.ajax({
				method : "GET",
				url : SERVICES.ECHO,
				contentType : "application/text",
				data : JSON.stringify(asset),
				error : function(request, status, error) {
					showErrors(request);
				}
			}).done(function(data) {
				success(data)
			});
		},

		getOperations : function() {
			return OPERATION;
		}
	}

}());

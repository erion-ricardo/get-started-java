$('#startTransferId').click(function() {
	var asset = {
		id : getValueFromField('assetId'),
		ownerId : getValueFromField('newOwnerId')
	};
	var OPERATIONS = TranferFactory.getOperations();
	TranferFactory.doAssetOperation(asset, OPERATIONS.TRANSFER, success, showErrors);
});

$('#echoMessageId').click(function() {
	var message = getValueFromField(messageId);
	var OPERATIONS = TranferFactory.getOperations();
	TranferFactory.echoMessage(message, OPERATIONS.ECHO, success, showErrors);
});

function showErrors(error) {
	alert(JSON.stringify(error));
}

function success(data) {
	alert(JSON.stringify(data));
}

/**
 * Function responsable to get the value for an existing field on view layer
 * 
 * @param id
 *            Fied id to get with JQuery
 */
function getValueFromField(id) {
	var field = $("#" + id);
	if (field != null) {
		return field.val();
	}
}
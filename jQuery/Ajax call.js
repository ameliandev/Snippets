$.ajax({
	url: '@Url.Action("SignDocuments","Home")',
	type: 'POST',
	data: JSON.stringify({
		templateCode: '@Model.TemplateCode',
		psLandlord: signLandlord[1],
		psTenant: signTenant[1],
		psSurvey: signSurvey[1],
		psCustomer: signCustomer[1],
		psEngineer: signEngineer[1],
		psAntOne: signAnotherOne[1],
		psAnoTwo: signAnotherTwo[1]
	}),
	contentType: 'application/json; charset=utf-8',
	success: function (data) {
		// If redisplaying (dev controller) : onSuccess(data);
		window.location = data;
	},
	error: function (request, status, error) {
		onError(request, status, error);
	}
});
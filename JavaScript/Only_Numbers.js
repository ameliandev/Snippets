function onlyNumbers(e) {
	var result = true;
	var items = [9, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
	var code = (e.keyCode ? e.keyCode : e.which);
	$.each(items, function () {
		if (code == this) {
			result = false;
		}
	});

	if (result == true) {
		e.preventDefault();
	}
}
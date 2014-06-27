$("#btnUploadFile").click(function () {
	    if (files.length <= 0) {
	        alert("Debe seleccionar algún fichero para subirlo.");
	    } else {
	        $('#imUpFiles').css("visibility: visible;");
	        var expID = $('[id$=hfExpId]').val();
	        var datapart = $('[id$=hfApartado]').val();
	        var formData = new FormData();

	        for (var i = 0; i < files.length; i++) {
	            formData.append('file', files[i]);
	        }

	        var xhr = new XMLHttpRequest();
	        xhr.open('POST', "FileHandler.ashx", true);
	        xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
	        xhr.setRequestHeader("ExpedienteID", expID);
	        xhr.onload = function () {
	            if (xhr.status === 200) {
	                $('[id$=btnRefreshDoc]').click();
	                $('#dvResult').show("slow");
	                $('[id$=lblUpOk]').empty();
	                $('[id$=lblUpOk]').append("<strong>FICHEROS SUBIDOS CORRECTAMENTE</strong>");
	                $('#messages').hide("slow");
	                $('#imUpFiles').css("visibility: hidden;");

	                tmpFiles = new Array();
	                files = new Array();
	            } else {
	                console.log('Something went terribly wrong...');
	            }
	        };

	        xhr.send(formData);

	    };
	});

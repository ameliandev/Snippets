//Para volver a reacivar el estilo de jquery en un control, lanzar esto cuando !IsPostBack

ScriptManager.RegisterStartupScript(Page, GetType(), "temp", "<script type='text/javascript'>$('#udpVisita').trigger('create');</script>", false);
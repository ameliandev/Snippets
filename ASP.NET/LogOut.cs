public static void LogOut()
{
    HttpContext.Current.Session.Clear();
    HttpContext.Current.Session.Abandon();
    HttpContext.Current.User = null;
    System.Web.Security.FormsAuthentication.SignOut();
    HttpContext.Current.Response.Redirect("~/login.aspx");
}

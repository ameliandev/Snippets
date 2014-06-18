public static void printToExcel(HttpResponse response, string filename, DataTable dt)
{
    if (dt.Rows.Count > 0)
    {
        string attachment = "attachment; filename=" + filename + ".xls";

        response.ClearContent();

        response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

        response.ContentEncoding = System.Text.Encoding.UTF32;

        response.Charset = "";

        response.AddHeader("content-disposition", attachment);

        string tab = "";
        foreach (DataColumn dc in dt.Columns)
        {
            response.Write(tab + dc.ColumnName);
            tab = "\t";
        }
        response.Write("\n");
        int i;
        foreach (DataRow dr in dt.Rows)
        {
            tab = "";
            for (i = 0; i < dt.Columns.Count; i++)
            {
                response.Write(tab + dr[i].ToString().Replace(System.Environment.NewLine, string.Empty));
                //response.Write(tab + dr[i].ToString().Trim('\r', '\n'));
                //response.Write(tab + dr[i].ToString().Replace("\\n", "").Replace("\\r", "").Replace("\\r\\n", "").Trim());
                tab = "\t";
            }
            response.Write("\n");
        }
        response.End();
    }
}

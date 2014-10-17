echo ====backup h1630121
title Copias de Seguridad SQL localhost

REM ADRIANMG:10/10/2014 - COPIA DE SEGURIDAD DE ENTRADAS ONLINE

SET @day=%date:~7,2%
SET @month=%date:~4,2%
SET @year=%date:~10,4%

SET /a @twodayless=%@day% - 2

echo %@twodayless%

SET @dir='D:\respaldo_sql\EntradasOnline_%@day%-%@month%-%@year%.bak'

IF EXIST D:\respaldo_sql\EntradasOnline_%@twodayless%-%@month%-%@year%.bak DEL D:\respaldo_sql\EntradasOnline_%@twodayless%-%@month%-%@year%.bak
	
OSQL -U <usuario> -P <password>(0) -S <servidor> -Q "BACKUP DATABASE <[dbname]> TO DISK = %@dir%"

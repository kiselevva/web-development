PROGRAM QueryString(INPUT, OUTPUT);
USES
  DOS;  
FUNCTION GetQueryStringParameter(parameter: STRING): STRING;
VAR
  QueryString: STRING;
BEGIN {GetQueryStringParameter}
  QueryString := GetEnv('QUERY_STRING');
  {поиск parameter= или &parameter=}
  IF (POS(parameter + '=', QueryString) = 1) OR (POS('&' + parameter + '=', QueryString) <> 0)
  THEN
    BEGIN
      {копирование подстроки из строки с parameter= до конца}
      QueryString := COPY(QueryString, POS(parameter + '=', QueryString) + LENGTH(parameter + '='), 255);
      {если в скопированной строке есть еще &, то копируем до &}
      IF POS('&', QueryString) <> 0
      THEN
        QueryString := COPY(QueryString, 1, POS('&', QueryString) - 1);
      GetQueryStringParameter := QueryString
    END
  ELSE      
    GetQueryStringParameter := ''
END; {GetQueryStringParameter}
{проверка}
BEGIN {QueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {QueryString}

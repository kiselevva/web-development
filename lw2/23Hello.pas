PROGRAM HelloDear(INPUT, OUTPUT);
USES
  DOS;
VAR
  QueryString: STRING;
  UserName: STRING;
BEGIN {HelloDear}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  QueryString := GetEnv('QUERY_STRING');
  {проверяем стоит ли name= на первом месте (условие)}
  IF POS('name=', QueryString) = 1
  THEN
    BEGIN
      IF POS('&', QueryString) <> 0
      THEN
        {если есть &, то копируем до него}
        UserName := COPY(QueryString, 6, POS('&', QueryString) - 6)
      ELSE
        {если нет, то всю строку размером до 255 символов}
        UserName := COPY(QueryString, 6, 255);
      WRITELN('Hello dear, ', UserName)
    END
  ELSE
    WRITELN('Hello Anonymous!')
END. {HelloDear}

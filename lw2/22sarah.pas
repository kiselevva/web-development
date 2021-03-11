PROGRAM PaulRevere(INPUT, OUTPUT);                                                            
USES DOS;
VAR
  Lanterns: STRING;
BEGIN {PaulRevere}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  Lanterns := GetEnv('QUERY_STRING');
  {Issue Paul Revere's message}
  IF Lanterns = 'lanterns=1'
  THEN
    WRITELN('The British are coming by land.')    
  ELSE
    IF Lanterns = 'lanterns=2'
    THEN
      WRITELN('The British are coming by sea.')
    ELSE
      WRITELN('Sarah did not say.')
END. {PaulRevere}
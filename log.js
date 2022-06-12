

function auto_scrool()
{
  const log = document.getElementById('log');
  log.scroll(0, log.scrollHeight);
}

function log( str )
{
  let p = document.createElement("p");
  p.appendChild( document.createTextNode( `Cycle ${current_cycle} - ${str}.`) );

  const log = document.getElementById("log");
  log.appendChild(p);

  console.log( str );

  auto_scrool();
}

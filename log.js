

function auto_scrool()
{
  const log = document.getElementById('log');
  log.scroll(0, log.scrollHeight);
}

function update_cc()
{
  const cc = document.getElementById('cc');
  cc.innerHTML = current_cycle;
}

function log( str )
{
  const p = document.createElement("p");
  p.appendChild( document.createTextNode( `Cycle ${current_cycle} - ${str}.`) );

  const log = document.getElementById("log");
  log.appendChild(p);

  console.log( str );

  auto_scrool();

  update_cc(); // ugly
}

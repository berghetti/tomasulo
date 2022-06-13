function generateTable( table, lines, header, body ) {
  // clear table
  while( table.rows.length ) {
    table.deleteRow(0);
  }

  // create header
  let thead = table.createTHead();
  let row = thead.insertRow();

  for ( let i = 0; i < header.length; i++ ){
    let th = document.createElement('th');
    let txt = document.createTextNode( header[i] );
    // console.log( header[i] );

    th.appendChild( txt );
    row.appendChild( th );
  }

  // create tbody
  let mybody = table.createTBody();
  for ( let i = 0; i < lines; i++ ){
    let row = mybody.insertRow();

    // get values to insert on line
    let values_line = [];
    if ( body ){
      values_line = Object.values( body[i] );
      // console.log( values_line );
    }

    for ( let j = 0; j < header.length; j++ ){
      let cell = row.insertCell();
      // first column index
      if ( j == 0 ) {
        cell.appendChild( document.createTextNode ( i + 1 ) );
        continue;
      }

      // insert values line
      if ( values_line.length ){
        cell.appendChild( document.createTextNode ( values_line[j - 1] ) );
      }
    }
  }
}

function show_rob( rob ){
  const header = [ '#', 'Busy', 'Instruction', 'Status', 'Destination', 'Value' ]
  const t_rob = document.getElementById('t_rob');

  generateTable( t_rob, rob.length, header, rob );
}

function show_rs_sub( rs ){
  const header = [ '#', 'Busy', 'Op', 'Vj', 'Vk', 'Qj', 'Qk', 'A' ]
  const t_rob = document.getElementById('rs_sub');

  generateTable( t_rob, rs.length, header, rs );
}

function show_rs_add( rs ){
  const header = [ '#', 'Busy', 'Op', 'Vj', 'Vk', 'Qj', 'Qk', 'A' ]
  const t_rob = document.getElementById('rs_add');

  generateTable( t_rob, rs.length, header, rs );
}

function show_queue( inst ){
  const header = [ '#', 'Instruction' ]
  const t = document.getElementById('inst_queue');

  generateTable( t, inst.length, header, inst );
}

function sho_reg( inst ){
  const header = [ '#', 'Name', 'Value', 'Ref' ]
  const t = document.getElementById('t_reg');

  generateTable( t, inst.length, header, inst );
}

function update_tables()
{
  show_queue( INSTRUCTIONS );
  show_rs_add( RS_ADD );
  show_rs_sub( RS_SUB );
  show_rob( ROB );
  sho_reg( REG );
}

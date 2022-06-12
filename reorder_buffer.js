
function
new_rob_entry( busy = 'N', op = '', status = '', destination = '', value = '')
{
  return {
    'busy' : busy,
    'op' : op,
    'status' : status,
    'destination' : destination,
    'value' : value
  };
}

var ROB = [
  new_rob_entry( ),
  new_rob_entry( ),
  new_rob_entry( ),
  new_rob_entry( )
];

var tail_rob = 0;
function circ_inc_rob_tail()
{
  tail_rob = ( tail_rob + 1 ) % ROB.length;
}

var head_rob = 0;
function circ_inc_rob_head()
{
  head_rob = ( head_rob + 1 ) % ROB.length;
}

function get_free_rob()
{
  if ( ROB[tail_rob].busy == 'N' )
    return tail_rob;

  return -1;
}

function get_rob_head()
{
  return ROB[head_rob];
}

function set_rob_entry( idx, entry )
{
  ROB[idx] = entry;
  circ_inc_rob_tail();
}

function set_rob_state( idx, state )
{
  ROB[ idx ].status += ' ' + state;
}

function set_rob_value( idx, value )
{
  ROB[ idx ].value = value;
  set_rob_state( idx, 'W');
}

function set_rob_int_cycle( idx )
{
  update_cycle_instruction( ROB[idx] );
}

function rob_commit()
{
  let inst = get_rob_head();

  set_rob_state( head_rob, 'C' );

  inst.busy = 'N';

  let reg_ref = get_reg_ref( inst.destination );
  if ( reg_ref === '' || reg_ref == 'ROB#' + (head_rob + 1) )
    set_reg_value( inst.destination, inst.value );

  circ_inc_rob_head();
}


function
new_rs_entry( busy = 'N', op = '', vj = '', vk = '', qj = '', qk = '', a = '')
{
  return {
    'busy' : busy,
    'op' : op,
    'vj' : vj,
    'vk' : vk,
    'qj' : qj,
    'qk' : qk,
    'a' : a,

    //metadata
    'rob_i' : '',             // ROB index
    'status' : '',            // current status, I, E, W or C
    'cycle_exec_started' : '',
    'last_cycle_update' : '',
    'operation_latency' : 2,  // TODO: get from instructions
    'value' : ''              // result operation
  };
}

var RS_ADD = [
  new_rs_entry( ),
  new_rs_entry( ),
];

var RS_SUB = [
  new_rs_entry( ),
  new_rs_entry( ),
];

var RS = [ RS_ADD, RS_SUB ];

// check free reserve station
function get_free_rs( rs )
{
  for( let i = 0; i < rs.length; i++ ) {
    if ( rs[i].busy == 'N' )
      return i;
  }
  // no entry free
  return -1;
}

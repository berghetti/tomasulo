
function new_reg_entry ( name, value = '', ref = '' )
{
  return {
    'name' : name,
    'value' : value,
    'ref' : ref
  };
}

var REG = [
  new_reg_entry( 'R1', 1),
  new_reg_entry( 'R2', 0),
  new_reg_entry( 'R3', 0),
  new_reg_entry( 'R4', 0),
  new_reg_entry( 'R5', 0),
];

function get_reg_index( name )
{
  for( let i = 0; i < REG.length; i++ )
    if ( REG[i].name == name )
      return i;

  // not found
  return -1;
}

function get_reg_value( reg )
{
  let i = get_reg_index( reg );
  if ( i >= 0 && false == REG[i].ref )
    return REG[i].value;

  return '';
}

function get_reg_ref( reg )
{
  let i = get_reg_index( reg );
  if ( i >= 0 )
    return REG[i].ref;

  return '';
}

function set_reg_ref( reg, ref )
{
  let i = get_reg_index( reg );
  if ( i >= 0 )
    REG[i].ref = ref;
}

function set_reg_value ( reg, value )
{
  let i = get_reg_index( reg );

  if ( -1 == i )
    { console.log (`Register ${reg} not found`); return }

  

  REG[i].value = value;
  REG[i].ref = '';
}

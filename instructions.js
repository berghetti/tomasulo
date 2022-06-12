
function new_inst_entry( inst, type, op1, op2, op3, rs )
{
  return {
    'inst' : inst,
    'type' : type,
    'op1' : op1,
    'op2' : op2,
    'op3' : op3,

    // metadata
    'rs_t' : rs,     // resevation station type,
                     // 0 to ADD and 1 to SUB
  };
}



var INSTRUCTIONS = [
  new_inst_entry("ADD R2, R1, R1", 0, 'R2', 'R1', 'R1', 0 ),
  new_inst_entry("ADD R3, R2, R2", 0, 'R3', 'R2', 'R2', 0 ),
  new_inst_entry("ADD R4, R3, R3", 0, 'R4', 'R3', 'R3', 0 ),
  new_inst_entry("ADD R5, R4, R4", 0, 'R5', 'R4', 'R4', 0 ),
  new_inst_entry("SUB R4, R5, R5", 0, 'R4', 'R5', 'R5', 1 ),
];

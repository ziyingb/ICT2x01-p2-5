Blockly.Blocks['lightswitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["red","r"], ["yellow","y"], ["green","g"]]), "color")
        .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "switch");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['lightswitch'] = function(block) {
  var dropdown_color = block.getFieldValue('color');
  var dropdown_switch = block.getFieldValue('switch');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Blocks['delay'] = {
  init: function() {
    this.appendValueInput("Delay")
        .setCheck(null)
        .appendField("Delay")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "Time")
        .appendField(new Blockly.FieldDropdown([["up","up"], ["left","left"], ["right","right"], ["down","down"]]), "Move");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['delay'] = function(block) {
  var dropdown_time = block.getFieldValue('Time');
  var dropdown_move = block.getFieldValue('Move');
  //var value_delay = Blockly.JavaScript.valueToCode(block, 'Delay', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_time === "1" && dropdown_move === "right"){
    var code = "document.getElementById('2').style.backgroundColor = 'yellow';\n"
  } 
  //var code = '...;\n';
  
  return code;
};
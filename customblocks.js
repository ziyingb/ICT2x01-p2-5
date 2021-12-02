//block definitions
Blockly.Blocks['move_forward'] = {
  init: function() {
    this.appendValueInput("Forward")
        .setCheck("String")
        .appendField("Forward");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//generator stub
Blockly.JavaScript['move_forward'] = function(block) {
  var value_forward = Blockly.JavaScript.valueToCode(block, 'Forward', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var a = document.getElementById("car").style.backgroundColor="red";

  var code = a;

  return code;
};

Blockly.Blocks['delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Delay")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"]]), "Time")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["backward","backward"]]), "Move");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*var start = 1;
var end = 25;*/
var cellID = 1;

/*function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function movement(cellID){
  console.log(cellID);
  document.getElementById(cellID).style.backgroundColor = 'yellow';

}

function forward(cellID, delay){
  if(delay == 0){
    cellID = cellID + 5;
    console.log(cellID);  
    var code = document.getElementById(cellID).style.backgroundColor = 'yellow'; 
  } else {
    for (var i = 0; i < delay; i++){
      cellID = cellID + 5;
      console.log(cellID);
      var code = document.getElementById(cellID).style.backgroundColor = 'yellow'; 
      //setTimeout(function(){movement(cellID)},100);
      sleep(2000); 
    }
  }
}*/


Blockly.JavaScript['delay'] = function(block) {
  var dropdown_time = block.getFieldValue('Time');
  var dropdown_move = block.getFieldValue('Move');
  // TODO: Assemble JavaScript into code variable.
  
  if (dropdown_time === "0" && dropdown_move === "forward"){
    cellID = cellID + 5;
    var code = document.getElementById(cellID).style.backgroundColor = 'yellow';
    if (cellID == 21){
      alert("Success");
      var code = document.getElementById(cellID).style.backgroundColor = 'green';
    } else if (cellID > 21){
      alert("out of bound. please restart.");
    }
  } 
  else if (dropdown_time === "1" && dropdown_move === "forward"){
    cellID = cellID + 10;
    var code = document.getElementById(cellID).style.backgroundColor = 'yellow';document.getElementById(cellID-5).style.backgroundColor = 'yellow';
    if (cellID == 21){
      alert("Success");
      var code = document.getElementById(cellID).style.backgroundColor = 'green';document.getElementById(cellID-5).style.backgroundColor = 'yellow';
    } else if (cellID > 21){
      alert("out of bound. please restart.");
    } 
  } 
  else if (dropdown_time === "2" && dropdown_move === "forward"){
    cellID = cellID + 15;
    var code = document.getElementById(cellID).style.backgroundColor = 'yellow';document.getElementById(cellID-5).style.backgroundColor = 'yellow';document.getElementById(cellID-10).style.backgroundColor = 'yellow'
    if (cellID == 21){
      alert("Success");
    } else if (cellID > 21){
      alert("out of bound. please restart.");
    }
  }
  else if (dropdown_time === "3" && dropdown_move === "forward"){
    cellID = cellID + 20;
    var code = document.getElementById(cellID).style.backgroundColor = 'yellow';document.getElementById(cellID-5).style.backgroundColor = 'yellow';document.getElementById(cellID-10).style.backgroundColor = 'yellow';document.getElementById(cellID-15).style.backgroundColor = 'yellow'
    if (cellID == 21){
      alert("Success");
      var code = document.getElementById(cellID).style.backgroundColor = 'yellow';document.getElementById(cellID-5).style.backgroundColor = 'yellow';document.getElementById(cellID-10).style.backgroundColor = 'yellow';document.getElementById(cellID-15).style.backgroundColor = 'yellow';document.getElementById(cellID).style.backgroundColor = 'green';
    } else if (cellID > 21){
      alert("out of bound. please restart.");
    }
  }
  /*--------------------------------------------------------------------------*/
  else if (dropdown_time === "0" && dropdown_move === "backward"){
    if (cellID == 1){
      alert("Unable to move backward");
    } else {
      cellID = cellID - 5;
      var code = document.getElementById(cellID+5).style.backgroundColor = 'white';
      }
  }
   
  else if (dropdown_time === "1" && dropdown_move === "backward"){
    if (cellID == 1){
      alert("Unable to move backward");
    } else {
      cellID = cellID - 10;
      if (cellID < 1){
        alert("Out of bound. Unable to move backward");
      } else {
        var code = document.getElementById(cellID+10).style.backgroundColor = 'white';document.getElementById(cellID+5).style.backgroundColor = 'white';
      }
    }
  }
   
  else if (dropdown_time === "2" && dropdown_move === "backward"){
    if (cellID == 1){
      alert("Unable to move backward");
    } else {
      cellID = cellID - 15;
      if (cellID < 1){
        alert("Out of bound. Unable to move backward");
      } else {
        var code = document.getElementById(cellID+15).style.backgroundColor = 'white';document.getElementById(cellID+10).style.backgroundColor = 'white';document.getElementById(cellID+5).style.backgroundColor = 'white';
      }
    }
  }
  else if (dropdown_time === "3" && dropdown_move === "backward"){
    if (cellID == 1){
      alert("Unable to move backward");
    } else {
      cellID = cellID - 20;
      if (cellID < 1){
        alert("Out of bound. Unable to move backward");
      } else {
        var code = document.getElementById(cellID+20).style.backgroundColor = 'white';document.getElementById(cellID+10).style.backgroundColor = 'white';document.getElementById(cellID+5).style.backgroundColor = 'white';document.getElementById(cellID+15).style.backgroundColor = 'white';
      }
    }
  }
  

 
  //var code = '...;\n';

  
  return code;
};
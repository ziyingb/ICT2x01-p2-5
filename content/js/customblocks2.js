//block definitions
Blockly.Blocks['move_forward'] = {
  init: function () {
    this.appendValueInput("Forward")
      .setCheck("String")
      .appendField("Forward");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//generator stub
Blockly.JavaScript['move_forward'] = function (block) {
  var value_forward = Blockly.JavaScript.valueToCode(block, 'Forward', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var a = document.getElementById("car").style.backgroundColor = "red";

  var code = a;

  return code;
};

Blockly.Blocks['delay'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Delay")
      .appendField(new Blockly.FieldDropdown([
        ["0", "0"],
        ["1", "1"],
        ["2", "2"],
        ["3", "3"]
      ]), "Time")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "forward"],
        ["backward", "backward"]
      ]), "Move");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['motor_turn'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Motor_turn")
      .appendField(new Blockly.FieldDropdown([
        ["right", "right"],
        ["left", "left"]
      ]), "direction");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};



var cellID = 1;

var workspace = Blockly.inject('blocklyDiv', {
  media: '../../media/',

  toolbox: document.getElementById('toolbox'),
  comments: true,
  collapse: false,
  disable: true,
  maxBlocks: 4,
  grid: {
    spacing: 25,
    length: 3,
    colour: '#ccc',
    snap: true
  },
  toolbox: toolbox,
  zoom: {
    controls: true,
    wheel: false,
    startScale: 1.0,
    maxScale: 4,
    minScale: 0.25,
    scaleSpeed: 1.1
  }
});

function runCode() {
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP =
    'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  eval(code);
  /*try{
    eval(code);
  } catch(e) {
    alert("out of bound. please restart");
  }*/
}

Blockly.JavaScript['delay'] = function (block) {
  var dropdown_time = block.getFieldValue('Time');
  var dropdown_move = block.getFieldValue('Move');
  // TODO: Assemble JavaScript into code variable.

  if (dropdown_time === "0" && dropdown_move === "forward") {
    cellID = cellID + 5;
    var code = document.getElementById(cellID).style.backgroundColor = 'yellow';
    if (cellID == 21) {
      alert("Success");
      var code = document.getElementById(cellID).style.backgroundColor = 'green';
    } else if (cellID > 21) {
      alert("out of bound. please restart.");
    }
  } else if (dropdown_time === "1" && dropdown_move === "forward") {
    cellID = cellID + 10;
    var code = document.getElementById(cellID).style.backgroundColor = 'yellow';
    document.getElementById(cellID - 5).style.backgroundColor = 'yellow';
    if (cellID == 21) {
      alert("Success");
      var code = document.getElementById(cellID).style.backgroundColor = 'green';
      document.getElementById(cellID - 5).style.backgroundColor = 'yellow';
    } else if (cellID > 21) {
      alert("out of bound. please restart.");
    }
  } else if (dropdown_time === "2" && dropdown_move === "forward") {
    cellID = cellID + 15;
    var code = document.getElementById(cellID).style.backgroundColor = 'yellow';
    document.getElementById(cellID - 5).style.backgroundColor = 'yellow';
    document.getElementById(cellID - 10).style.backgroundColor = 'yellow'
    if (cellID == 21) {
      alert("Success");
    } else if (cellID > 21) {
      alert("out of bound. please restart.");
    }
  } else if (dropdown_time === "3" && dropdown_move === "forward") {
    cellID = cellID + 20;
    var code = document.getElementById(cellID).style.backgroundColor = 'yellow';
    document.getElementById(cellID - 5).style.backgroundColor = 'yellow';
    document.getElementById(cellID - 10).style.backgroundColor = 'yellow';
    document.getElementById(cellID - 15).style.backgroundColor = 'yellow'
    if (cellID == 21) {
      alert("Success");
      var code = document.getElementById(cellID).style.backgroundColor = 'yellow';
      document.getElementById(cellID - 5).style.backgroundColor = 'yellow';
      document.getElementById(cellID - 10).style.backgroundColor = 'yellow';
      document.getElementById(cellID - 15).style.backgroundColor = 'yellow';
      document.getElementById(cellID).style.backgroundColor = 'green';
    } else if (cellID > 21) {
      alert("out of bound. please restart.");
    }
  }
  /*--------------------------------------------------------------------------*/
  else if (dropdown_time === "0" && dropdown_move === "backward") {
    if (cellID == 1) {
      alert("Unable to move backward");
    } else {
      cellID = cellID - 5;
      var code = document.getElementById(cellID + 5).style.backgroundColor = 'white';
    }
  } else if (dropdown_time === "1" && dropdown_move === "backward") {
    if (cellID == 1) {
      alert("Unable to move backward");
    } else {
      cellID = cellID - 10;
      if (cellID < 1) {
        alert("Out of bound. Unable to move backward");
      } else {
        var code = document.getElementById(cellID + 10).style.backgroundColor = 'white';
        document.getElementById(cellID + 5).style.backgroundColor = 'white';
      }
    }
  } else if (dropdown_time === "2" && dropdown_move === "backward") {
    if (cellID == 1) {
      alert("Unable to move backward");
    } else {
      cellID = cellID - 15;
      if (cellID < 1) {
        alert("Out of bound. Unable to move backward");
      } else {
        var code = document.getElementById(cellID + 15).style.backgroundColor = 'white';
        document.getElementById(cellID + 10).style.backgroundColor = 'white';
        document.getElementById(cellID + 5).style.backgroundColor = 'white';
      }
    }
  } else if (dropdown_time === "3" && dropdown_move === "backward") {
    if (cellID == 1) {
      alert("Unable to move backward");
    } else {
      cellID = cellID - 20;
      if (cellID < 1) {
        alert("Out of bound. Unable to move backward");
      } else {
        var code = document.getElementById(cellID + 20).style.backgroundColor = 'white';
        document.getElementById(cellID + 10).style.backgroundColor = 'white';
        document.getElementById(cellID + 5).style.backgroundColor = 'white';
        document.getElementById(cellID + 15).style.backgroundColor = 'white';
      }
    }
  }



  //var code = '...;\n';


  return code;
};

Blockly.JavaScript['motor_turn'] = function (block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_direction === "left") {
    direction = 4;
    var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(270deg);"
  } else if (dropdown_direction === "right") {
    direction = 2;
    var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(90deg);"
  }
  alert(direction);
  return code;
};

var commands = "";

// A $( document ).ready() block.
$(document).ready(function () {
  var url = window.location.href;
  var challengeId = url.split('/')[4];
  $.ajax({
    url: '/loadChallenge/' + challengeId,
    type: 'GET',
    success: function (response) {
      console.log(response)
    },
    error: function (err) { 
      console.log(err)
    }
  })

});


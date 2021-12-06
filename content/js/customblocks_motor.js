//block definitions
Blockly.Blocks['delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Delay")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"]]), "Time")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["backward","backward"]]), "Move");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Motor_turn")
        .appendField(new Blockly.FieldDropdown([["right","right"], ["left","left"]]), "direction");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*var start = 1;
var end = 25;*/
var cellID = 1;
var direction = 1;
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
  document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center;";

}

function forward(cellID, delay){
  if(delay == 0){
    cellID = cellID + 5;
    console.log(cellID);  
    var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center;"; 
  } else {
    for (var i = 0; i < delay; i++){
      cellID = cellID + 5;
      console.log(cellID);
      var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center;"; 
      //setTimeout(function(){movement(cellID)},100);
      sleep(2000); 
    }
  }
}*/

//generator stub
Blockly.JavaScript['delay'] = function(block) {
  var dropdown_time = block.getFieldValue('Time');
  var dropdown_move = block.getFieldValue('Move');
  // TODO: Assemble JavaScript into code variable.
  if (direction == 1){
    if (dropdown_time === "0" && dropdown_move === "forward"){
      cellID = cellID + 5;
      alert(cellID);
      var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center;"
    } 
    else if (dropdown_time === "1" && dropdown_move === "forward"){
      cellID = cellID + 10;
      var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center;";document.getElementById(cellID-5).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center;";
      
    } 
    else if (dropdown_time === "2" && dropdown_move === "forward"){
      cellID = cellID + 15;
      var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center;";document.getElementById(cellID-5).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center;";document.getElementById(cellID-10).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center;";
      
    }
    else if (dropdown_time === "3" && dropdown_move === "forward"){
      cellID = cellID + 20;
      var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center;";document.getElementById(cellID-5).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center;";document.getElementById(cellID-10).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center;";document.getElementById(cellID-15).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center;";
      
    }
    else if (dropdown_time === "0" && dropdown_move === "backward"){

      if (cellID == 1){
        alert("Unable to move backward");
      } else {
        cellID = cellID - 5;
        var code = document.getElementById(cellID+5).style.backgroundImage = 'none';
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
          var code = document.getElementById(cellID+10).style.backgroundImage = 'none';document.getElementById(cellID+5).style.backgroundImage = 'none';
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
          var code = document.getElementById(cellID+15).style.backgroundImage = 'none';document.getElementById(cellID+10).style.backgroundImage = 'none';document.getElementById(cellID+5).style.backgroundImage = 'none';
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
          var code = document.getElementById(cellID+20).style.backgroundImage = 'none';document.getElementById(cellID+10).style.backgroundImage = 'none';document.getElementById(cellID+5).style.backgroundImage = 'none';document.getElementById(cellID+15).style.backgroundImage = 'none';
        }
      }
    }
  } else if (direction == 4){
    alert("hi2");
    if (dropdown_time === "0" && dropdown_move === "forward"){
      cellID = cellID + 1;
      var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(270deg);";
      if (cellID == 25){
        alert("Success");
        document.getElementById(cellID).style.backgroundColor = 'green';
      } 
    } 
    else if (dropdown_time === "1" && dropdown_move === "forward"){
      cellID = cellID + 2;
      var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(270deg);";document.getElementById(cellID-1).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(270deg);";
      if (cellID == 25){
        alert("Success");
        document.getElementById(cellID).style.backgroundColor = 'green';
      } 
    } 
    else if (dropdown_time === "2" && dropdown_move === "forward"){
      cellID = cellID + 3;
      var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(270deg);";document.getElementById(cellID-1).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(270deg);";document.getElementById(cellID-2).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(270deg);";
      if (cellID == 25){
        alert("Success");
        document.getElementById(cellID).style.backgroundColor = 'green';
      } 
    }
    else if (dropdown_time === "3" && dropdown_move === "forward"){
      cellID = cellID + 4;
      var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(270deg);";document.getElementById(cellID-1).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(270deg);";document.getElementById(cellID-2).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(270deg);";document.getElementById(cellID-3).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(270deg);";
      if (cellID == 25){
        alert("Success");
        document.getElementById(cellID).style.backgroundColor = 'green';
      } 
    }
    else if (dropdown_time === "0" && dropdown_move === "backward"){
      if (cellID == 1){
        alert("Unable to move backward");
      } else {
        cellID = cellID - 1;
        var code = document.getElementById(cellID+1).style.backgroundImage = 'none';
        }
    }
     
    else if (dropdown_time === "1" && dropdown_move === "backward"){
      if (cellID == 1){
        alert("Unable to move backward");
      } else {
        cellID = cellID - 2;
        if (cellID < 1){
          alert("Out of bound. Unable to move backward");
        } else {
          var code = document.getElementById(cellID+2).style.backgroundImage = 'none';document.getElementById(cellID+1).style.backgroundImage = 'none';
        }
      }
    }
     
    else if (dropdown_time === "2" && dropdown_move === "backward"){
      if (cellID == 1){
        alert("Unable to move backward");
      } else {
        cellID = cellID - 3;
        if (cellID < 1){
          alert("Out of bound. Unable to move backward");
        } else {
          var code = document.getElementById(cellID+3).style.backgroundImage = 'none';document.getElementById(cellID+2).style.backgroundImage = 'none';document.getElementById(cellID+1).style.backgroundImage = 'none';
        }
      }
    }
    else if (dropdown_time === "3" && dropdown_move === "backward"){
      if (cellID == 1){
        alert("Unable to move backward");
      } else {
        cellID = cellID - 4;
        if (cellID < 1){
          alert("Out of bound. Unable to move backward");
        } else {
          var code = document.getElementById(cellID+4).style.backgroundImage = 'none';document.getElementById(cellID+3).style.backgroundImage = 'none';document.getElementById(cellID+2).style.backgroundImage = 'none';document.getElementById(cellID+1).style.backgroundImage = 'none';
        }
      }
    }
  }
  //var code = '...;\n';
  return code;
}; 


/*function add_img() { 
  var img = document.createElement('img'); 
  img.src = 'image/car.jpg'; 
  document.getElementById(cellID).appendChild(img);
}*/


Blockly.JavaScript['motor_turn'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_direction === "left"){
    direction = 4;
    var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(270deg);"
  } 
  else if (dropdown_direction === "right"){
    direction = 2;
    var code = document.getElementById(cellID).style.cssText = "background-image: url(image/car.jpg); background-size: contain; background-repeat: no-repeat; background-position: center; transform: rotate(90deg);"  
  }
  alert(direction);
  return code;
};

  

Blockly.Arduino.drissA4_declare_var = function() {
  // Variable setter.
  var argument1 = this.getTitleValue('TYPE');
  //TODO: settype to variable
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  //Blockly.Arduino.setups_['setup_var' + varName] = varName + ' = ' + argument0 + ';\n';
  tableau_type[varName]=argument1;
  return '';
};

Blockly.Arduino.drissA4_variables_set = function() {
  // Variable setter.
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  //charge le type dans tableau_type 
  //tableau_type[Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),Blockly.Variables.NAME_TYPE)]=argument1;   
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);       
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.Arduino.drissA4_variables_get = function() {
  // Variable getter.
  var code = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.driss_A4_led_red = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_led_red_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.driss_A4_eclairage = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_eclairage_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.driss_A4_commande_moteur_CC = function() {
  var dropdown_pin1 = this.getTitleValue('PIN1');
  var dropdown_pin2 = this.getTitleValue('PIN2');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.setups_['setup_cde_moteur_cc_'+dropdown_pin1+'_'+dropdown_pin2] = 'pinMode('+dropdown_pin1+', OUTPUT);\n pinMode('+dropdown_pin2+', OUTPUT);\n'; //code à insérer dans le setup Arduino
  
  var code = ""; 
  Blockly.Arduino.definitions_['define_cde_moteur_cc'] = "void cmd_mot_cc(byte pin1,byte pin2,boolean sens) {\n"+
    ' if(sens) {\n'+
    '   digitalWrite(pin1,0);\n'+
    '   digitalWrite(pin2,1);\n'+
    ' }\n'+
    ' else {\n'+
    '   digitalWrite(pin1,1);\n'+
    '   digitalWrite(pin2,0);\n'+
    ' }\n';
  code="cmd_mot_cc("+dropdown_pin1+","+dropdown_pin2+","+value_sens+");\n";
  return code;
};

Blockly.Arduino.driss_A4_arreter_moteur_CC = function() {
  var dropdown_pin1 = this.getTitleValue('PIN1');
  var dropdown_pin2 = this.getTitleValue('PIN2');
  
  var code = ""; 
  Blockly.Arduino.definitions_['define_arreter_moteur_cc'] = "void arreter_mot_cc(byte pin1,byte pin2) {\n"+
    ' digitalWrite(pin1,0);\n'+
    ' digitalWrite(pin2,0);\n'+
    '}\n';
  code="arreter_mot_cc("+dropdown_pin1+","+dropdown_pin2+");\n";
  return code;
};



Blockly.Arduino.driss_A4_btn_white = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn_white_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.driss_A4_btn_relache1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  //var code = 'digitalRead('+dropdown_pin+')==1';
  
  var code = 'while (digitalRead('+dropdown_pin+')==1) {\n'+
              '}\n' +
              'delay (100);\n';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.driss_A4_btn_relache = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'delay (100);\n'+'while (digitalRead('+dropdown_pin+')==1) {\n'+'}\n'+'delay (100);\n' ;
  return code;
};



Blockly.Arduino.driss_A4_fdc = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_fdc_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.driss_A4_ldr = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.driss_A4_pir = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_pir_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



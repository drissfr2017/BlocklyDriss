//Driss SOUDANI

// define blocks
'use strict';


goog.provide('Blockly.Blocks.drissA4');

goog.require('Blockly.Blocks');

Blockly.Blocks.drissA4_1.HUE = 360;
Blockly.Blocks.drissA4_2.HUE = 352;



//led_red OK
Blockly.Blocks.driss_A4_led_red = {
  category: 'drissA4 : actionneurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4_1.HUE);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.DRISS_A4_TEXT33, "HIGH"], [Blockly.Msg.DRISS_A4_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT32)
        .appendTitle(new Blockly.FieldImage("blocks/drissA4/led_red.png", 64, 40))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT35);
  }
};


//éclairage OK
Blockly.Blocks.driss_A4_eclairage = {
  category: 'drissA4 : actionneurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4_1.HUE);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.DRISS_A4_TEXT33, "HIGH"], [Blockly.Msg.DRISS_A4_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT31)
        .appendTitle(new Blockly.FieldImage("blocks/drissA4/eclairage.png", 64, 40))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT35);
  }
};


//Commande de  moteur CC OK
Blockly.Blocks.driss_A4_commande_moteur_CC = {
  category: 'drissA4 : actionneurs',
  helpUrl: '',

  init: function() {
    this.appendDummyInput()
        .appendField("Faire tourner le moteur ");
    this.appendDummyInput()
        .appendField("relié aux pins")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN1")
        .appendField("et")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN2")
        .appendField(new Blockly.FieldImage("blocks/drissA4/cde_2_moteurs_cc.png", 150, 133, "*"));
    this.appendValueInput("SENS")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sens horaire");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissA4_1.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

//Arreter moteur CC OK
Blockly.Blocks.driss_A4_arreter_moteur_CC = {
  category: 'drissA4 : actionneurs',
  helpUrl: '',

  init: function() {
    this.appendDummyInput()
        .appendField("Arrêter le moteur ");
    this.appendDummyInput()
        .appendField("relié aux pins")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN1")
        .appendField("et")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN2")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissA4_1.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



//btn_white OK
Blockly.Blocks.driss_A4_btn_white = {
  category: 'drissA4 : capteurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4_2.HUE);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT5)
        .appendTitle(new Blockly.FieldImage("blocks/drissA4/btn_white.png", X, Y))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT7);
  }
};

//driss_A4_btn_relache OK
Blockly.Blocks.driss_A4_btn_relache1 = {
  category: 'drissA4 : capteurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4_2.HUE);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT8)
        //.appendTitle(new Blockly.FieldImage("blocks/drissA4/btn_white.png", 64, 40))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT9);
    //this.setOutput(true, 'Boolean');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT7);
  }
};

Blockly.Blocks.driss_A4_btn_relache = {
  category: 'drissA4 : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput("")
        .appendField("Attendre que le bouton sur la broche")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendField(" soit relâché");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(352);
    
  }


};


//Switch1 OK
Blockly.Blocks.driss_A4_fdc = {
  category: 'drissA4 : capteurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4_2.HUE);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT11)
        .appendTitle(new Blockly.FieldImage("blocks/drissA4/fdc.png", 64, 42))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT12);
  }
};



//ldr OK
Blockly.Blocks.driss_A4_ldr = {
  category: 'drissA4 : capteurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4_2.HUE);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT26)
        .appendTitle(new Blockly.FieldImage("blocks/drissA4/ldr.png", 64, 40))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT27);
  }
};

//pir OK
Blockly.Blocks.driss_A4_pir = {
  category: 'drissA4 : capteurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4_2.HUE);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT1)
        .appendTitle(new Blockly.FieldImage("blocks/drissA4/pir.png", 64, 64))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT20);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT21);
  }
};

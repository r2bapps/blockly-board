const EMAIL_ARG_FROM = 'from';
const EMAIL_ARG_TO = 'to';
const EMAIL_ARG_SUBJECT = 'subject';
const EMAIL_ARG_BODY = 'body';
const EMAIL_ARG_CC = 'cc';
const EMAIL_ARG_ATTACHMENTS = 'attachments';

const EMAIL = 'email';
const EMAIL_MESSAGE = `${EMAIL_ARG_FROM} %1 ${EMAIL_ARG_TO} %2 ${EMAIL_ARG_SUBJECT} %3 ${EMAIL_ARG_BODY} %4 ${EMAIL_ARG_CC} %5 ${EMAIL_ARG_ATTACHMENTS} %6`;
const EMAIL_COLOR = 75;
const EMAIL_TOOLTIP = 'Block que permite enviar e-mails';
const EMAIL_HELPURL = '';

const email = {
  "message0": EMAIL_MESSAGE,
  "args0": [
    {
      "type": "input_value",
      "name": EMAIL_ARG_FROM,
      "check": "String"
    },
    {
      "type": "input_value",
      "name": EMAIL_ARG_TO,
      "check": "String"
    },
    {
      "type": "input_value",
      "name": EMAIL_ARG_SUBJECT,
      "check": "String"
    },
    {
      "type": "input_value",
      "name": EMAIL_ARG_BODY,
      "check": "String"
    },
    {
      "type": "input_value",
      "name": EMAIL_ARG_CC,
      "check": "String"
    },
    {
      "type": "input_value",
      "name": EMAIL_ARG_ATTACHMENTS,
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": EMAIL_COLOR,
  "tooltip": EMAIL_TOOLTIP,
  "helpUrl": EMAIL_HELPURL
};

Blockly.Blocks[EMAIL] = {
  init: function() {
    this.jsonInit(email);
  }
};

Blockly.JavaScript[EMAIL] = function(block) {
  const from = Blockly.JavaScript.valueToCode(block, EMAIL_ARG_FROM, Blockly.JavaScript.ORDER_ATOMIC);
  const to = Blockly.JavaScript.valueToCode(block, EMAIL_ARG_TO, Blockly.JavaScript.ORDER_ATOMIC);
  const subject = Blockly.JavaScript.valueToCode(block, EMAIL_ARG_SUBJECT, Blockly.JavaScript.ORDER_ATOMIC);
  const body = Blockly.JavaScript.valueToCode(block, EMAIL_ARG_BODY, Blockly.JavaScript.ORDER_ATOMIC);
  const cc = Blockly.JavaScript.valueToCode(block, EMAIL_ARG_CC, Blockly.JavaScript.ORDER_ATOMIC);
  const attachments = Blockly.JavaScript.valueToCode(block, EMAIL_ARG_ATTACHMENTS, Blockly.JavaScript.ORDER_ATOMIC);
  return emailFunction(from, to, subject, body, cc, attachments);
};
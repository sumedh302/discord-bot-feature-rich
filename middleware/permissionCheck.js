const { allowedUserIds } = require('../config/allowedUsers');

function checkUserPermission(userId) {
  return allowedUserIds.includes(userId);
}

function createAccessDeniedEmbed() {
  return {
    embeds: [{
      color: 0xff0000,
      title: '🔒 Access Denied',
      description: 'You are not authorized to use this bot. Only specific users can access these commands.',
      fields: [
        {
          name: 'Authorized Users Only',
          value: 'This bot is restricted to a select group of users. If you believe you should have access, please contact the bot administrator.'
        }
      ],
      timestamp: new Date(),
      footer: {
        text: 'Discord Bot Security System'
      }
    }],
    ephemeral: true
  };
}

function createAccessDeniedMessage() {
  return {
    content: '❌ **Access Denied**\n\nYou are not authorized to use this bot. Only specific users can access these commands.',
    ephemeral: true
  };
}

module.exports = { 
  checkUserPermission, 
  createAccessDeniedEmbed, 
  createAccessDeniedMessage 
};

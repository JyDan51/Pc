'use strict';

/**
 * qr-something service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::qr-something.qr-something');

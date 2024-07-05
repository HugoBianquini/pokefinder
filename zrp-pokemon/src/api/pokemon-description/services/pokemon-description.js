'use strict';

/**
 * pokemon-description service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pokemon-description.pokemon-description');

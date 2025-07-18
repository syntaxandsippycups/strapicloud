"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = require("../../../../utils/email");
exports.default = {
    async afterCreate(event) {
        const { result } = event;
        const subscribers = await strapi.entityService.findMany('api::subscriber.subscriber', {
            fields: ['email'],
        });
        const subscribersTyped = subscribers;
        for (const sub of subscribersTyped) {
            if (sub.email) {
                await (0, email_1.sendNewPostEmail)(sub.email, result.title);
            }
        }
    },
};

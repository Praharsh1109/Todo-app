const zod = require("zod");

const createId = zod.object({
    id: zod.string(),
    description: zod.string()
});

module.exports = {
    createId
};

const {
    pagesDefs,
    contentDefs,
    generalDefs,
    casestudiesDefs,
    servicesDefs,
    articlesDefs,
    authorsDefs,
} = require("./typedefs");

module.exports = async ({ actions }) => {
    const { createTypes } = actions;

    const allTypeDefs = [
        pagesDefs,
        contentDefs,
        generalDefs,
        casestudiesDefs,
        servicesDefs,
        articlesDefs,
        authorsDefs,
    ];

    createTypes(allTypeDefs);
};

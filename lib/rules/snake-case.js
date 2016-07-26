module.exports = function snakeCase(context) {
    return {
        Identifier: function(node) {
            var variableNamePlusTwo = context.getSource(node, 0, 2);
nameWithMaybeColon[nameWithMaybeColon.length - 1]
            if (variableNamePlusTwo[variableNamePlusTwo.length -1] === "(" || variableNamePlusTwo[variableNamePlusTwo.length -2] === "(" ) {
                //Don't yell at functions
                return;
            }

            if (/[A-Z]/.test(variableName)) {
                        
                context.report(node, '`{{identifier}}` : Variable must be in snake case', {
                    identifier: node.name,
                });
            } else {
                return;
            }
        },
    };
};
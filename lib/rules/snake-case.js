module.exports = function snakeCase(context) {
    return {
        Identifier: function(node) {
            var variableName = context.getSource(node, 0, 1);

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
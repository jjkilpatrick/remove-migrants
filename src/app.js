(function() {

    //Native tree walker from:
    // http://stackoverflow.com/questions/2579666/getelementsbytagname-equivalent-for-textnodes
    var getTextNodesCollection = function() {
        var node, textNodes = [],
            walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT, // select only text nodes
            null,
            false
        );

        while(node = walker.nextNode()) {
            textNodes.push(node);
        }

        return textNodes;
    };

    var init = function() {
        document.title = replaceInstances(document.title);
        var textNodes = getTextNodesCollection();
        for (var i = 0; i < textNodes.length; i++) {
            textNodes[i].nodeValue = replaceInstances(textNodes[i].nodeValue);
        }
    };
    
    var replaceInstances = function(text) {
        if(text.match(/migrant/gi)){
            text = text.replace(/migrant/g, 'fellow human');
            text = text.replace(/Fellow Human/g, 'Fellow Human');
        }
        return text;
    };
    
    init();

})();
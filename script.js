(function(){
    const menu = document.getElementById("menu");

    for (const option of menu.children) {
        option.addEventListener("mouseenter",
            (event) => updateBlockDisplayState(event, 'block'), false);
    
        option.addEventListener("mouseleave", 
            (event) => updateBlockDisplayState(event, 'none'), false);
    }

    function updateBlockDisplayState(event, state) {
        if (event.target.id) {
            var block = document.getElementById('img-' + event.target.id);
            if (block) {
                block.style.display = state;
            }
        }
    }
})();
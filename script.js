
window.onload = function() {

    // creating div for each git command
    data_pt.forEach(function(entry){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = entry["title"]
        newDiv.className = 'fullheight parallax-window'
        newDiv.setAttribute("data-parallax", "scroll")
        newDiv.setAttribute("data-speed", "0.5")
        document.body.appendChild(newDiv);
    });
    
    // random colors for created divs
    var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
    var boxes = document.querySelectorAll(".fullheight");
    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }

}
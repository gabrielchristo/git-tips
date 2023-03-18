
window.onload = function()
{
	// create page
    init(data_en);
    
	// random colors for created divs
    setRandomColors();

	// refresh to parallax effect
	jQuery(window).trigger('resize').trigger('scroll');
}

function init(commands)
{
	// for each git command
	commands.forEach(function(entry)
	{
		// creating parallax div 
        var newDiv = document.createElement("div");
        newDiv.className = 'fullheight parallax-window';
        newDiv.setAttribute("data-parallax", "scroll");
        newDiv.setAttribute("data-speed", "0.5");
		newDiv.setAttribute("data-bleed", "5");

		// creating block div
		var blockDiv = document.createElement("div");
		blockDiv.className = 'command-block';

		// creating title
		var title = document.createElement("h2");
		title.innerText = entry["title"];
		blockDiv.appendChild(title);

		const MAX_VALUE = 7;
		for(let i = 1; i <= MAX_VALUE; i++)
		{
			// creating description and other texts
			if (entry["text_" + i] != undefined)
			{
				var description = document.createElement("p");
				description.innerText = entry["text_" + i];
				// append to command div
				blockDiv.appendChild(description);
			}
			// creating commands
			if (entry["command_" + i] != undefined)
			{
				var cmdDiv = document.createElement("div");
				cmdDiv.className = 'console-background';
				var cmd = document.createElement("p");
				cmd.className = 'console-text-own';
				cmd.innerText = entry["command_" + i];
				// append to command div
				cmdDiv.appendChild(cmd);
				blockDiv.appendChild(cmdDiv);
			}
		}

		// append to body
		newDiv.appendChild(blockDiv);
        document.getElementById("content").appendChild(newDiv);
    });
}

function setRandomColors()
{	
    var colors = ['tan', '#06406c', 'teal', 'saddlebrown', '#3700b3', '#b00020', '#f9a825', '#607d8b'];
    var boxes = document.querySelectorAll(".fullheight");
	var last_color;
    for (i = 0; i < boxes.length; i++)
	{
		// avoid sequence of same color
		color = colors[Math.floor(Math.random() * colors.length)];
		while(color == last_color) color = colors[Math.floor(Math.random() * colors.length)];

        boxes[i].style.backgroundColor = color;
		last_color = color;
    }
}

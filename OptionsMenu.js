var OptionsMenu = function(menu) {
    var menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", menu.id);
    menuDiv.setAttribute("style", "display: none; position: fixed; bottom: 0; width: 100%");
    var menuTable = document.createElement("table");
    menuTable.setAttribute("width", "100%");
    menuTable.setAttribute("cellpadding", "0");
    menuTable.setAttribute("cellspacing", "0");
    menuTable.appendChild(document.createElement("tr"));
    var width = Math.ceil(100 / menu.items.length) + "%";
    for (i in menu.items) {
        var menuItem = document.createElement("td");
        menuItem.setAttribute("align", "center");
        menuItem.setAttribute("width", width);
        menuItem.setAttribute("style", "color: white; border-top: 1px solid grey; border-right: 1px solid grey; background-color: black");
        menuItem.addEventListener("click", menu.items[i].action, false);
        menuItem.addEventListener("click", function() {
                document.getElementById(menu.id).style.display = 'none';
            }, false);
        var imgItem = document.createElement("img");
        imgItem.setAttribute("src", menu.items[i].image);
        menuItem.appendChild(imgItem);
        menuItem.appendChild(document.createElement("br"));
        menuItem.appendChild(document.createTextNode(menu.items[i].label));
        menuTable.appendChild(menuItem);
    }
    menuDiv.appendChild(menuTable);
    document.body.appendChild(menuDiv);
    
    // Listen for the menubutton event to hide/show the menu
    document.addEventListener("menubutton", function() {
        if (menuDiv.style.display == 'none') {
            menuDiv.style.display = 'block';
        } else {
            menuDiv.style.display = 'none';
        }
    }, false);
};

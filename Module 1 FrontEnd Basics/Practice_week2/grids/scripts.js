var iconList = document.querySelectorAll(".icon")

    iconList.forEach(function(icon)
    {
        iconList.addEventListener("click", function(event)
        {
            var divE1 = event.target.closest(".item")
        if(divE1.classList.contains("open"))
        {
            divE1.classList.remove("open")
        }
        else
        {
            divE1.classList.add("open")
        }
        })
        
    })

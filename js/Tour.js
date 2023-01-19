AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const BorderElement=this.createBoreder(position,item.id)
      const thumbnail=this.createThumbNail(item)
      BorderElement.appendChild(thumbnail)

      // Thumbnail Element
     
      // Title Text Element
      
      this.placesContainer.appendChild(BorderElement);
    }
  },
  createBoreder:function(position,id){
    const entylEY = document.createElement("a-entity")
    entylEY.setAttribute("id",id)
    entylEY.setAttribute("position",position)
    entylEY.setAttribute("visible",true)
    entylEY.setAttribute("geometry",{
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10,


    })
    entylEY.setAttribute("material",{
        color:'#0af',
        opacity:0.7

    })
    return entylEY;
  },
  createThumbNail:function(item){
    const Thumbi=document.createElement("a-entity")
    Thumbi.setAttribute("visible",true)
    Thumbi.setAttribute("geometry",{
      primitive:'circle',
      radius:7
    })
    Thumbi.setAttribute("material",{
      src:item.url
    })
    return Thumbi


  }

});

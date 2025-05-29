$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 0, 1400, 50, "black");  //first platform
    createPlatform(0, 200, 900, 50, "black"); //second platform
    createPlatform(500, 450, 1400, 50, "black"); //third platform
    createPlatform(0, 700, 1400, 50, "black"); //fourth platform
    createPlatform(0, 0, 50, 750, "black"); // left platform
    createPlatform(1350, 0, 50, 750, "black"); // upper right platform
    createPlatform(1150, 100, 50, 250, "black"); // first long platform
    createPlatform(1000, 300, 200, 50, "black"); // second bottom platform
    createPlatform(150, 350, 100, 150, "black");
    createPlatform(175, 350, 50, 10, "#add8e6");
    createPlatform(600, 150, 100, 50, "black");
    createPlatform(400, 650, 100, 100, "black");
    
    


    // TODO 3 - Create Collectables
    createCollectable("diamond", 500, 100, 0.7, 1.0);
    createCollectable("steve", 1250, 200, 0.7, 1.0);
    createCollectable("max", 100, 300, 0.7, 1.0);
    createCollectable("grace", 1250, 600, 0.7, 1.0);
    
    // TODO 4 - Create Cannons
    createCannon("top", 1350, 2000);
    createCannon("bottom", 100, 1100);
    createCannon("left", 430, 2000);
        //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

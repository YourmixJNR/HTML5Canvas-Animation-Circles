// Declare variables for canvas and 2D rendering context
var c;
var ctx;

// Initialize the canvas and context
function init() {
    c = document.getElementById("myCanvas"); // Get the canvas element by ID
    ctx = c.getContext("2d"); // Get the 2D rendering context
    draw(); // Call the draw function
}

// Function to draw animated shapes
function draw() {
    var posX = 0;
    var posY = 0;
    
    // Set up a recurring animation using setInterval
    setInterval(function() {
        posX += 1; // Increment X position
        posY += 1; // Increment Y position
        
        // Clear the canvas by drawing a black rectangle
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, c.width, c.height);
        
        // Draw a white circle with position changing on the X-axis
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(posX, 120, 55, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw a red circle with position changing on the Y-axis
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(150, posY, 78, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw a blue circle with position changing on the Y-axis
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(350, posY, 38, 0, Math.PI * 2);
        ctx.fill();
    }, 4); // Execute the animation loop every 4 milliseconds
}

     //// TODO:
     /*



     */

     //global variables
     let trees = [];

     //global functions
     function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
     }

     function probability(n) {
          return !!n && Math.random() <= n;
     }




     void setup() {
          size(400, 200);

          frameRate(10);
     }

     void draw() {
          background(220);
          trees.forEach(function(tree, index, trees) {
               for (let i = 0; i < tree.branchingFactor; i++) {
                    line(tree.x, tree.y, tree.x, tree.y - tree.height);

               }
          });

     }

     void mousePressed() {
          // The variable "key" always contains the value
          // of the most recent key pressed.
          trees.push({
               x: mouseX,
               y: mouseY,
               height: 50,
               branchingFactor: 5
          });

     }
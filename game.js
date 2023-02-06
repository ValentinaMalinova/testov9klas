// Suzdavame promenlivi
let myX, myY, x, y, razmerY=10, razmerX=10;
function update()
{}
function draw() {
    
    drawImage(backDesert, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);

    for(y=0;y<razmerY;y=y+1)
        for(x=0;x<razmerX;x=x+1)
        {
            /* първи начин
            if ((x+y)%2 == 0){
                drawImage(jelly[0], x*30, y*30, 29,29);
            } 
            else{
                drawImage(jelly[1], x*30, y*30, 29,29);
            }
            
            */
            // втори начин
            drawImage(jelly[(x+y)%2], x*30, y*30, 29,29);
        }
     
    
}


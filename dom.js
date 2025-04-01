let currentCount =1;
let brickArray = ['<div class ="brick"></div>'];

function addBrick (){
    if (currentCount <= 12){
    currentCount++;

    brickArray.puch('<div class="brick"></div>');
    document.getElementById("count").innerHTML = currentCount;

}
document.getElementById("count").innerHTML = currentCount;
document.getElementById("count").style.color ="#ffffff";
}

function removeBrick() {
    // process
    if (currentCount >= 1) {
        currentCount--;
        brickArray.pop();
        document.getElementById("right-container" ).innerHTML
    }
    document.getElementById("count").innerHTML = currentCount;
    document.getElementById("count").style.color="#E72929";
}
let theNum = 1;
let arr = ["img1", "img2", "img3"];
function change_src() { 
    let p = document.getElementById('pic'); 
    if(theNum == arr.length){
        theNum=0;
    }
    p.src=arr[theNum]+'.png';
    theNum++;
}
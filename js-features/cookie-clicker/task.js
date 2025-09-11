let clickerStatus = 0;
let isIncreasing = true;
 let element = document.getElementById("cookie");
 let cookieClick = document.getElementById("clicker__counter");

element.onclick = function incrementClickerStatus() {
            clickerStatus++;
            cookieClick.textContent = clickerStatus;
           
        if (isIncreasing) {
                element.style.width = '250px';
                element.style.height = '178px';
        } else {
                element.style.width = '200px';
                element.style.height = '128px';
        }
            
     
            isIncreasing = !isIncreasing;
        }

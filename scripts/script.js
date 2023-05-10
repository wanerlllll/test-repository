let answered=document.getElementsByClassName('input-container');
            let nextbtn=document.getElementById("nextbtn");
            for(i=0;i<answered.length;i++){
            answered[i].addEventListener("click",function(){
                nextbtn.style.display="inline";
            })};
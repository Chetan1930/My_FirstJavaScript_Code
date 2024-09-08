var btn = document.querySelector('button');

btn.addEventListener("click", function(){
    // alert("Ha! Ha! Welcome Chetan !!");
    var kyabola= prompt("kya aap mujhe pyaar krti ho ?? Yes/NO ");

    if(kyabola=="yes" || kyabola=="Yes" || kyabola=="y" || kyabola=="y"){
        btn.textContent = " Main bhi aapse bhut Pyaar krta hu";
    }
    else{

        btn.textContent = " Koi baat nhi krne lg jaogi :) ";

    }
})
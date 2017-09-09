var range1 = document.querySelector('.range1');
var range2 = document.querySelector('.range2');
var range3 = document.querySelector('.range3');
var groupRange = document.querySelector('.group-range');

var telaColor = document.querySelector('.tela-color');

var rgbCombinacao = document.querySelector('.rgbCombinacao');

var redColor, greenColor, blueColor;

groupRange.addEventListener('change', funcRange1);

function funcRange1() {
    var alvoEvento = event.target;
    
    if(alvoEvento.getAttribute('class').indexOf('range1') != -1){
        redColor = alvoEvento.value;
        console.log(redColor +' red');
    }else if(alvoEvento.getAttribute('class').indexOf('range2') != -1){
        greenColor = alvoEvento.value;
        console.log(greenColor+' green');
    }else if(alvoEvento.getAttribute('class').indexOf('range3') != -1){
        blueColor = alvoEvento.value; 
        console.log(blueColor+' blue');
    }
    
    rgbCombinacao.textContent = 'rgb('+redColor+','+greenColor+','+blueColor+')';
    telaColor.style.background = 'rgb('+redColor+','+greenColor+','+blueColor+')';
}

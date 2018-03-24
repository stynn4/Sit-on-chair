document.addEventListener('DOMContentLoaded', function(){

/* header, nestedMenu*/

    var button = document.querySelector('ul').firstElementChild,
        nestedList = document.querySelector('ul > li > ul');

    button.addEventListener('mouseover', function(){

        nestedList.style.display = 'block';

    });

    button.addEventListener('mouseout', function(){

        nestedList.style.display = 'none';

    });

/*imageSection*/

    var secondSectionDivs = document.querySelectorAll('.secondSection > div');

    for(var i=0; i<secondSectionDivs.length-1; i++){

        secondSectionDivs[i].addEventListener('mouseover', function(){

            this.children[0].style.display = 'none';

        });

        secondSectionDivs[i].addEventListener('mouseout', function(){

            this.children[0].style.display = 'block';
        });
    }

/*sliderSection*/

    var prevButton = document.querySelector('.arrowLeft'),
        nextButton = document.querySelector('.arrowRight'),
        chairList = document.querySelectorAll('.sliderElement');

    var index = 0;

    chairList[0].classList.add('visible');

    nextButton.addEventListener('click', function(){

        chairList.forEach(function(element){
            element.classList.remove('visible');
        });

        index++;

        if(index === chairList.length) {

            index = 0;

        }

        chairList[index].classList.add('visible');

    });

    prevButton.addEventListener('click', function(element){
       console.log('prevbutton');

       chairList.forEach(function(element){
           element.classList.remove('visible');
       });

       index--;

       if(index < 0) {

           index = chairList.length-1;

       }

       chairList[index].classList.add('visible');

    });

/*drop-downList*/



});
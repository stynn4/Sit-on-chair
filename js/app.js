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

        if(index >= chairList.length) {

            index = 0;

        }

        chairList[index].classList.add('visible');

    });

    prevButton.addEventListener('click', function(element){

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

    var listArrow = document.querySelectorAll('.list_arrow'),
        list = document.querySelectorAll('.list_panel'),
        listsChildren = list[0].children,
        transportField = document.getElementById('transport'),
        summaryColor = document.querySelector('.color'),
        summaryPattern = document.querySelector('.pattern'),
        summaryTransport = document.querySelector('.transport'),
        valueColor = document.querySelector('.color_value'),
        valuePattern = document.querySelector('.pattern_value'),
        valueTransport = document.querySelector('.transport_value');



    for(var i=0; i<listArrow.length; i++){
        listArrow[i].addEventListener('click', function(){

            if(this.nextElementSibling.style.display !== 'block') {
                this.nextElementSibling.style.display = 'block';
            }   else {
                this.nextElementSibling.style.display = 'none';
            }
        })

        for(var j=0; j<listArrow[i].nextElementSibling.children.length; j++){
            listArrow[i].nextElementSibling.children[j].addEventListener('click', function(){
                this.parentElement.style.display = 'none';
            })
        }

    }


        if(transportField.checked != true){
            console.log('not checked');
        } else {
        console.log( 'chcekd')
        }


/*
    listArrow[0].addEventListener('click', function(){

        if(list[0].style.display !== 'block'){
            list[0].style.display = 'block';
        }   else {
            list[0].style.display = 'none';
        }

    })


    listArrow[1].addEventListener('click', function(){

        if(list[1].style.display !== 'block'){
            list[1].style.display = 'block';
        }   else {
            list[1].style.display = 'none';
        }
    })


    listArrow[2].addEventListener('click', function(){

        if(list[2].style.display !== 'block'){
            list[2].style.display = 'block';
        }   else {
            list[2].style.display = 'none';
        }
    })



*/

});
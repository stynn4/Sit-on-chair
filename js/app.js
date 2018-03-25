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

    var listArrow = document.querySelectorAll('.list_arrow'),
        lists = document.querySelectorAll('.list_panel');

    console.log(listArrow[0].nextElementSibling.children[0]);


    /*for(var i=0; i<listArrow.length; i++){
        listArrow[i].addEventListener('click', function(){

                if(this.nextElementSibling.style.display !== 'block') {
                    this.nextElementSibling.style.display = 'block';
                }   else {
                    this.nextElementSibling.style.display = 'none';
                }



        })
    }
*/
console.log(lists);
console.log(lists[0]);
console.log(lists[0].children.length);
console.log(listArrow[0].nextElementSibling.children.length);

    for(var i=0; i<listArrow.length; i++){
        listArrow[i].addEventListener('click', function(){

            this.nextElementSibling.style.display = 'block';
        })

        for(var j=0; j<listArrow[i].nextElementSibling.children.length; j++){
            listArrow[i].nextElementSibling.children[j].addEventListener('click', function(){
                this.parentElement.style.display = 'none';
            })
        }

    }








});
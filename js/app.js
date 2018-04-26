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
        transportField = document.getElementById('transport'),
        checkboxLabel = document.querySelector('.checkbox > label'), 
        sum = document.querySelector('.sum'),
        img = document.querySelector('.image_part img');
        
    //rozwijanie listy   
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

    //checkbox transport
    transportField.addEventListener('click', function(){
        
        if(this.checked) {
           
            var transport = document.querySelector('.transport');
            var transportValue = document.querySelector('.panel_right .transport_value')
            
            checkboxLabel.classList.add('active');
            transport.innerText = checkboxLabel.innerText;
            transportValue.innerText = this.dataset.price;
            sum.innerText = Number(this.dataset.price) + Number(sum.innerText);
            
        } else {
          
            checkboxLabel.classList.remove('active');

        }
    })


    // summary
    for(var i=0; i<list[0].children.length; i++){

        list[0].children[i].addEventListener('click', function(){
        
            var title = document.querySelector('.panel_left .title');
            var titleValue = document.querySelector('.panel_right .title_value');
            
            title.innerText = this.innerText;
            titleValue.innerText = this.dataset.price;
            sum.innerText = Number(this.dataset.price);

            if(this.innerText === 'Clair'){

                img.setAttribute('src', 'images/red_chair.png');
                img.classList.remove('blackChair');
                img.classList.add('redChair');

            } else if (this.innerText === 'Margarita') {

                img.setAttribute('src', 'images/black_chair.png');
                img.classList.remove('redChair');
                img.classList.add('blackChair');

            } else if(this.innerText === 'Selena'){

                img.setAttribute('src', 'images/red_chair.png');
                img.classList.remove('blackChair');
                img.classList.add('redChair');

            }
        
        })
    }

    for(var i=0; i<list[1].children.length; i++){

        list[1].children[i].addEventListener('click', function(){
            
            var color = document.querySelector('.panel_left .color');
            var colorValue = document.querySelector('.panel_right .color_value');

            color.innerText = this.innerText;
            colorValue.innerText = this.dataset.price;
            sum.innerText = Number(this.dataset.price) + Number(sum.innerText);

        })
    }

    for(var i=0; i<list[2].children.length; i++){

        list[2].children[i].addEventListener('click', function(){

            var pattern = document.querySelector('.panel_left .pattern');
            var patternValue = document.querySelector('.panel_right .pattern_value');
     
            pattern.innerText = this.innerText;
            patternValue.innerText = this.dataset.price;
            sum.innerText = Number(this.dataset.price) + Number(sum.innerText);
            
        })
    }

    
});
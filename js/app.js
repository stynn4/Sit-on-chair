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

    var secondSectionDivs = document.querySelectorAll('.secondSection > div'),
        divWithTitle = document.querySelectorAll('.divTitle');

    for(var i=0; i<secondSectionDivs.length-1; i++){

        secondSectionDivs[i].addEventListener('mouseover', function(){

            this.children[0].style.display = 'none';

        });

        secondSectionDivs[i].addEventListener('mouseout', function(){

            this.children[0].style.display = 'block';
        });
    }




});
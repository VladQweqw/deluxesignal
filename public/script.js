$(() => {
    

    // navbar toggler
    let toggled = false;
    $('.hamburger').click(hamburgerAnim)
    $('.extenedNav- .navItem').click(hamburgerAnim)

    let line = $('.line');
    
    function hamburgerAnim() {

        if(!toggled) {
            
            line.eq(0).css({'transform':'rotate(45deg) translateY(14px)'})
            line.eq(1).css({'transform':'scale(0)'})
            line.eq(2).css({'transform':'rotate(-45deg) translateY(-14px)'})

            $('.extendedNav').addClass('extendedNavActive')
            console.log('active');
            toggled = true;
        }else {

            line.eq(0).css({'transform':'rotate(0) translateY(0)'})
            line.eq(1).css({'transform':'scale(1)'})
            line.eq(2).css({'transform':'rotate(0) translateY(0)'})

            $('.extendedNav').removeClass('extendedNavActive')

            console.log('dezactiv');

            toggled = false;
        }

    }

    // automaticaly close the extendeNav when a link is being clicked
        $('.extendedNav- .navItem').click(() => {
            $('.extendedNav').removeClass('extendedNavActive')

        })
            
 


    // slideshow
    let count =1;
    setInterval(() => {
        
        if(count === $('.slideshowImg').length ) {
            count = 0;
        }

        


        $('.slideshowImg').css({'transform':`translateX(${-count*100}%)`})

        count++;
        
    }, 3000);



})


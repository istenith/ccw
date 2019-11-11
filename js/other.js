var cards = document.getElementsByClassName('story-card');

for(let i=0;i<cards.length;i++) {
    cards[i].style.height = '100px';
}

function showMore(e)
{
    let currentHeight = e.target.style.height;
    if(currentHeight == '100px') {
        e.target.style.height = 'max-content';
    }
    else {
        e.target.style.height = '100px';
    }
    
}
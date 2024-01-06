function toggleAnswer(header){

var accordion = header.parentNode;
var content = accordion.querySelector('#accordion-detail');
var plusicon = accordion.querySelector('.fa-plus');

//only one accordion can be open
//loop through all accordion components
var allAccordions = document.querySelectorAll("#accordion");
//if there is a pane X open, and that pane is not the same as the clicked acrroding Y, close X (make sure not close Y)
function onlyOnePane(item){
    var itemContent = item.querySelector('#accordion-detail');
    if (itemContent && item !==accordion){
        itemContent.style.display= "none";
        item.querySelector('.fa-solid').classList.remove('fa-minus');
        item.querySelector('.fa-solid').classList.add('fa-plus');
    }
};

allAccordions.forEach(onlyOnePane);

//Toggle the content of clicked accordion component

if(content.style.display==='block'){
    content.style.display='none';
    accordion.querySelector('.fa-solid').classList.remove('fa-minus');
    accordion.querySelector('.fa-solid').classList.add('fa-plus');

}else{
    content.style.display='block';
    accordion.querySelector('.fa-solid').classList.remove('fa-plus');
    accordion.querySelector('.fa-solid').classList.add('fa-minus');

}



}
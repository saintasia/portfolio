document.getElementById('modal').innerHTML = `
<div class="modal">
    <a class="close">
        <span class="bar"></span>
        <span class="bar"></span>
    </a>
    <img src="">
</div>
`;

var modalBox = document.querySelector('.modal');

modalBox.addEventListener('click', function(event){
    event.preventDefault();
    if (this.classList.contains('mod-open')){
        this.classList.remove('mod-open');
        setTimeout(function(){
        modalBox.querySelector('img').src="";
        },300);
    }
});

function openImg(imgSrc){
    event.preventDefault();
    modalBox.querySelector('img').src=imgSrc;
    modalBox.classList.add('mod-open');
    
}

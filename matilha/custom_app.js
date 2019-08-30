function abrirBoxContato() {
    // var element = document.querySelector(".searchInput");
    // element.style.width = '300px';

    var elem = document.querySelector('.searchInput');

    document.body.addEventListener('click', function(e) {
        if (e.target == elem) {
            document.querySelector('.searchInput').style.width = '300px'
        } else {
            document.querySelector('.searchInput').style.width = '180px'
        }
    });
}
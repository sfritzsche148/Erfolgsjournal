let btn = document.getElementById('btn');

if (btn) {

    btn.addEventlistener('click', function() {
        btn.innerText = 'Hi';
    });
}
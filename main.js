let createnewjournalbtn = document.getElementById('#createnewjournalbtn');

if (createnewjournalbtn) {

    createnewjournalbtn.addEventlistener('click', function() {
        createnewjournalbtn.innerText = 'Hi';
    });
}
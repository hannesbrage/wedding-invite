document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let attend = document.getElementById('attend').value;
    let diet = document.getElementById('diet').value;

    document.getElementById('rsvp-form').style.display = "none";
    document.getElementById('confirmation').style.display = "block";
});
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let attend = document.getElementById('attend').value;
    let diet = document.getElementById('diet').value;

    let formUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";  
    let params = new URLSearchParams();
    params.append("entry.YOUR_FIELD_ID1", name);
    params.append("entry.YOUR_FIELD_ID2", attend);
    params.append("entry.YOUR_FIELD_ID3", diet);

    fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: params
    }).then(() => {
        document.getElementById('rsvp-form').style.display = "none";
        document.getElementById('confirmation').style.display = "block";
    }).catch(err => console.error(err));
});

const ridersEndpoint = "http://localhost:3000/api/v1/riders"

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!")
    const button = document.querySelector("button")

    fetchRiders(ridersEndpoint)

    button.addEventListener("click", function() {
        let html = `
        <form class="rider-form">    
            <input type="text" name="name" placeholder="Rider Name" id="rider-name">
            <br>
            <input type="text" name="rider-image" placeholder="Image URL" id="rider-image">
            <br>
            <select name="country" id="rider-country">
                <option value="1">Switzerland</option>
                <option value="2">Germany</option>
                <option value="3">Sweden</option>
                <option value="4">Belgium</option>
                <option value="5">Great Britain</option>
                <option value="6">USA</option>
                <option value="7">Ireland</option>
            </select>
            <br>
            <input type="text" name="points" placeholder="Rider Points" id="rider-points">
            <br>
            <input type="submit" name="submit" value="Submit" class="submit">
        </form>`
        document.querySelector('#container').innerHTML += html
        button.style.display = 'none';

        mountSubmitListener()
    })

})

function fetchRiders(ridersEndpoint) {
    fetch(ridersEndpoint)
    .then(res => res.json())
    .then(json => json.data.forEach(rider => {
        let newRider = new Rider(rider, rider.attributes)

        newRider.createTableRow()
    }))
    .catch(error => console.log(error))
}

function mountSubmitListener() {
    const form = document.querySelector(".rider-form")
    form.addEventListener("submit", (e) => createRiderFormHandler(e))
} 

function createRiderFormHandler(e) {
    e.preventDefault()

    const riderName = document.querySelector("#rider-name").value
    const riderImage = document.querySelector("#rider-image").value
    const riderPoints = document.querySelector("#rider-points").value
    const countryId = parseInt(document.querySelector("#rider-country").value)

    postFetch(riderName, riderImage, riderPoints, countryId)
}

function postFetch(name, image, points, country_id) {
    const riderData = {name, image, points, country_id}
    fetch(ridersEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(riderData)
    })
        .then(res => res.json())
        .then(rider => {
            createTableRow(rider.data)
    })
}


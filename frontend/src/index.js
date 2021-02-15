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
    .then(json => json.data.forEach(obj => {
        createTableRow(obj)
        
    }))
    .catch(error => console.log(error))
}

// function addRiderToTable(riderObj){
    // create table row, append to ranking table
    // create td for each and append to table row
// }

function createTableRow(riderObj){
    const rankingTable = document.getElementById("ranking-table")
    const row = document.createElement("tr")

    let ranking = document.createElement("td")
    ranking.innerHTML = 1

    let name = document.createElement("td")
    name.innerHTML = riderObj.attributes.name

    let country = document.createElement("td")
    country.innerHTML = riderObj.attributes.country.name
    
    // let flagImage = document.createElement("img")
    // flagImage.src = riderObj.attributes.country.flag_image
    // flag.appendChild(flagImage) 

    // let image = document.createElement("td")
    // image.innerHTML = riderObj.attributes.image

    let points = document.createElement("td")
    points.innerHTML = riderObj.attributes.points

    // addRiderToTable
    row.appendChild(ranking)
    row.appendChild(name)
    row.appendChild(country)
    // row.appendChild(flagimage)
    row.appendChild(points)

    rankingTable.appendChild(row)
}

function mountSubmitListener() {
    const form = document.querySelector(".rider-form")
    form.addEventListener("submit", (e) => createRiderFormHandler(e))
} 


function createRiderFormHandler(e) {
    e.preventDefault()

    const riderName = document.querySelector("#rider-name").value
    const riderPoints = document.querySelector("#rider-points").value
    const countryId = parseInt(document.querySelector("#rider-country").value)

    postFetch(riderName, riderPoints, countryId)
}

function postFetch(name, points, country_id) {
    console.log(name, points, country_id)

    fetch(endpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            // rider attributes
        })
    })
        .then(res => res.json())
        .then(rider => {
            console.log(rider)
    })
}
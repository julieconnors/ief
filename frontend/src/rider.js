console.log("rider")
class Rider {
    constructor(rider, riderAttributes){
        this.id = rider.id
        // debugger
        this.name = riderAttributes.name
        this.image = riderAttributes.image
        this.points = riderAttributes.points
        this.country = riderAttributes.country
        // debugger
        Rider.all.push(this)
    }

    createTableRow() {
        const rankingTable = document.getElementById("ranking-table")
        const row = document.createElement("tr")
    
        let ranking = document.createElement("td")
        ranking.innerHTML = 1
    
        let name = document.createElement("td")
        name.innerHTML = this.name
    
        let country = document.createElement("td")
        country.innerHTML = this.name
        
        // let flagImage = document.createElement("img")
        // flagImage.src = riderObj.attributes.country.flag_image
        // flag.appendChild(flagImage) 
    
        let imageCell = document.createElement("td")
        let image = document.createElement("img")
        image.src = this.image
        imageCell.appendChild(image)
    
        let points = document.createElement("td")
        points.innerHTML = this.points
    
        // addRiderToTable
        row.appendChild(ranking)
        row.appendChild(name)
        row.appendChild(image)
        row.appendChild(country)
        // row.appendChild(flagimage)
        row.appendChild(points)
    
        // add row to table
        rankingTable.appendChild(row)
        return rankingTable
    }

}

Rider.all = []

/*
async function loadJSON() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}
data = loadJSON();
*/
data  = [
    {
        "type": "Vegetables",
        "name": "BZengan",
        "n_review": 10,
        "rating": 5,
        "price": "$30",
        "img": "images/food1.png"

    }
    ,
    {
        "type": "Juice",
        "name": "schweeps Orange",
        "n_review": 91,
        "rating": 1,
        "price": "$20",
        "img": "images/schweeps.png"

    }
    ,
    {
        "type": "Olive",
        "name": "Mkhll Olive",
        "n_review": 1000,
        "rating": 4,
        "price": "$30",
        "img": "images/olive.png"

    },
    {
        "type": "Fruit",
        "name": "Orange",
        "n_review": 100,
        "rating": 3,
        "price": "$50",
        "img": "images/orange.png"

    }
];
grid_food_place = document.getElementById("grid_food")

for (let i in data) {
    let stars = "";
    for (let j = 0; j < data[i].rating; j++) {
        stars += `<i class="bi bi-star-fill" style="color: #F7A145;"></i>`;
    }
    for (let j = 0; j < (5 - data[i].rating); j++) {
        stars += `<i class="bi bi-star"></i>`;
    }
    grid_food_place.innerHTML = grid_food_place.innerHTML += `
<div class="grid_food_item">

                <img src="${data[i]["img"]}" alt="Logo" class="img-fluid row_nav_item">
                <br>
                <text class="text-lg" style="color: #2C9594;">${data[i]["type"]}</text><br>
                <B>${data[i]["name"]}</B><br>
                <div class="stars">
                ${stars}
                    &nbsp;
                    (${data[i]["n_review"]} reviews)

                </div>
                <text style="color: #2C9594;">
                    ${data[i]["price"]}
                </text>
            </div>
`

}

// now it open but with cors problem --> need to test in live server mode like python
// Remain : just finish small things to be all ok but at least done
class Item {
  constructor(id, name, price, imageURL) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageURL = imageURL;
  }
}

let itemArray = [
  new Item(
    1,
    "T-shirt",
    15.99,
    "https://mms-images-prod.imgix.net/mms/images/catalog/6f38c951f2eb06a5c60c994971941281/colors/116200/views/alt/front_medium_extended.png?dpr=1.2&auto=format&nrs=0&w=320"
  ),
  new Item(
    2,
    "Jacket",
    50,
    "https://5.imimg.com/data5/NM/LX/MY-42532489/mens-black-jacket-500x500.jpg"
  ),
  new Item(
    3,
    "Women winter boots",
    70,
    "https://ae01.alicdn.com/kf/HTB1ZIXGhxTpK1RjSZFGq6AHqFXae/Women-Boots-Waterproof-Winter-Shoes-Women-Snow-Boots-Platform-Keep-Warm-Ankle-Winter-Boots-With-Thick.jpg_Q90.jpg_.webp"
  ),

  new Item(4, "Men scarf", 10, "https://static.falke.com/pdmain/493144.jpg"),
  new Item(
    5,
    "Backpack",
    50,
    "https://cdn1.static-tgdp.com/ui/productimages/approved/std.lang.all/40/96/634096_sized_1800x1200_rev_1.jpg"
  ),
  new Item(
    6,
    "Laptop bag",
    30,
    "https://cdn1.static-tgdp.com/ui/productimages/approved/std.lang.all/95/39/689539_sized_1800x1200_rev_2.jpg"
  ),
];

function loadItems() {
  /* Function that would load the items from the array itemArray. BUT
  it will also generate the HTML based on the bootstrap CARD element and fill it up with 
  data
  */
  for (let index = 0; index < itemArray.length; index++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add("custom-card");

    let imageEl = document.createElement("img");
    imageEl.src = itemArray[index].imageURL;
    imageEl.classList.add("card-img-top");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let heading = document.createElement("h5");
    heading.innerText = itemArray[index].name;

    let parSection = document.createElement("p");
    parSection.classList.add("card-text");
    parSection.innerHTML = "Price: " + itemArray[index].price;

    let cardButton = document.createElement("a");
    cardButton.classList.add("btn");
    cardButton.classList.add("btn-primary");
    cardButton.href = "#";
    cardButton.innerText = "Add to cart";

    cardBody.appendChild(imageEl);
    cardBody.appendChild(heading);
    cardBody.appendChild(parSection);
    cardBody.appendChild(cardButton);

    cardDiv.appendChild(cardBody);
    document.getElementById("item-container").appendChild(cardDiv);
  }
}

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

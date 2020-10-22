const devFestUrl = "https://devfest2018.gdgnantes.com/";

async function app() {
  const dataBlogDevfest = await fetch(
    "https://devfest-nantes-2018-api.cleverapps.io/blog"
  );

  const dataJson = await dataBlogDevfest.json();

  const blogContentEl = document.getElementById("blog-content");

  for (const cardData of dataJson) {
    const card = document.createElement("ion-card");

    const cardHeader = document.createElement("ion-card-header");

    const cardImg = document.createElement("ion-img");
    cardImg.src = devFestUrl + cardData.image;
    card.appendChild(cardImg);

    const cardTitle = document.createElement("ion-card-title");
    cardTitle.appendChild(document.createTextNode(cardData.title));
    cardHeader.appendChild(cardTitle);

    card.appendChild(cardHeader);

    const cardContent = document.createElement("ion-card-content");
    cardContent.appendChild(document.createTextNode(cardData.brief));
    card.appendChild(cardContent);

    blogContentEl.appendChild(card);
  }
}

app();

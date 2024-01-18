import { details, myData } from "./main.js";

// display games items
function display(items) {
  let cartona = ``;
  for (const item of items) {
    cartona += `
      <div class="col-md-6 col-lg-4 col-xxl-3">
      <div class="card item" id="${item.id}" role="button">
          <div class="card-body">
              <figure>
                  <img src="${
                    item.thumbnail
                  }" class="card-img-top w-100" alt="...">
              </figure>
              <figCaption>
                  <div class="d-flex justify-content-between align-items-center">
                      <h6 class="small">${item.title}</h6>
                      <span class="badge badge-color">Free</span>
                  </div>
                  <p class="card-text small text-center opacity-50">${item.short_description.split(
                    " ",
                    8
                  )}</p>
              </figCaption>
          </div>
          <footer class="card-footer justify-content-between d-flex align-items-center">
              <span class="badge bg-dark">${item.genre}</span>
              <span class="badge bg-dark">${item.platform}</span>
          </footer>
      </div>
  </div>
      `;
  }
  myData.innerHTML = cartona;
}

// display game details
function detailsDisply(data) {
  details.innerHTML = ` 
    <div class="col-md-4">
    <img class="w-100" src="${data.thumbnail}" alt="">
    </div>
  <div class="col-md-8 text-white">
    <h3 class="title">Title: ${data.title}</h3>
    <p>Category: <span class="badge bg-info text-dark text-uppercase">${data.genre}</span></p>
    <p>Plateform: <span class="badge bg-info text-dark">${data.platform}</span></p>
    <p>Status: <span class="badge bg-info text-dark">${data.status}</span></p>
    <p class="small">${data.description}</p>
    <a href="${data.game_url}" target="_blank" class="btn btn-outline-warning text-white">Show Game</a>
  </div>
    `;
}

export { display, detailsDisply };

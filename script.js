let countries = [
        ["Belize","https://t4.ftcdn.net/jpg/00/98/40/01/240_F_98400164_s5EVeMKkubWkDJm7c3XV2or52KhHOG16.jpg"
],
["Guatemala", "https://t3.ftcdn.net/jpg/02/52/30/18/240_F_252301868_eh4aZZ7dradxlWOpnDTPmFgOdjB7lCIG.jpg"],
["El Salvador", "https://t4.ftcdn.net/jpg/01/98/70/77/240_F_198707794_ZnsKuST4KTJ563YlD6GsqtkVpXdsdBt2.jpg"],
["Honduras", "https://t3.ftcdn.net/jpg/03/05/12/58/240_F_305125827_VgnBKPGAd4bSr8M1maRmSykwgsJORDSm.jpg"],
["Nicaragua", "https://t3.ftcdn.net/jpg/00/39/41/10/240_F_39411044_EYgDmUPdgVfsuhyvPtd5uxW2vY216P1A.jpg"],
["Costa Rica", "https://t3.ftcdn.net/jpg/01/14/72/26/240_F_114722654_5N3GuLw9C5kNb5Umqbl2g3nFr2e0XzcS.jpg"],
["Panama", "https://t4.ftcdn.net/jpg/01/33/93/69/240_F_133936951_SEw4hzrRBHTudeXqn2GQ8eEpx64f66VP.jpg"]
]

let content = "";

countries.forEach(p => {
    content += `<div class="card" style="width: 18rem;">
    <img src="${p[1]}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${p[0]}</h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
    </div>
  </div>`
})

document.querySelector("#country").innerHTML = content;
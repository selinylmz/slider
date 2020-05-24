var models = [
  {
    name: "Bmw 418d",
    image: "img/bmw.jpg",
    link:
      "http://www.arabalar.com.tr/static-res/image/versiyon/660x495/bmw/4-serisi/coupe/2013/2013-bmw-4-serisi-coupe-11.jpg",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
    link:
      "http://www.arabalar.com.tr/static-res/image/versiyon/660x495/mazda/3/hb/2017/2017-mazda-3-hb-05.jpg",
  },
  {
    name: "Volvo S60",
    image: "img/volvo.jpg",
    link:
      "http://www.arabalar.com.tr/static-res/image/haber/750x406/15587798798571.jpg",
  },
  {
    name: "Skoda superb",
    image: "img/skoda.jpg",
    link:
      "http://www.arabalar.com.tr/static-res/image/versiyon/660x495/bmw/4-serisi/coupe/2013/2013-bmw-4-serisi-coupe-11.jpg",
  },
  {
    name: "Skoda superb",
    image: "img/skoda.jpg",
    link:
      "http://www.arabalar.com.tr/static-res/image/versiyon/660x495/bmw/4-serisi/coupe/2013/2013-bmw-4-serisi-coupe-11.jpg",
  },
];
var index = 0;
var slaytCount = models.length;

document.querySelector(".fa-arrow-circle-left").addEventListener("click", function () {
    index++;
    showSlide(index);
  });
document.querySelector(".fa-arrow-circle-right").addEventListener("click", function () {
    index--;
    showSlide(index);
  });
function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;
  document.querySelector(".card-img-top").setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}

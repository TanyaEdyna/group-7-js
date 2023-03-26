// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

fetch(
  "https://pixabay.com/api/?key=34744066-258cb09888b79ff1454a5a6f0&image_type=photo&category=industry&q=cats"
)
  .then((res) => res.json())
  .then((data) => galleryMarkup(data.hits))
  .catch((err) => console.log(err));

function markup(el) {
  const img = document.createElement('img');
  img.src = el.webformatURL;
  img.width = 250;
  gallery.appendChild(img);
}

const gallery = document.querySelector('.gallery-js');

function galleryMarkup(elements) {
  for (const el of elements) {
  markup(el)
}
}


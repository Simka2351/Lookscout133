const boxes = [
    {
        id: 1,
        imageSrc: './Landing-Page-Img/placeholder.svg',
        title: 'Wireless',
        text: 'Enim nec rhoncus volutpat nullam eros sapien pharetra.',
    }, {
        id: 2,
        imageSrc: './Landing-Page-Img/placeholder2.svg',
        title: 'Wireless',
        text: 'Enim nec rhoncus volutpat nullam eros sapien pharetra.',
    }, {
        id: 3,
        imageSrc: './Landing-Page-Img/placeholder3.svg',
        title: 'Wireless',
        text: 'Enim nec rhoncus volutpat nullam eros sapien pharetra.',
    }, {
        id: 4,
        imageSrc: './Landing-Page-Img/placeholder4.svg',
        title: 'Wireless',
        text: 'Enim nec rhoncus volutpat nullam eros sapien pharetra.',
    }, {
        id: 5,
        imageSrc: './Landing-Page-Img/placeholder5.svg',
        title: 'Wireless',
        text: 'Enim nec rhoncus volutpat nullam eros sapien pharetra.',
    }, {
        id: 6,
        imageSrc: './Landing-Page-Img/placeholder6.svg',
        title: 'Wireless',
        text: 'Enim nec rhoncus volutpat nullam eros sapien pharetra.',
    }
];

const boxesGrid = document.querySelector('.boxes-grid');

for (const box of boxes) {
    renderBox(box);
}

function renderBox(box) {
    const boxCard = document.createElement('div');
    boxesGrid.append(boxCard);
    boxCard.outerHTML = `
    <div class="box-card" id="box${box.id}">
    <div class="img-button">
      <img src="${box.imageSrc}" alt="">
      <a href="#">
        <button>Show more</button>
      </a>
    </div>
    <div class="title">${box.title}</div>
    <div class="text">${box.text}</div>
  </div>`;
}

const secondBox = document.querySelector('#box2')
const lastBox = secondBox.nextElementSibling.nextElementSibling;

console.log(document.body);
//alert('Hello');
const link = document.querySelector('a');
link.textContent = 'Best Website in the world';
link.href = 'http://www.lostfilm.tv/';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
const clonedText = text.cloneNode(true);
sect.appendChild(clonedText);
//setTimeout(()=>sect.removeChild(clonedText), 2000);
setTimeout(() => clonedText.parentNode.removeChild(clonedText), 2000);

para.classList.add('selected');

//not recomended:
// para.style.color = 'white';
// para.style.backgroundColor = 'black';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';

// Clock
const clockContainer = document.querySelector('.clock');
setInterval(() => clockContainer.innerText = (new Date()).toLocaleTimeString(), 1000);


const products = [{
        title: 'Tesla X',
        price: 120000
    },
    {
        title: 'Lexus',
        price: 50000
    },
    {
        title: 'Honda',
        price: 30000
    },
    {
        title: 'Lamborghini',
        price: 400000
    }
];
//products.sort( (a,b) => a.price - b.price);
products.push({ title: 'Daewoo', price: 5000 });

products.sort((a, b) => a.title < b.title
                        ? -1 : a.title > b.title
                        ? 1 : 0
                        );

const priceList = document.querySelector('.price-list');
for (const product of products) {
    const productPara = document.createElement('p');
    productPara.textContent = `Title: ${product.title}, Price: ${product.price}`;
    priceList.appendChild(productPara);
}

const clockToggleButton = document.querySelector('.clockToggle');
clockToggleButton.addEventListener('click', clockToggle);



// jQuery Sample
$('.toggle-pars').click( () => $('p').toggle(3000) );



const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
digits.forEach( btn => btn.addEventListener('click', digitPressed) );
function digitPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}
const opers = document.querySelectorAll('.opers button');
opers.forEach( btn => btn.addEventListener('click', operPressed) );
function operPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

document.querySelector('.equal').addEventListener('click', equalPressed);
function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}





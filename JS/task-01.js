const categoriesEll = document.querySelector('#categories');
const itemEl = [...categoriesEll.querySelectorAll('.item')];

console.log(`Number of categories: ${itemEl.length}\n`);

itemEl.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const length = item.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Category: ${length}\n`);
})
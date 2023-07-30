const categoriesEll = document.querySelector('#categories');
const itemEL = [...categoriesEll.querySelectorAll('.item')];

console.log(`Number of categories: ${itemEL.length}\n`);

itemEL.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const length = item.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Category: ${length}\n`);
})
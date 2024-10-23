const recipes = [
    {
        id: 1,
        title: 'Борщ',
        category: 'first',
        image: 'image/borch.jpeg',
        description: 'Традиційна українська страва з буряком, м\'ясом та овочами.',
        instructions: '1. Підготувати інгредієнти. 2. Приготувати м\'ясний бульйон. 3. Додати овочі та варити до готовності.'
    },
    {
        id: 9,
        title: 'Суп з грибами',
        category: 'first',
        image: 'image/gribny-soup.jpg',
        description: 'Легкий суп з білими грибами та картоплею.',
        instructions: '1. Очистити і нарізати гриби. 2. Підсмажити на сковороді, додати цибулю. 3. Додати картоплю та бульйон, варити до готовності.'
    },
    {
        id: 10,
        title: 'Курячий суп',
        category: 'first',
        image: 'image/chicken-soup.jpg',
        description: 'Легкий курячий суп з овочами.',
        instructions: '1. Підготувати куряче м\'ясо. 2. Додати моркву, цибулю і варити до готовності. 3. Додати картоплю, спеції та варити на слабкому вогні.'
    },
    {
        id: 11,
        title: 'Білий суп',
        category: 'first',
        image: 'image/white-soup.jpg',
        description: 'Кремовий суп на основі вершків з білими грибами.',
        instructions: '1. Підсмажити білі гриби. 2. Додати вершки та варити до загусання. 3. Перебити у блендері до кремової консистенції.'
    },
    {
        id: 12,
        title: 'Сирний суп',
        category: 'first',
        image: 'image/cheese-soup.jpg',
        description: 'Сирний суп з овочами та плавленим сиром.',
        instructions: '1. Підсмажити овочі. 2. Додати плавлений сир і варити до розчинення. 3. Додати бульйон і довести до кипіння.'
    },
    {
        id: 13,
        title: 'Бограч',
        category: 'first',
        image: 'image/bograch.jpg',
        description: 'Густий суп угорської кухні з м\'ясом і паприкою.',
        instructions: '1. Підсмажити цибулю і м\'ясо. 2. Додати паприку, картоплю і варити до готовності.'
    },
    {
        id: 2,
        title: 'Вареники з картоплею',
        category: 'second',
        image: 'image/vareniki.jpg',
        description: 'Вареники з начинкою з картоплі та цибулі.',
        instructions: '1. Зробити тісто. 2. Підготувати начинку з картоплі. 3. Заліпити вареники і зварити їх у киплячій воді.'
    },
    {
        id: 14,
        title: 'Салат Цезарь',
        category: 'second',
        image: 'image/caesar-salad.jpg',
        description: 'Класичний салат з куркою, сухариками і соусом Цезар.',
        instructions: '1. Змішати нарізану курку, листя салату і сухарики. 2. Додати соус Цезар.'
    },
    {
        id: 15,
        title: 'Карбонара',
        category: 'second',
        image: 'image/carbonara.jpg',
        description: 'Італійська паста з соусом на основі яйця і бекону.',
        instructions: '1. Підсмажити бекон. 2. Змішати яйце і сир. 3. Додати пасту до бекону і змішати з соусом.'
    },
    {
        id: 16,
        title: 'Голубці',
        category: 'second',
        image: 'image/holubci.jpg',
        description: 'Традиційні українські голубці з фаршем і рисом.',
        instructions: '1. Загорнути фарш і рис у капустяні листи. 2. Тушкувати в томатному соусі до готовності.'
    },
    {
        id: 4,
        title: 'Бельгійські вафлі',
        category: 'dessert',
        image: 'image/waffles.jpg',
        description: 'Легкі та хрусткі вафлі, ідеальні для сніданку.',
        instructions: '1. Змішати борошно, цукор, розпушувач і дрібку солі. 2. Окремо збити яйця та молоко, додати розтоплене вершкове масло. 3. Випікати у вафельниці до золотистого кольору.'
    },
    {
        id: 6,
        title: 'Млинці',
        category: 'dessert',
        image: 'image/mlynci.jpg',
        description: 'Тонкі млинці на молоці.',
        instructions: '1. Збити яйця з цукром. 2. Додати молоко, борошно і сіль, перемішати до однорідності. 3. Випікати млинці на гарячій сковороді до золотистого кольору.'
    },
    {
        id: 17,
        title: 'Пиріжки з вишнею',
        category: 'dessert',
        image: 'image/cherry-pirog.jpg',
        description: 'Домашні пиріжки з солодкою вишневою начинкою.',
        instructions: '1. Зробити тісто і начинку з вишні. 2. Сформувати пиріжки і випікати до золотистого кольору.'
    },
    {
        id: 18,
        title: 'Рахат-лукум',
        category: 'dessert',
        image: 'image/rahat-lukum.jpg',
        description: 'Турецький десерт з цукру, крохмалю і ароматизаторів.',
        instructions: '1. Варити суміш з цукру і крохмалю до загусання. 2. Охолодити і нарізати на кубики.'
    },
    {
        id: 7,
        title: 'Лимонад',
        category: 'drink',
        image: 'image/lemonade.jpg',
        description: 'Освіжаючий лимонний напій.',
        instructions: '1. Вичавити лимони. 2. Додати воду та цукор. 3. Добре перемішати і додати лід.'
    },
    {
        id: 8,
        title: 'Молочний коктейль',
        category: 'drink',
        image: 'image/milkshake.jpg',
        description: 'Ніжний напій з молока та морозива.',
        instructions: '1. Змішати молоко з морозивом у блендері. 2. Подавати з трубочкою.'
    },
    {
        id: 19,
        title: 'Узвар',
        category: 'drink',
        image: 'image/uzvar.jpg',
        description: 'Традиційний український напій з сухофруктів.',
        instructions: '1. Залити сухофрукти водою і варити до кипіння. 2. Настояти і охолодити перед подачею.'
    },
    {
        id: 20,
        title: 'Домашній квас',
        category: 'drink',
        image: 'image/kvas.jpg',
        description: 'Квас на основі чорного хліба та дріжджів.',
        instructions: '1. Залити хліб окропом. 2. Додати дріжджі і залишити для бродіння.'
    }
];

// Елементи DOM
const recipeContainers = {
    first: document.getElementById('recipes-first'),
    second: document.getElementById('recipes-second'),
    dessert: document.getElementById('recipes-desserts'),
    drink: document.getElementById('recipes-drinks')
};
const searchInput = document.getElementById('search');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('recipe-title');
const modalImage = document.getElementById('recipe-image');
const modalDescription = document.getElementById('recipe-description');
const modalInstructions = document.getElementById('recipe-instructions');
const closeModal = document.querySelector('.close');

// Відображення рецептів за категоріями
function displayRecipes(recipes) {
    Object.keys(recipeContainers).forEach(key => {
        recipeContainers[key].innerHTML = '';
    });
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
        `;
        recipeCard.addEventListener('click', () => showRecipeDetails(recipe));
        recipeContainers[recipe.category].appendChild(recipeCard);
    });
}

// Показати деталі рецепту
function showRecipeDetails(recipe) {
    modalTitle.textContent = recipe.title;
    modalImage.src = recipe.image;
    modalDescription.textContent = recipe.description;
    modalInstructions.textContent = recipe.instructions;
    modal.classList.add('show');
}

// Закриття модального вікна
closeModal.addEventListener('click', function() {
    modal.classList.remove('show');
});

// Закриття при кліку на фон
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

// Пошук рецептів
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm)
    );
    displayRecipes(filteredRecipes);
});

// Початкове відображення всіх рецептів
displayRecipes(recipes);
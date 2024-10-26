const recipes = [
    
        {
            id: 1,
            title: 'Борщ',
            category: 'first',
            image: 'image/borch.jpg',
            description: 'Традиційна українська страва з буряком, м\'ясом та овочами.',
            instructions: `1. Підготуйте м'ясо, буряк, картоплю, капусту, моркву, цибулю та інші овочі.
                          2. Зваріть м'ясний бульйон, знімаючи піну по мірі необхідності.
                          3. Додайте нарізані буряки і трохи оцту для збереження кольору.
                          4. Додайте картоплю, капусту та інші овочі в бульйон, варіть до м'якості.
                          5. Приправте спеціями та часником, дайте настоятись перед подачею.`
        },
        {
            id: 9,
            title: 'Суп з грибами',
            category: 'first',
            image: 'image/gribny-soup.jpg',
            description: 'Легкий суп з білими грибами та картоплею.',
            instructions: `1. Очистіть і наріжте гриби, ретельно промийте їх.
                          2. Підсмажте гриби з цибулею на невеликій кількості олії.
                          3. Додайте очищену та нарізану картоплю в каструлю з водою.
                          4. Додайте підсмажені гриби з цибулею в суп і варіть до готовності.
                          5. Приправте сіллю, перцем та зеленню, дайте настоятись перед подачею.`
        },
        {
            id: 10,
            title: 'Курячий суп',
            category: 'first',
            image: 'image/chicken-soup.jpg',
            description: 'Легкий курячий суп з овочами.',
            instructions: `1. Підготуйте куряче м'ясо, видаліть кістки та шкіру за необхідності.
                          2. Зваріть бульйон з курятини, знімаючи піну під час кипіння.
                          3. Додайте нарізані моркву і цибулю в бульйон, варіть до м'якості.
                          4. Додайте картоплю і варіть, поки всі овочі не стануть м'якими.
                          5. Приправте сіллю, зеленню, можна додати лавровий лист.`
        },
        {
            id: 11,
            title: 'Білий суп',
            category: 'first',
            image: 'image/white-soup.jpg',
            description: 'Кремовий суп на основі вершків з білими грибами.',
            instructions: `1. Підготуйте та наріжте гриби, промийте їх і підсушіть.
                          2. Підсмажте гриби на сковороді до золотистого кольору.
                          3. Додайте вершки та бульйон, перемішайте та доведіть до кипіння.
                          4. Варіть на слабкому вогні до загусання, час від часу помішуючи.
                          5. Перебийте суп у блендері до кремової консистенції, подавайте гарячим.`
        },
        {
            id: 12,
            title: 'Сирний суп',
            category: 'first',
            image: 'image/cheese-soup.jpg',
            description: 'Сирний суп з овочами та плавленим сиром.',
            instructions: `1. Підготуйте овочі, наріжте їх кубиками.
                          2. Підсмажте овочі на сковороді до золотистого кольору.
                          3. Додайте плавлений сир до овочів, перемішайте до розчинення.
                          4. Залийте овочі бульйоном і доведіть до кипіння, зменшіть вогонь.
                          5. Приправте сіллю, перцем і подайте зі свіжим хлібом.`
        },
        {
            id: 13,
            title: 'Бограч',
            category: 'first',
            image: 'image/bograch.jpeg',
            description: 'Густий суп угорської кухні з м\'ясом і паприкою.',
            instructions: `1. Підсмажте нарізану цибулю до прозорості на великій сковороді.
                          2. Додайте м'ясо та підсмажте до золотистого кольору.
                          3. Додайте паприку, інші спеції та перемішайте з м'ясом.
                          4. Додайте картоплю та інші овочі, залийте водою і варіть до готовності.
                          5. Подавати гарячим, прикрасивши свіжою зеленню.`
        },
        {
            id: 2,
            title: 'Вареники з картоплею',
            category: 'second',
            image: 'image/vareniki.jpg',
            description: 'Вареники з начинкою з картоплі та цибулі.',
            instructions: `1. Приготуйте тісто, змішавши борошно, воду і сіль.
                          2. Зваріть картоплю, розімніть її та додайте підсмажену цибулю.
                          3. Заліпіть вареники з картопляною начинкою.
                          4. Зваріть вареники в підсоленій киплячій воді до готовності.
                          5. Подавайте зі сметаною або обсмаженою цибулею.`
        },
        {
            id: 14,
            title: 'Салат Цезарь',
            category: 'second',
            image: 'image/caesar-salad.jpg',
            description: 'Класичний салат з куркою, сухариками і соусом Цезар.',
            instructions: `1. Наріжте куряче філе, підсмажте його до готовності.
                          2. Підготуйте листя салату, промийте та підсушіть.
                          3. Поріжте багет на кубики і підсмажте для сухариків.
                          4. Змішайте всі інгредієнти з соусом Цезар.
                          5. Прикрасьте пармезаном та подавайте одразу.`
        },
        {
            id: 15,
            title: 'Карбонара',
            category: 'second',
            image: 'image/carbonara.jpg',
            description: 'Італійська паста з соусом на основі яйця і бекону.',
            instructions: `1. Підсмажте бекон до хрусткості на сковороді.
                          2. Змішайте яйця з натертим сиром, додайте спеції.
                          3. Відваріть пасту аль денте, збережіть трохи води.
                          4. Додайте пасту до бекону і змішайте з яєчно-сирною сумішшю.
                          5. Додайте трохи води від пасти для кремової текстури.`
        },
        {
            id: 16,
            title: 'Голубці',
            category: 'second',
            image: 'image/holubci.jpg',
            description: 'Традиційні українські голубці з фаршем і рисом.',
            instructions: `1. Відваріть капусту та відокремте листя.
                          2. Приготуйте начинку з фаршу, рису і спецій.
                          3. Загорніть начинку у капустяні листи, формуючи голубці.
                          4. Тушкуйте голубці в томатному соусі до готовності.
                          5. Подавайте гарячими зі сметаною.`
        },
        {
            id: 4,
            title: 'Бельгійські вафлі',
            category: 'dessert',
            image: 'image/waffles.jpg',
            description: 'Легкі та хрусткі вафлі, ідеальні для сніданку.',
            instructions: `1. Змішайте борошно, цукор, розпушувач і дрібку солі.
                          2. Збийте яйця з молоком, додайте розтоплене вершкове масло.
                          3. Змішайте рідкі та сухі інгредієнти до однорідної маси.
                          4. Випікайте у вафельниці до золотистого кольору.
                          5. Подавайте з ягодами, сиропом або вершками.`
        },
        {
            id: 6,
            title: 'Млинці',
            category: 'dessert',
            image: 'image/mlynci.jpg',
            description: 'Тонкі млинці на молоці.',
            instructions: `1. Збийте яйця з цукром до легкості.
                          2. Додайте молоко, борошно та сіль, перемішайте до однорідності.
                          3. Змастіть сковороду олією, налийте трохи тіста і обсмажте з обох сторін.
                          4. Готові млинці складайте на тарілку стопкою.
                          5. Подавайте з медом, варенням або згущеним молоком.`
        },
        {
            id: 17,
            title: 'Пиріжки з вишнею',
            category: 'dessert',
            image: 'image/cherry-pirog.jpg',
            description: 'Домашні пиріжки з солодкою вишневою начинкою.',
            instructions: `1. Зробіть дріжджове тісто, дайте йому піднятися.
                          2. Приготуйте начинку з вишень, додавши цукор.
                          3. Розкачайте тісто, сформуйте пиріжки з начинкою.
                          4. Випікайте в духовці до золотистого кольору.
                          5. Подавайте теплими або холодними.`
        },
        {
            id: 18,
            title: 'Рахат-лукум',
            category: 'dessert',
            image: 'image/rahat-lukum.jpg',
            description: 'Турецький десерт з цукру, крохмалю і ароматизаторів.',
            instructions: `1. Змішайте цукор з водою, варіть до розчинення.
                          2. Додайте крохмаль і варіть до густої консистенції.
                          3. Додайте ароматизатори, перемішайте до однорідності.
                          4. Вилийте суміш у форму та дайте застигнути.
                          5. Наріжте на кубики та обваляйте в цукровій пудрі.`
        },
        {
            id: 7,
            title: 'Лимонад',
            category: 'drink',
            image: 'image/lemonade.jpg',
            description: 'Освіжаючий лимонний напій.',
            instructions: `1. Вичавіть лимони для отримання свіжого соку.
                          2. Змішайте лимонний сік з водою та цукром.
                          3. Додайте лід для охолодження.
                          4. Залиште настоятись в холодильнику на 10-15 хвилин.
                          5. Подавайте зі шматочками лимону та м'ятою.`
        },
        {
            id: 8,
            title: 'Молочний коктейль',
            category: 'drink',
            image: 'image/milkshake.jpg',
            description: 'Ніжний напій з молока та морозива.',
            instructions: `1. Змішайте молоко з морозивом у блендері.
                          2. Збивайте до отримання однорідної текстури.
                          3. Додайте шоколадний сироп або фрукти за бажанням.
                          4. Перелийте в склянку і додайте трубочку.
                          5. Подавайте охолодженим.`
        },
        {
            id: 19,
            title: 'Узвар',
            category: 'drink',
            image: 'image/uzvar.jpg',
            description: 'Традиційний український напій з сухофруктів.',
            instructions: `1. Промийте сухофрукти та залийте їх водою.
                          2. Доведіть до кипіння, зменшіть вогонь і варіть 10-15 хвилин.
                          3. Дайте напою настоятися кілька годин.
                          4. Охолодіть перед подачею.
                          5. Подавати холодним або кімнатної температури.`
        },
        {
            id: 20,
            title: 'Домашній квас',
            category: 'drink',
            image: 'image/kvas.jpg',
            description: 'Квас на основі чорного хліба та дріжджів.',
            instructions: `1. Залийте чорний хліб окропом і залиште на ніч.
                          2. Додайте дріжджі та цукор, перемішайте.
                          3. Дайте суміші забродити протягом доби.
                          4. Процідіть і охолодіть перед подачею.
                          5. Подавайте охолодженим для освіження.`
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

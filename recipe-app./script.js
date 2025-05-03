document.getElementById('recipe-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    const image = document.getElementById('image').value;
  
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';
  
    recipeCard.innerHTML = `
      <h3>${name}</h3>
      <p><strong>Description:</strong> ${description}</p>
      <p><strong>Ingredients:</strong> ${ingredients}</p>
      <p><strong>Instructions:</strong> ${instructions}</p>
      ${image ? `<img src="${image}" alt="${name}" />` : ''}
    `;
  
    document.getElementById('recipes-list').appendChild(recipeCard);
  
    // Clear form
    document.getElementById('recipe-form').reset();
  });
  
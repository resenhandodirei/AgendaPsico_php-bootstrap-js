// URL da API do Nager.Date para obter os feriados públicos no Brasil em 2024
const url = 'https://date.nager.at/api/v3/publicholidays/2024/BR';

// Fazendo a requisição para a API
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    // Exibindo a lista de feriados no console
    console.log('Feriados Públicos no Brasil em 2024:', data);

    // Exibindo a lista de feriados no HTML
    const holidayList = document.getElementById('holiday-list');
    data.forEach(holiday => {
      const listItem = document.createElement('li');
      listItem.textContent = `${holiday.date} - ${holiday.localName} (${holiday.name})`;
      holidayList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Erro ao buscar dados:', error);
  });

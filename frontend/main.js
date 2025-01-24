const API_URL = 'frontend/eventos.json'; // Caminho para o arquivo JSON local
const socket = io(API_URL);

async function loadEvents() {
  try {
    //Busca o arquivo JSON local
    const response = await fetch(API_URL);
    const events = await response.json();

    //Filtra os eventos conforme os filtros aplicados
    const searchValue = document.getElementById('search').value.toLowerCase();
    const statusFilter = document.getElementById('status-filter').value;
    const filteredEvents = events.filter(event =>
      event.name.toLowerCase().includes(searchValue) &&
      (statusFilter === '' || event.status === statusFilter)
    );

    renderEventCards(filteredEvents);
  } catch (error) {
    console.error('Erro ao carregar eventos:', error);
    alert('Erro ao carregar eventos.');
  }
}

function renderEventCards(events) {
  const eventsList = document.getElementById('events-list');
  const noEventsMessage = document.getElementById('no-events-message');

  eventsList.innerHTML = '';

  if (events.length === 0) {
    noEventsMessage.style.display = 'block';
  } else {
    noEventsMessage.style.display = 'none';
    events.forEach(event => {
      const card = document.createElement('div');
      card.className = 'event-card';

      card.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>Status:</strong> ${event.status}</p>
        <p><strong>Data:</strong> ${event.created_at}</p>
        <div class="status ${event.status}">${event.status}</div>
        <a href="event-details.html?id=${event.id}" aria-label="Ver detalhes do evento ${event.name}">Ver Detalhes</a>
      `;

      eventsList.appendChild(card);
    });
  }
}

//Limpar filtros
document.getElementById('clear-filters').addEventListener('click', () => {
  document.getElementById('search').value = '';
  document.getElementById('status-filter').value = '';
  loadEvents();
});

//WebSocket - Atualização em tempo real
socket.on('event_updated', (event) => {
  alert(`Evento atualizado: ${event.name} agora está ${event.status}`);
  loadEvents();
});

// Inicializa a página
if (document.body.id === 'details') {
  loadEventDetails();
} else {
  loadEvents();
}

# Dashboard de Monitoramento de Eventos em Tempo Real

## Descrição do Projeto
Esta é uma aplicação web de **frontend** para monitoramento de eventos em tempo real. O objetivo é exibir dados de uma API REST e atualizações ao vivo via WebSocket, utilizando tecnologias modernas de frontend.

---

## Funcionalidades

### **Página Inicial**
- Tabela que exibe eventos obtidos da API REST.
  - Cada linha da tabela apresenta:
    - **Nome do evento**.
    - **Status** (ativo/inativo).
    - **Data de criação**.
    - Um botão **"Ver detalhes"** que redireciona para uma página específica do evento.

### **Detalhes do Evento**
- Informar:
  - **Nome do evento**.
  - **Descrição detalhada**.
  - **Histórico de mudanças no status** (ex.: "Ativo" → "Inativo").

### **Filtros e Ordenação**
- Filtros para buscar eventos pelo **nome** e pelo **status**.
- Ordenação por **data de criação**.

### **Feedback ao Usuário**
- Indicação visual de **carregamento** enquanto os dados são buscados.
- Exibição de **mensagens de erro** em caso de falhas na API ou WebSocket.

### **Responsividade**
- Layout adaptado para **dispositivos móveis** e **computadores**.

---

## Tecnologias Utilizadas
- **HTML**: Estrutura da aplicação.
- **CSS**: Estilização responsiva e personalizada.
- **JavaScript**: Manipulação do DOM e lógica da aplicação.
- **WebSocket**: Atualizações em tempo real.
- **Fetch API**: Consumo da API REST.

---

## Estrutura do Projeto
```plaintext
frontend/
├── index.html          # Página inicial com a tabela de eventos
├── event-details.html  # Página de detalhes do evento
├── styles.css         # Estilos gerais
├── main.js            # Lógica principal
```

---

## Configuração e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```

3. Abra o arquivo `index.html` diretamente no navegador ou utilize uma extensão como **Live Server** para rodar o projeto localmente.

---

## Como Contribuir
1. Realize um fork do repositório.
2. Crie uma branch com a sua feature ou correção: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Minha nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request.

---

## Autora
- **[Paloma Matos ](https://github.com/pallomamattos)**



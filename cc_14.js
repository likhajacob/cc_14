// Task 2 - Adding support tickets dynamically
function createSupportTicket(customer, issue, priority) {
    //support ticket will be added
    let divTicketContainer = document.getElementById('ticketContainer');
   //new div element
    const ticketCard = document.createElement('div');
    ticketCard.setAttribute('class','ticket-card');
    //putting in customer info
    const custName = document.createElement('h2');
    custName.setAttribute('class', 'ticket-header');
    custName.textContent = customer;
    ticketCard.append(custName);
   
    //putting paragraph of issue
    const issueDesc = document.createElement('p');
    issueDesc.setAttribute('class', 'issue-description');
    issueDesc.textContent = issue;
    ticketCard.append(issueDesc);

    //Adding a label to show priority of issue
    const priorityLabel = document.createElement('p');
    priorityLabel.setAttribute('class', 'priority-label');
    priorityLabel.textContent = `Priority: ${priority}`;
   
    //non-high priority
    ticketCard.classList.add('other-priority');
   
    //priority text to the ticket
    ticketCard.append(priorityLabel);

    //Adding a button that customer can click to resolve the ticket
    const resolveBtn = document.createElement('button');
    resolveBtn.setAttribute('class', 'resolve-btn');
    resolveBtn.textContent = 'Resolve';
    ticketCard.append(resolveBtn);


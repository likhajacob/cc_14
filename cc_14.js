//Task 2 - Adding support tickets dynamically
function createSupportTicket(customer, issue, priority) {
    let divTicketContainer = document.getElementById('ticketContainer');
    //support ticket div element
    const ticketCard = document.createElement('div');
    ticketCard.setAttribute('class','ticket-card');
    //putting customer info
    const custName = document.createElement('h3');
    custName.setAttribute('class', 'ticket-header');
    custName.textContent = customer;
    ticketCard.append(custName);
    
    //issue paragraph adding
    const issueDesc = document.createElement('p');
    issueDesc.setAttribute('class', 'issue-description');
    issueDesc.textContent = issue;
    ticketCard.append(issueDesc);

    //label to show priority
    const priorityLabel = document.createElement('p');
    priorityLabel.setAttribute('class', 'priority-label');
    priorityLabel.textContent = `Priority: ${priority}`;
    
    //priority ticket inputting
    ticketCard.classList.add('other-priority');
    
    //Text of priority label
    ticketCard.append(priorityLabel);

    //Button adding to resolve issue
    const resolveBtn = document.createElement('button');
    resolveBtn.setAttribute('class', 'resolve-btn');
    resolveBtn.textContent = 'Resolve';
    ticketCard.append(resolveBtn); 
    
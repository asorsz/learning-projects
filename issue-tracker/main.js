const fetchIssues = () => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  const issuesList = document.querySelector('#issuesList');

  issuesList.innerHTML = '';

  issues.forEach((issue) => {
    const id = issue.id;
    const desc = issue.description;
    const severity = issue.severity;
    const assignedTo = issue.assignedTo;
    const status = issue.status;

    issuesList.innerHTML += `
      <div class="well">
        <h6>Issue ID: ${id}</h6>
        <p><span class="label label-info">${status}</span></p>
        <h3>${desc}</h3>
        <p><span class="glyphicon glyphicon-time"></span> ${severity} <span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
        <a href="#" class="btn btn-warning" onclick="setStatusClosed('${id}')">Close</a> <a href="#" class="btn btn-danger" onclick="deleteIssue('${id}')">Delete</a>
      </div>
      `
  });
};

const saveIssue = (e) => {
  e.preventDefault();

  const issueId = chance.guid();
  const issueDesc = document.querySelector('#issueDescInput').value;
  const issueSeverity = document.querySelector('#issueSeverityInput').value;
  const issueAssignedTo = document.querySelector('#issueAssignedToInput').value;
  const issueStatus = 'Open';

  const issue = {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus,
  }

  if (localStorage.getItem('issues') === null) {
    let issues = [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  } else {
    let issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  }

  document.querySelector('#issueInputForm').reset();
  
  fetchIssues();
};

const setStatusClosed = (id) => {
  let issues = JSON.parse(localStorage.getItem('issues'));

  issues.forEach((issue) => {
    if (issue.id === id) {
      issue.status = 'Closed';
    }
  });

  localStorage.setItem('issues', JSON.stringify(issues));
  fetchIssues();
};

const deleteIssue = (id) => {
  let issues = JSON.parse(localStorage.getItem('issues'));

  issues.forEach((issue, i) => {
    if (issue.id === id) {
      issues.splice(i, 1);
    }
  });

  localStorage.setItem('issues', JSON.stringify(issues));
  fetchIssues();
};

document.querySelector('#issueInputForm').addEventListener('submit', saveIssue);

fetchIssues();
import fs from 'fs';
import path from 'path';


const pagesPath = path.join(process.cwd(), 'src', 'pages');

const loginPage = `
import React from 'react';

function LoginPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
`;

const patientsPage = `
import React from 'react';

function PatientsPage() {
  const patients = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
  ];

  return (
    <ul>
      {patients.map((patient) => (
        <li key={patient.id}>{patient.name}</li>
      ))}
    </ul>
  );
}

export default PatientsPage;
`;

const plansPage = `
import React from 'react';

function PlansPage() {
  const plans = [
    { id: 1, name: 'Basic' },
    { id: 2, name: 'Premium' },
    { id: 3, name: 'Ultimate' },
  ];

  return (
    <ul>
      {plans.map((plan) => (
        <li key={plan.id}>{plan.name}</li>
      ))}
    </ul>
  );
}

export default PlansPage;
`;

const surgeriesPage = `
import React from 'react';

function SurgeriesPage() {
  const surgeries = [
    { id: 1, name: 'Appendectomy' },
    { id: 2, name: 'Cataract surgery' },
    { id: 3, name: 'Hip replacement' },
  ];

  return (
    <ul>
      {surgeries.map((surgery) => (
        <li key={        surgery.id
      )}>{surgery.name}</li>
      ))}
    </ul>
  );
}

export default SurgeriesPage;
`

fs.mkdirSync(path.join(pagesPath, 'Login'));
fs.writeFileSync(path.join(pagesPath, 'Login', 'index.js'), loginPage);

fs.mkdirSync(path.join(pagesPath, 'Patients'));
fs.writeFileSync(path.join(pagesPath, 'Patients', 'index.js'), patientsPage);

fs.mkdirSync(path.join(pagesPath, 'Plans'));
fs.writeFileSync(path.join(pagesPath, 'Plans', 'index.js'), plansPage);

fs.mkdirSync(path.join(pagesPath, 'Surgeries'));
fs.writeFileSync(path.join(pagesPath, 'Surgeries', 'index.js'), surgeriesPage); 

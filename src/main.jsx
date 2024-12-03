import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { InputFormContainer } from './components/InputFormContainer';
import './styles/main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InputFormContainer
      title={'Contant Information'}
      fields={[
        ['input', '', 'Name', 'text'],
        ['input', '', 'Phone Number', 'tel'],
        ['input', '', 'Email', 'email'],
      ]}
      isDupable={false}
    ></InputFormContainer>
    <InputFormContainer
      title={'Education'}
      fields={[
        ['input', '', 'Name of School', 'text'],
        ['input', '', 'Degree', 'text', ''],
        ['input', '', 'Date of Graduation', 'date'],
      ]}
      isDupable={true}
    ></InputFormContainer>
    <InputFormContainer
      title={'Work Experience'}
      fields={[
        ['input', '', 'Name of Employer', 'text'],
        ['input', '', 'Start Date', 'date'],
        ['input', '', 'End Date', 'date'],
        ['textarea', '', 'Description of Duties', 4, 35],
      ]}
      isDupable={true}
    ></InputFormContainer>
  </StrictMode>
);

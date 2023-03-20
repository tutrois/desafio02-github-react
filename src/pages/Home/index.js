import { useState } from 'react';
import GitHubLogo from '../../assets/github/github-mark-white.svg'
import Input from '../../components/Input';
import Button from '../../components/Button';
import ItemRepo from '../../components/ItemRepo'

import { api } from '../../services/api'
import { Container } from './styles.js';

function App() {
  const [ currentRepo, setCurrentRepo ] = useState('');
  const [ repos, setRepos ] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);
    
    if(data.id){
      setRepos(prev => [...prev,data]);
    }
  };

  const removeItemRepo = (id) => {    
    setRepos(repos.filter((repo) => repo.id !== id));
  }

  return (
    <Container>
      <img src={GitHubLogo} alt="Github Logo Branca" width={72} height={72}/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo repo={repo} removeItemRepo={removeItemRepo}/>)}
    </Container>
  );
}

export default App;
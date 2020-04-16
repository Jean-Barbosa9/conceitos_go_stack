import React, { Fragment, useState, useEffect } from 'react';
import api from './services/api';
import style from './style';
import { 
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Header from './components/Header';

export default function App() {
  const [projects, setProjects ] = useState([]);
  const projectLabel = projects.length > 1 
                        ? 'projetos cadastrados' : 'projeto cadastrado';

  async function getProjects() {
    try {
      const { data } = await api.get('projects');
      console.log('data: ', data);
      if(data.length) {
        setProjects(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function addProject() {
    try {
      const { data: project } = await api.post('projects', {
        title: `Novo projeto (${new Date().toLocaleString()})`,
        owner: 'Jean Barbosa',
      });
      setProjects([...projects, project]);
    } catch(error) {
      console.error(error);
    }
  }

  async function removeProject(id) {
    try {
      await api.delete(`projects/${id}`);
      const projectsFiltered = projects.filter(project => project.id !== id);
      setProjects(projectsFiltered);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProjects();
  }, [])

  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#7519c1" />
      <SafeAreaView style={style.container}>
        <Header title="Go Stack Rocketseat" />
        {
          projects.length > 0
          ? (
            <Fragment>
              <Text 
                style={style.strong}
              >{ projects.length } {projectLabel}:</Text>
              <FlatList 
                style={style.list}
                data={projects}
                keyExtractor={project => project.id}
                renderItem={({item: project}) => (
                  <View>
                    <Text style={style.text}>{project.title}</Text>
                    <TouchableOpacity 
                      style={style.secondaryButton} 
                      onPress={() => removeProject(project.id)}>
                      <Text 
                        style={[style.lightText, style.centerText]}
                      >Remover</Text>
                    </TouchableOpacity>
                  </View>
                )}
                
              />
            </Fragment>
          )
          : <Text style={style.strong}>Ainda não há projetos cadastrados!</Text> 
        }
        <TouchableOpacity 
          style={style.primaryButton} onPress={addProject}>
          <Text 
            style={[style.lightText, style.centerText]}
          >Adicionar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Fragment>
  )
}


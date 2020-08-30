import React from 'react';
import {
  Container,
  View,
  ContainerFilter,
  ViewAll,
  LoadGif,
  DivGif
} from './styles';
import PersonListComponent from './PersonListComponent';
import PersonFilter from './PersonFilter';

export default class PersonContainer extends React.Component{
  componentDidMount(){
    this.props.loadPersons(this.props.page, this.props.size, '', '');
  }
  
  render(){
    return(
      <Container>
        <ViewAll>
          <ContainerFilter>
            <PersonFilter query={this.props.query} onChange={this.props.changeQuery} onSearch={this.props.loadQueries}/>
          </ContainerFilter>
          <View>
            {this.props.persons.length ? (
              <PersonListComponent
                persons={this.props.persons}
                totalPage={this.props.totalPage}
                totalItems={this.props.totalItems}
                page={this.props.page}
                size={this.props.size}
                changePage={this.props.changePage}
              />
            ) : (<LoadGif/>)}
          </View>
        </ViewAll>
      </Container>
    )
  }
}
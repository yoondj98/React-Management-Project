import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '윤동주',
  'birthday' : '980817',
  'gender' : '남성',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '짭동주',
  'birthday' : '980815',
  'gender' : '여성',
  'job' : '중학생'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '간동주',
  'birthday' : '980819',
  'gender' : '중성',
  'job' : '고등학생'
}

]

class App extends Component {
	render() {
    return (
      <div>
        {
        customers.map(c => {
          return (
            <Customer key = {c.id} id ={c.id} image ={c.image} name ={c.name} birthday ={c.birthday} gender = {c.gender} job = {c.job} /> 
          )
          })
        }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper' //Paper는 어떠한 컴포넌트의 외부를 감싸기 위해서 사용하는 컴포넌트 중 하나임.
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody'; //TableBody에 각각의 고객에 대한 정보가 들어감
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%', 
    marginTop: theme.spacing(3), 
    overflowX: 'auto' 
  },
  table: {
    minWidth: 1080 
  }
})


class App extends Component {

  state = { //데이터가 변경될 수 있을 때는 state로 customers 변수를 명시해 줌.
    customers: ""
  }

  componentDidMount() { //API 서버에 접근을 해서 데이터를 받아오는 등의 작업을 함. 모든 컴포넌트가 mount가 되었을 때 실행되는 부분임.
    this.callApi() //어떠한 API를 불러올 수 있게함.
      .then(res => this.setState({customers: res})) //callApi에서 return한 값을 res로 받고 그걸 state의 customers라는 변수에 넣어줌.
      .catch(err => console.log(err)); //error 발생 시 console창에 해당 오류를 출력.
  }

  callApi = async () => { //callApi는 비동기적으로 어떠한 내용을 수행할 수 있게 해줌.
    const response = await fetch('/api/customers'); //response에 접속하고자 하는 api 주소를 넣음.
    const body = await response.json(); //그 주소에서 받아온 json형의 데이터를 body에 넣음.
    return body;
  }
	render() {
    const { classes } = this.props; //props는 변경될 수 없는 데이터를 명시할 때 씀. 여기서는 classes가 css를 나타내는 역할을 하므로 고정적임.
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c => { return ( <Customer key = {c.id} id ={c.id} image ={c.image} name ={c.name} birthday ={c.birthday} gender = {c.gender} job = {c.job} />); 
            }) : "" }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

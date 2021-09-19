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
    width: '100%', //너비가 100%
    marginTop: theme.spacing.unit*3,  //위쪽으로 여백을 3의 가중치만큼 줌
    overflowX: 'auto' //X축으로 오버플로우가 발생할 수 있도록 처리
  },
  table: {
    minWidth: 1080 //테이블은 1080픽셀이상 출력할 수 있게 함.(화면의 크기가 줄어들어도 전체 1080픽셀만큼은 무조건 테이블의 크기가 자리잡아서 가로 스크롤바가 생김.)
  }
})
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
    const { classes } = this.props; //위에서 정의한 styles가 적용될 수 있게 함.
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
            {customers.map(c => { return ( <Customer key = {c.id} id ={c.id} image ={c.image} name ={c.name} birthday ={c.birthday} gender = {c.gender} job = {c.job} />)})}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

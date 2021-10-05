import React from 'react'; 
import TableRow from '@material-ui/core/TableRow'; //각 사용자 정보들을 한 행씩으로 담을 수 있다.
import TableCell from '@material-ui/core/TableCell'; //테이블에 들어가는 각 원소들을 TableCell로 사용함
import CustomerDelete from './CustomerDelete';


class Customer extends React.Component { 
    render() { 
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src = {this.props.image} alt = "profile" style={{width:64,height:64}}/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id} /></TableCell>
            </TableRow>
        )
    }
}

export default Customer; 
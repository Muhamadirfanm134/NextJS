import React from 'react';

export default class Contact extends React.Component{
    
    createTable = () => {
        let row = this.props.data.map((item) => 
            <tr>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
            </tr>
        );
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Email</th>   
                        <th>First Name</th>   
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        );
    }
    
    
    render(){
        let table = this.createTable();
        return(
            <div>{table}</div>
        );
    }
}
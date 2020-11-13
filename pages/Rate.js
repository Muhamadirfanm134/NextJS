import React from 'react'

export default class Rate extends React.Component {
    state = {
        currency: 'GBP'
    }

    selectChangeHandler = (e) => {
        this.setState({
            currency: e.target.value
        });
    }

    render(){
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item">BitCoin Rate for {this.props.bpi[this.state.currency].description}: 
                    <span className="badge badge-primary">{this.props.bpi[this.state.currency].code}</span>
                    <strong>{this.props.bpi['USD'].rate}</strong>
                    </li>
                    <br/>
                    <select className="form-control" onChange={this.selectChangeHandler}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </ul>
            </div>
        );
    }
}
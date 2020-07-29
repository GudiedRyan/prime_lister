import React from 'react';

class Factor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: "",
            factors: [],
            n: ""
        }
    }
    render(){
        return(
            <div className="App">
                <input onChange={this.handleChange} name="input" placeholder="n" value={this.input}></input>
                <button onClick={this.factorMe}>Factor</button>
                <p>Factors:</p>
                <ul>
                    {this.state.factors.map((factor,j) =>
                    <li key={j} className="input">
                        {factor}
                    </li>
                    )}
                </ul>
            </div>
        )
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    factorMe = () => {
        this.setState({
            n: this.state.input,
            factors: []
        })
        this.generateFactors();
    }
    generateFactors = () => {
        let m = this.state.input;
        let i = 1;
        let factorlist = [];
        while (i <= m) {
            if (m % i === 0) {
                factorlist.push(i);
                i++;
            } else {
                i++;
            }
            console.log(factorlist);
        }
        this.setState(state => ({
            factors: factorlist
        }))
    }
}

export default Factor;
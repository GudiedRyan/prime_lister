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
            <div>
                <input onChange={this.handleChange} name="input" placeholder="n" value={this.input}></input>
                <button onClick={this.factorMe}>Factor</button>
                <p>Factors:</p>
                <ul>
                    {this.factors.map((factor,j) =>
                    <li key={j}>
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
            n: parseInt(this.state.input),
            factors: []
        })
        this.generateFactors();
    }
    generateFactors = () => {
        let m = this.state.n;
        let i = 1;
        let factorlist = [];
        while (i <= m) {
            if (m % i === 0) {
                factorlist.push(i);
                i++;
            } else {
                i++;
            }
        }
        this.setState(state => ({
            factors: state.factors.concat(this.factorlist)
        }))
    }
}

export default Factor;
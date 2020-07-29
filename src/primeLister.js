import React from 'react';

class PrimeLister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            showPrime: false,
            last: "",
            primes: []
        }
    }
    render(){
        return(
            <div>
                <h4>Prime Lister</h4>
                <p>Enter any positive integer greater than 1 to get a list of primes less than that integer!</p>
                <input name="input" placeholder="Some positive integer" onChange={this.handleChange} value={this.state.input}></input>
                <button onClick={this.list}>Calculate</button>
                <div>
                    {this.state.showPrime? <div>
                        <p>Input = {this.state.last}</p>
                        <ul className="input">
                            {this.state.primes.map((prime,i) =>
                            <li key={i}>
                                {prime}
                            </li>
                            )}
                        </ul>
                        </div> : <p></p>}
                </div>
            </div>
        )
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    list = () => {
        this.setState(state => ({
            showPrime: true,
            last: state.input
        }))
        let n = this.state.input;
        let p = 2;
        let primechildren = [];
        while (p < n) {
            let j = 1;
            let factors = 0;
            while (j < p) {
                if (p % j === 0) {
                    factors++;
                    j++;
                } else {
                    j++;
                }
            }
            if (factors === 1) {
                primechildren.push(p);
                p++;
            } else {
                p++;
            }
            }
        this.setState(state => ({
            primes: primechildren
        }))
    }
}

export default PrimeLister;
import React from 'react';

class PrimeFactorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            last: "",
            primeFactors: []
        }
    }
    render(){
        return(
            <div>
                <h4>Prime Factorization!</h4>
                <p>Ever wondered what primes compose your favorite number?
                    Ever wondered if your favorite number <em>was</em> a prime?
                    Wonder no more, simply type it in, then click the factor button
                    and you'll know!
                </p>
                <input name="input" placeholder="Some positive integer" onChange={this.updateText} value={this.state.input}></input>
                <button onClick={this.primeFactorization}>Factor</button>
                <div>
                    <p>Input = {this.state.last}</p>
                    <ul className="input">
                        {this.state.primeFactors.map((prime,p) =>
                        <li key={p}>
                            {prime}
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
    updateText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    primeFactorization = () => {
        this.setState(state => ({
            last: state.input,
            primeFactors: []
        }))
        let factors = [];
        let n = this.state.input;
        let i = 2;
        while (i <= n) {
        if (n % i === 0){
            factors.push(i);
            n = n/i;
        } else {
            i++;
            }
        }
        this.setState(state => ({
            input: "",
            primeFactors: factors
        }))
    }
}

export default PrimeFactorer;
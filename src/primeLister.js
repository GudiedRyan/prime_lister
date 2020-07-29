import React from 'react';

class PrimeLister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            showPrime: false,
            last: "",
            primes: [],
            p: 2,
            j: 1,
            factors: 0
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
                        <ul>
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
            last: state.input,
            input:""
        }))
        if (this.state.showPrime === true) {
            this.setState(state => ({
                p: 2,
                primes: []
            }))
            while (this.state.p < parseInt(this.state.last)) {
                this.setState(state => ({
                    j: 1,
                    factors: 0
                }))
                while (this.state.j < this.state.p) {
                    if (this.state.p % this.state.j === 0) {
                        this.setState(state => ({
                            factors: state.factors + 1,
                            j: state.j + 1
                        }))
                    } else {
                        this.setState(state => ({
                            j: state.j + 1
                        }))
                    }
                }
                if (this.state.factors === 1) {
                    this.setState(state => ({
                        primes: [...state.primes, state.p],
                        p: state.p + 1
                    }))
                } else {
                    this.setState(state => ({
                        p: state.p + 1
                    }))
                }
            }
        }
    }
}

export default PrimeLister;
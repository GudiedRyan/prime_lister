import React from 'react';
import './App.css';
import Factor from './primeFactor';
import PrimeLister from './primeLister';

function App() {
  return (
    <div className="App">
      <h1>Primes</h1>
      A prime <em>p</em> is a positive integer that has only two divisors, 1 and <em>p</em>.
      The <strong>Fundamental Theorem of Arithmetic</strong> states that every positive integer greater than 2 is either prime, or can be
      written as a unique product of primes.
      <br />
      <p>Since primes are such interesting numbers, I have put two functions of this page that will allow you to play with primes.
        The first function will take any positive integer greater than 1 and return all the primes less than that integer.
        The second function will take any integer and give you the prime factorization of that integer.
      </p>
      <br />
      <p><strong>NOTE:</strong> While computing power has vastly increased in the past several years, large numbers are 
      difficult to factor quickly. This does not mean you cannot put large numbers into these functions,
      however, it is ill advised to go larger than 100,000. You are free to do so, but expect lag or potentially a crash.
      While the inability to quickly factor large numbers is unfortunately for mathematicians, it is a boon for Internet encryption.
      </p>
      <br/>
        <Factor />
        <PrimeLister />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Factor from './primeFactor';
import PrimeLister from './primeLister';
import PrimeFactorer from './bestPrimeFactor';

function App() {
  return (
    <div className="App">
      <h1>Primes</h1>
      A prime <em>p</em> is a positive integer that has only two divisors, 1 and <em>p</em>.
      The <strong>Fundamental Theorem of Arithmetic</strong> states that every positive integer greater than 2 is either prime, or can be
      written as a unique product of primes.
      <br />
      <p>Since primes are such interesting numbers, I have put a few functions of this page that will allow you to play with primes.
        The first function on this page takes any integer and returns the factors. The second function takes any integer and tells you
        what unique combination of primes make that integer. The third function takes any integer and returns all primes that are less
        than that integer.
      </p>
      <br />
      <p><strong>NOTE:</strong> While computing power has vastly increased in the past several years, large numbers are 
      difficult to factor quickly. This does not mean you cannot put large numbers into these functions,
      however, it is ill advised to go larger than 100,000. You are free to do so, but expect lag or potentially a crash.
      While the inability to quickly factor large numbers is unfortunately for mathematicians, it is a boon for Internet encryption.
      </p>
      <br/>
        <Factor />
        <PrimeFactorer />
        <PrimeLister />
    </div>
  );
}

export default App;

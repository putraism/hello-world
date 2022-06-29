import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';




function App() {
  return (
    <div className="App">
      <UserProvider value='Putra'>
        <ComponentC />
      </UserProvider>
      {/* <Counter>
        {(count, incrementCount) =>
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        }
      </Counter>
      <Counter>
        {(count, incrementCount) =>
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        }
      </Counter> */}
      {/* <ClickCounter name='Putra' /> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Putra' : 'Guest'} /> */}
    </div>
  );
}

export default App;

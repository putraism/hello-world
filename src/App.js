import logo from './logo.svg';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';



function App() {
  return (
    <div className="App">
      <PortalDemo />
      {/* <FRParentInput /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
    </div>
  );
}

export default App;

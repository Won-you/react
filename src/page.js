import {Link}from 'react-router-dom';
function page() {
    return (
      <div className="App">
        <h2>Hello</h2>
        <Link to="/main">
        <button>button</button>
        </Link>
      </div>
    );
  }

  export default page;

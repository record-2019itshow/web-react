import React, {Component} from 'react';
import './App.css';

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <header id="header">
          <div id="inner">
            <a href="index.html" className="logo">
              <span className="App-title">RECORD</span>
            </a>
            <h1>Record is In your Life.</h1>
            <p className="App-slogan">당신의 하루하루를 기록하고 되돌아보세요.</p>

            <nav>
              <ul>
                <li><a href="#menu">menu</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <nav id="menu">
          <h2>Log In</h2>
          <form>
            <table id="tb">
              <tbody>
                <tr>
                  <td>ID</td>
                  <td><input type="text" id="id" /></td>
                  <td rowSpan="2"><input type="button" id="btn" value="Go" /></td>
                </tr>
                <tr>
                  <td>PW</td>
                  <td><input type="password" id="pw" /></td>
                </tr>
              </tbody>
            </table>
          </form>
          
          <hr />
          <h2>Menu</h2>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="writing.html">글쓰기</a></li>
            <li><a href="elements.html">#해시태그</a></li>
            <li><a href="calendar.html">월 별로 모아보기</a></li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default App;

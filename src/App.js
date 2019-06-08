import React, {Component} from 'react';
import Sidebar from "react-sidebar";
import './App.css';
import tile_img from "./images/pic01.jpg";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render(){
    return(
      <React.Fragment>
        <header id="header">
          <div id="inner">
            <a href="index.html" className="logo">
              <span className="App-title">RECORD</span>
            </a>
            <h1>Record is In your Life.</h1>
            <p className="App-slogan">기록은 기억이 되어 여러분의 곁에 머뭅니다.</p>
            <section className="tiles">
							<article className="style1">
								<span className="image">
									<img src={tile_img} />
								</span>
								<a href="writing.html">
									<h2>+</h2>
									<div className="content">
										<p>Add a Record</p>
									</div>
								</a>
							</article>
						</section>

            <nav>
              <ul>
								<li><a href="#menu" onClick={() => this.onSetSidebarOpen(true)}>Menu</a></li>
							</ul>
            </nav>
          </div>

        </header>

        <nav>
          <Sidebar
          sidebar={
          <div id="menu">
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
            <ul id="list">
              <a href="index.html"><li>Home</li></a><hr />
              <a href="writing.html"><li>글쓰기</li></a><hr />
              <a href="elements.html"><li>#해시태그</li></a><hr />
              <a href="calendar.html"><li>월 별로 모아보기</li></a><hr />
            </ul>
          </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          pullRight={true}
          styles={{ sidebar: { background: "#585858", color: "white" } }}
          >
        </Sidebar>
        </nav>
      </React.Fragment>
    );
  }
}

export default App;

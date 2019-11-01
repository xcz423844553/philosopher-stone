import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { PostList } from './PostList';
import { Post } from './Post';
import { Homepage } from './Homepage';
import { Link, Route } from 'react-router-dom'

const { Header, Footer, Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homepage} />
        {/* <Layout>
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to={`/`}>Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to={`/postlist`}>Posts</Link></Menu.Item>
              <Menu.Item key="3"><Link to={`/project`}>Projects</Link></Menu.Item>
            </Menu>
          </Header>
          <Content>
          <Route exact path="/" component={PostList} />
            <Route exact path="/postlist" component={PostList} />
            <Route exact path="/post/:title" render={({match}) => (
              <Post title={match.params.title}/>
            )} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Az</Footer>
        </Layout> */}
      </div>
    );
  }
}

export default App;

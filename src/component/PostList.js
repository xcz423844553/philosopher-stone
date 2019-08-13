import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, List, Avatar } from 'antd';
import { Link } from 'react-router-dom'

const data = [
    {
      title: 'How to Install Github on Ubuntu',
      url: '2019-04-16-how-to-install-github-on-ubuntu',
      date: '2019-04-16',
    },
    {
      title: 'How to Install MySQL on Ubuntu',
      url: '2019-04-16-how-to-install-mysql-on-ubuntu',
      date: '2019-04-16',
    },
    {
      title: 'How to Use Git',
      url: '2019-04-17-how-to-use-git',
      date: '2019-04-17',
    },
    {
      title: 'SQL Study Notes',
      url: '2019-08-06-sql-study-notes',
      date: '2019-08-06',
    },
  ];

export class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="postlist">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar size="small" icon="star" />}
                                title={<Link to={`/post/${item.url}`}>{item.title}</Link>}
                                description={item.date}
                            />
                        </List.Item>
                    )}
                />,
            </div>
        );
    }
}
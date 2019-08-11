import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';

export class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="postlist">
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
            </div>
        );
    }
}
import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import ReactMarkdown from 'react-markdown';
import AppMarkdown from '../asset/post/2019-08-06-SQL-Study-Notes.md';

export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: '',
        }
    }

    componentDidMount() {
        const path = require('../asset/post/'+this.props.title+'.md');
        fetch(path)
        .then(res => res.text())
        .then(text => this.setState({markdown: text}));
    }

    render() {
        return (
            <div className="post">
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <ReactMarkdown 
                source={this.state.markdown} 
                escapeHtml={true}
                />
            </div>
        );
    }
}
import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import ReactMarkdown from 'react-markdown';
import doc1 from '../asset/post/2019-04-16-how-to-install-github-on-ubuntu.md';
import doc2 from '../asset/post/2019-04-16-how-to-install-mysql-on-ubuntu.md';
import doc3 from '../asset/post/2019-04-17-how-to-use-git.md';
import doc4 from '../asset/post/2019-08-06-sql-study-notes.md';
import MarkdownHighlighter from './MarkdownHighlighter';

let docs = {};
docs['2019-04-16-how-to-install-github-on-ubuntu'] = doc1;
docs['2019-04-16-how-to-install-mysql-on-ubuntu'] = doc2;
docs['2019-04-17-how-to-use-git'] = doc3;
docs['2019-08-06-sql-study-notes'] = doc4;

export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: '',
        }
    }

    componentDidMount() {
        // const path = require('../asset/post/' + this.props.title + '.md');
        // fetch(path)
        //     .then(res => res.text())
        //     .then(text => this.setState({ markdown: text }));
        fetch(docs[this.props.title])
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
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
                    className="post_content"
                    source={this.state.markdown}
                    escapeHtml={false}
                    renderers={{ code: MarkdownHighlighter }}
                />
            </div>
        );
    }
}
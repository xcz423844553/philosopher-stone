import React from 'react';
import 'antd/dist/antd.css';
import '../style/Homepage.css';

export class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="homepage">
                <div className="yang">
                        <p>RESUME</p>
                        <p>PROJECT</p>
                        <p>CONTACT ME</p>
                </div>
                <div className="yin">
                        <p>STUDY NOTE</p>
                        <p>BLOG</p>
                        <p>BUCKET LIST</p>
                </div>  
            </div>
        );
    }
}
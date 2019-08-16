import React, { Component } from 'react'

import NavigationPanel from './NavigationPanel';
import MessagesPanel from './MessagesPanel';
import EditorPanel from './EditorPanel';

import { connect } from "react-redux";




class Layout extends Component {


    state = {
        selectedChannel: null
    }

    setChannel = (channel) => {
        this.setState({ selectedChannel: channel })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <NavigationPanel selectedChannel={this.state.selectedChannel} setChannel={this.setChannel} />
                    </div>
                    <div className="col">
                        <MessagesPanel />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <EditorPanel channel={this.state.selectedChannel}/>
                    </div>

                </div>
            </div>
        )
    }
}





export default connect(null, null)(Layout);

import React, { Component } from 'react';

class ViewContact extends Component {
    render() { 
        let {renderContact, renderList} = this.props;
        return (
            <div className='alert alert-success'>
                <h2>ViewContact</h2>
                <h3>name: {renderContact.name}</h3>
                <h3>phone: {renderContact.phone}</h3>
                {
                    renderList.map((item,index)=>{
                        return(
                            <li>{item.name}-{item.phone}- {item.gender==1?"nam":"nu"}</li>
                        )
                    })
                }
            </div>
        );
    }
}

export default ViewContact;

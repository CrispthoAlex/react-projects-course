import React, { Component } from 'react'

function ComponentA(props) {
    return <p>ComponentA</p>;
} 
function ComponentB(props) {
    return <p>ComponentB</p>;
}

export default class ConditionalSection extends Component {
    render () {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                <ComponentA />
                <ComponentB />
            </div>
        )
    }
}
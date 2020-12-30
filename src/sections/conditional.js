import React, { Component } from 'react'

function ComponentA(props) {
    return <p>ComponentA</p>;
} 
function ComponentB(props) {
    return <p>ComponentB</p>;
}

function useConditionalRendering (showCompA) {
    if (showCompA) {
        return <ComponentA />
    }
    return <ComponentB />
}

export default class ConditionalSection extends Component {
    constructor() {
        super()
        this.state = { showCompA: true } ;
    }
    render () {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {useConditionalRendering(this.state.showCompA)}
            </div>
        )
    }
}
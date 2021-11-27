import React, { Component } from 'react'
import BannerComponent from './BannerComponent'
import ItemComponent from './ItemComponent'

export default class BodyComponent extends Component {
    render() {
        return (
            <div>
                <div className="col-12">
                        <BannerComponent/>
                        <ItemComponent/>
                    </div>
            </div>
        )
    }
}

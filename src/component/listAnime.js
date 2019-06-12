import React, { Component } from 'react'

export default class listAnime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));

        console.log(this.state.data);
    }
    render() {
        return (
            <div>
                <div class="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>title</th>
                                <th>director</th>
                                <th>producer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(el => (
                                <tr>
                                   <td>{el.id}</td>
                                   <td>{el.title}</td>
                                   <td>{el.director}</td>
                                   <td>{el.producer}</td>
                                </tr>
                            ))}
                          
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

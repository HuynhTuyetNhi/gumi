import React, { Component } from 'react'


class time extends Component {
    constructor(props){
        super(props);
        this.state ={
            texts : 0
        }
    }
    componentWillMount(){
        this.show();
    }
    async show() {
        try {
            var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
            for(let i=0;i<vegetables.length;i++){
                console.log(vegetables[i]);
                this.setState({
                    texts:vegetables[i]
                })
                await this.delay(vegetables[i]);
            }

        } catch (error) {
            console.log(error)
        }
    }
    async delay(item){
        await this.delaylater();
    }
    delaylater(){
        return new Promise(resolve => setTimeout(resolve,1000))
    }
    render() {
    
       const {texts} = this.state
        return (
            <div>
            <p>Đợi một 1s</p>
            <p className="text">{texts}</p>
            </div>
        )
    }
}
export default time

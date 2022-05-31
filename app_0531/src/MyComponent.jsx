import React,{Component} from 'react'
const defSeconds =3;
export class MyComponent extends Component{
    
    constructor(props){
        super(props)
        this.state={
            click:0,
            seconds:defSeconds,
            text:"Hi",
            status:false,
            stopGame:false,
            record:0,

        }
        this.increment=this.increment.bind(this)
        this.setSeconds=this.setSeconds.bind(this)
        this.startGame=this.startGame.bind(this)
        this.decrement=this.decrement.bind(this)
        this.restart=this.restart.bind(this)
    }
    increment(){
        this.setState({click:this.state.click+1})
    }
    decrement(){
        if(this.state.seconds>0){
            this.setState({seconds:this.state.seconds-1})
            setTimeout(this.decrement,1000);
        } else{
            this.setRecord(this.state.click);
            this.setState({stopGame:true})
        }
      
    }
    setSeconds(event){
        this.setState({seconds:event.target.value})
    }
    componentDidUpdate(){
        
    }
    componentDidMount(){
        console.log("first render")
        this.setState({record:JSON.parse(localStorage.getItem('record'))})
    }
    startGame(){
        if(!this.state.status){
            this.setState({status:true});
            this.decrement();
        } 
        
    }
    restart(){
        this.setState({status:false,stopGame:false,seconds:defSeconds,click:0})
    }
    setRecord(clicks){
        if(clicks>this.state.record){
            this.setState({record:clicks})
            localStorage.setItem('record',JSON.stringify(clicks));
        }
    }
    render(){
        return (
            <div>
                <input 
                value={this.seconds} 
                type="text" 
                placeholder="enter seconds" 
                onChange={this.setSeconds} 
                />
                <h2>Timer: {this.state.seconds}</h2>
                
                <button disabled={this.state.stopGame} onClick={!this.state.status? this.startGame : this.increment}>{this.state.status? "Click" : "Start"}</button>
                <h4>Clicks: {this.state.click}</h4>
                {
                    this.state.stopGame ?
                    <div>
                        <h5>Clicks this round: {this.state.click}</h5>
                        <h5>Personal Record:{this.state.record}</h5>
                        <button onClick={this.restart}>Restart</button> 
                        
                        </div>: " "
                }
            </div>
        )
    }


}

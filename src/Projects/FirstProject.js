import React from 'react'
import './First.css'
import img1 from './nues 1.png'
import img2 from './Ellipse 12.png'
import img3 from './Ellipse 2.png'
import img4 from './Vector 7.png'
import img5 from './user.png'
import img6 from './Ellipse3.png'
import img7 from './Ellipse 13.png'
import img8 from './Vector 2.png'
import img9 from './Vector 3.png'
import img10 from './Vector 4.png'
import img11 from './Vector 5.png'
import img12 from './Vector 6.png'
import img13 from './Vector.png'
// import {withRouter} from 'react-router-dom'

class FirstProject extends React.Component{

    constructor(props){
        super(props)
        this.state={
            matricnum:"",
            examid:""
        }
    }

    firstStart = () =>{
        if(this.state.matricnum==="" || this.state.examid===""){
            alert("Input your matric number and exam id")
        }
        else{
            localStorage.setItem("matric",this.state.examid)
            this.props.history.push({
            pathname:'/second'
        })
        }
    }

    matricNum = (e) =>{
        this.setState(()=>({
            matricnum:e.target.value
        }))
    }

    examId = (e) =>{
        this.setState(()=>({
            examid:e.target.value
        }))
    }



    render(){
        return(
            <div className="mainBox">
                <div className="firstBox">
                    <img alt="" src={img2} className="image2" />
                    <img alt="" src={img3} className="image3" />
                    <img alt="" src={img1} className="image1" />
                    <img alt="" src={img8} className="image8" />
                    <img alt="" src={img9} className="image9" />
                    <img alt="" src={img10} className="image10" />
                    <img alt="" src={img11} className="image11" />
                    <img alt="" src={img12} className="image12" />
                    <h2 className="header">Faculty of Management<br/><span>Science</span></h2>
                    <div className="box1"><span>QUIZ APP</span></div>
                    <img alt="" src={img13} className="image13" />
                </div>
                <div className="secondBox">
                    <div className="thirdBox">
                        <img alt="" src={img5} className="image5" />
                        <div className="header2"><h2>Welcome,<br/>Please sign in to start your test</h2></div>
                    </div>
                    <div className="fourthBox">
                        <input type="number" onChange={this.matricNum} name="matricnum" value={this.state.matricnum} className="input1 input" placeholder="Enter matric number" /><br/>
                        <input type="text" onChange={this.examId} name="examid" value={this.state.examid} className="input2 input" placeholder="Enter exam ID e.g MSQIO320SJ8"/>
                    </div>
                    <button onClick={this.firstStart} className="button1">PROCEED>>></button>
                    <img alt="" src={img6} className="image6" />
                    <img alt="" src={img7} className="image7" />
                </div>
                <img alt="" src={img4} className="image4" />
            </div>
        )
    }
}

export default FirstProject
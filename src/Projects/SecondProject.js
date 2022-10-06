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

class SecondProject extends React.Component{

    secondStart = () =>{
        this.props.history.push({
            pathname:'/third'
        })
    }
    render(){
        const matricnumber=localStorage.getItem("matric")
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
                    <div className="box1">QUIZ APP</div>
                    <img alt="" src={img13} className="image13" />
                </div>
                <div className="secondBox">
                    <div className="thirdBox">
                        <img alt="" src={img5} className="image5"/>
                    </div>
                    <div className="instructions">
                        <h2 className="header3">READ CAREFULLY !!!</h2>
                        <ul>
                            <li><b>There are two categories and a total of 30 questions to be answered.Please do not click submit unless you are sure of submitting</b></li><br/>
                            <li><b>Your examination ID is <span className="examid">{matricnumber}</span></b></li><br/>
                            <li><b>Any form of examination malpractice will render your test nullified,stick to the rules. GOOD LUCK !</b></li><br/>
                            <li><b>Exam duration: <span className="timeLet">25 minutes</span></b></li>
                        </ul>
                    </div>
                    <button onClick={this.secondStart} className="button2">START TEST</button>
                    <img alt="" src={img6} className="image6" />
                    <img alt="" src={img7} className="image7" />
                </div>
                <img alt="" src={img4} className="image4" />
            </div>
        )
    }
}

export default SecondProject
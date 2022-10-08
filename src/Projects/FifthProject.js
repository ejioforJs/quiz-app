import React from 'react'
import './First.css'
import img1 from './nues 1.png'
import img2 from './Ellipse 12.png'
import img3 from './Ellipse 2.png'
import img4 from './Vector 7.png'
// import img5 from './user.png'
import img6 from './Ellipse3.png'
import img7 from './Ellipse 13.png'
import img8 from './Vector 2.png'
import img9 from './Vector 3.png'
import img10 from './Vector 4.png'
import img11 from './Vector 5.png'
import img12 from './Vector 6.png'
import img13 from './Vector.png'
// import img14 from './congrat.png'
import image15 from './gif.gif'
// import {withRouter} from 'react-router-dom'

class FifthProject extends React.Component{

    closePage = () =>{
        this.props.history.push({
            pathname:"/"
        })
    }
    
    render(){
        const answernum=JSON.parse(localStorage.getItem("answerche")) + JSON.parse(localStorage.getItem("answerphy"))
        const totalTime = JSON.parse(localStorage.getItem("totalTime"))
        // console.log(JSON.parse(localStorage.getItem("answerche")))
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
                    <img alt="" src={image15} className="image15" />
                    <div className="result" >You answered {answernum}/30 questions correctly in about {totalTime} minutes</div>
                    <button onClick={this.closePage} className="closePage"><span className="closeIcon">x</span>       Close</button>
                    <img alt="" src={img6} className="image6" />
                    <img alt="" src={img7} className="image7" />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                </div>
                <img alt="" src={img4} className="image4" />
            </div>
        )
    }
}

export default FifthProject
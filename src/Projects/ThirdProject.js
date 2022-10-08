import React from 'react';
import './chemistryPro.css';
import img1 from './nues 1.png';
import img2 from './Ellipse 12.png';
import img3 from './Ellipse 2.png';
import img4 from './Vector 7.png';
// import img5 from './user.png'
// import img6 from './Ellipse3.png'
import img7 from './Ellipse 13.png';
import img8 from './Vector 2.png';
import img9 from './Vector 3.png';
import img10 from './Vector 4.png';
import img11 from './Vector 5.png';
import img12 from './Vector 6.png';
// import img13 from './Vector.png'

class ThirdProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      z: 59,
      a: 24,
      release: null,
      zero2: 0,
      hour: 24,
      zero: 0,
      minute: 59,
      num: 0,
      start: new Date().toLocaleTimeString('en-US').replace(/(.*)\D\d+/, '$1'),
      stop: new Date(new Date().getTime() + 30 * 60 * 1000)
        .toLocaleTimeString('en-US')
        .replace(/(.*)\D\d+/, '$1'),
      quiz: [
        {
          question:
            'Which of the following elements is used in the preparation of NAOH ?',
          option1: 'sodium',
          option2: 'aluminium',
          option3: 'zinc',
          option4: 'boron',
          step: 0,
          answer: 'sodium',
          ans: 0,
        },

        {
          question:
            'Which of the following metals is best extracted from its ore by electrolytic treatment ?',
          option1: 'iron',
          option2: 'potassium',
          option3: 'mercury',
          option4: 'lead',
          step: 0,
          answer: 'potassium',
          ans: 0,
        },

        {
          question:
            'An industrial process for converting ammonia to trioxonitrate(V) acid is ?',
          option1: 'Haber process',
          option2: 'Contact process',
          option3: 'Ostwald process',
          option4: "Sabatier's process",
          step: 0,
          answer: 'Ostwald process',
          ans: 0,
        },

        {
          question:
            'which of the following reactions is preferred by benzene ?',
          option1: 'Substitution',
          option2: 'Addition',
          option3: 'Elimination',
          option4: 'Hydrolysis',
          step: 0,
          answer: 'Substitution',
          ans: 0,
        },

        {
          question:
            'The laboratory apparatus for bubbling a gas into a liquid is ?',
          option1: 'Liebig condenser',
          option2: 'Aspirator',
          option3: 'Funnel',
          option4: 'Delivery tube',
          step: 0,
          answer: 'Delivery tube',
          ans: 0,
        },

        {
          question:
            'Which of the following is generally used for radioactive shielding ?',
          option1: 'Paraffin oil',
          option2: 'Dark cloth',
          option3: 'Lead bar',
          option4: 'Silicon bar',
          step: 0,
          answer: 'Lead bar',
          ans: 0,
        },

        {
          question:
            'Which of the following pollutants encourage the growth of algae in rivers ?',
          option1: 'Heavy metals',
          option2: 'Phosphates',
          option3: 'Oil spills',
          option4: 'Suspended solids',
          step: 0,
          answer: 'Phosphates',
          ans: 0,
        },

        {
          question:
            'Which of the following substances cannot be further decomposed ordinarily by chemical means ?',
          option1: 'Water',
          option2: 'Air',
          option3: 'Sugar',
          option4: 'Silver',
          step: 0,
          answer: 'Silver',
          ans: 0,
        },

        {
          question:
            'A separatory funnel is used to separate components of a liquid mixture which differ in ?',
          option1: 'Colour',
          option2: 'Density',
          option3: 'Reaction',
          option4: 'Diffusion',
          step: 0,
          answer: 'Density',
          ans: 0,
        },

        {
          question:
            'Which of the elements in each period of the periodic table have the highest reducing power ?',
          option1: 'The alkali metals',
          option2: 'The alkali earth metals',
          option3: 'The halogens',
          option4: 'The noble gases',
          step: 0,
          answer: 'The alkali metals',
          ans: 0,
        },

        {
          question:
            'An effective method of treating municipal water supply for microorganisms is ?',
          option1: 'Ion exchange',
          option2: 'Addition of alum',
          option3: 'Chlorination',
          option4: 'Passage through fine sand',
          step: 0,
          answer: 'Chlorination',
          ans: 0,
        },

        {
          question:
            'Which of the following forms of water has the highest degree of hardness ?',
          option1: 'Rain water',
          option2: 'Lake water',
          option3: 'Borehole water',
          option4: 'River water',
          step: 0,
          answer: 'Lake water',
          ans: 0,
        },

        {
          question:
            'A likely consequence of using fuels with high sulphur content is ?',
          option1: 'Acid rain',
          option2: 'Blood poisoning',
          option3: 'Global warming',
          option4: 'Cancer',
          step: 0,
          answer: 'Acid rain',
          ans: 0,
        },

        {
          question:
            'Which of the following accounts for the presence of unpaired electrons in an atom of a d-block element ?',
          option1: 'Ductility',
          option2: 'Lustre',
          option3: 'Paramagnetism',
          option4: 'Malleability',
          step: 0,
          answer: 'Paramagnetism',
          ans: 0,
        },

        {
          question:
            'A property that decreases across a period and increases down a group in the periodic table is ?',
          option1: 'Ionization energy',
          option2: 'Electron affinity',
          option3: 'Atomic radius',
          option4: 'Atomic number',
          step: 0,
          answer: 'Atomic radius',
          ans: 0,
        },
      ],
      numP: 0,
      quizP: [
        {
          question:
            'Total internal reflection will not occur when light travels from ?',
          option1: 'water to air',
          option2: 'water into glass',
          option3: 'glass to air',
          option4: 'glass into water',
          step: 0,
          answer: 'water into glass',
          ans: 0,
        },

        {
          question:
            'The mechanism of heat transfer from one point to another through the vibrations of the molecules of the medium is ?',
          option1: 'Convection',
          option2: 'Conduction',
          option3: 'radiation',
          option4: 'diffusion',
          step: 0,
          answer: 'Conduction',
          ans: 0,
        },

        {
          question:
            'A wave that travels through stretched strings is known as ?',
          option1: 'Electromagnetic waves',
          option2: 'Microwave',
          option3: 'Mechanical wave',
          option4: 'Seismic wave',
          step: 0,
          answer: 'Electromagnetic waves',
          ans: 0,
        },

        {
          question:
            'The coefficient of friction between two perfectly smooth surfaces is ?',
          option1: 'Infinity',
          option2: 'One',
          option3: 'Half',
          option4: 'Zero',
          step: 0,
          answer: 'Zero',
          ans: 0,
        },

        {
          question:
            'Calculate the workdone when a force of 20N stretches a string by 50mm ?',
          option1: '0.5j',
          option2: '1.5j',
          option3: '2.0j',
          option4: '2.5j',
          step: 0,
          answer: '0.5j',
          ans: 0,
        },

        {
          question:
            "When a brick is taken from the earth's surface to the moon,its mass ?",
          option1: 'Remains constant',
          option2: 'Reduces',
          option3: 'Increases',
          option4: 'Becomes zero',
          step: 0,
          answer: 'Remains constant',
          ans: 0,
        },

        {
          question:
            'The process of detecting a pin mistakenly swallowed by a child is x-ray ?',
          option1: 'Diagnosis',
          option2: 'Therapy',
          option3: 'Crystallography',
          option4: 'Mammography',
          step: 0,
          answer: 'Crystallography',
          ans: 0,
        },

        {
          question:
            'If a reverse-biased voltage is applied across a p-n junction,the depletion layer width is ?',
          option1: 'Increased',
          option2: 'Decreased',
          option3: 'Constant',
          option4: 'Halve',
          step: 0,
          answer: 'Increased',
          ans: 0,
        },

        {
          question:
            'The characteristics of a vibration that determines its intensity is the ?',
          option1: 'Frequency',
          option2: 'Overtone',
          option3: 'Wavelength',
          option4: 'Amplitude',
          step: 0,
          answer: 'Frequency',
          ans: 0,
        },

        {
          question:
            'The pressure at any point in a liquid at rest depends only on the ?',
          option1: 'Depth and density',
          option2: 'Mass and volume',
          option3: 'Quantity and surface area',
          option4: 'Surface area and viscosity',
          step: 0,
          answer: 'Depth and density',
          ans: 0,
        },

        {
          question:
            'In measuring high frequency a.c the instrument used is the ?',
          option1: 'd.c ammeter',
          option2: 'Moving coil ammeter',
          option3: 'Moving iron ammeter',
          option4: 'Galvanometer',
          step: 0,
          answer: 'Moving coil ammeter',
          ans: 0,
        },

        {
          question:
            'A beam of light falls on a metallic surface. The maximum kinetic energy of the photoelectrons depends on the ?',
          option1: 'Area of metal surface',
          option2: 'Colour of the light',
          option3: 'Intensity of the light',
          option4: 'Duration of exposure to the light',
          step: 0,
          answer: 'Intensity of the light',
          ans: 0,
        },

        {
          question:
            'Of the underlisted elements, the best absorber of x-rays is ?',
          option1: 'Lead',
          option2: 'Copper',
          option3: 'Calcium',
          option4: 'Hydrogen',
          step: 0,
          answer: 'Lead',
          ans: 0,
        },

        {
          question:
            'Of the following types of radiation, the one that does not originate from the nucleus ?',
          option1: 'Alpha particles',
          option2: 'Beta particles',
          option3: 'Gamma rays',
          option4: 'X-rays',
          step: 0,
          answer: 'X-rays',
          ans: 0,
        },

        {
          question:
            'The phenomenon that shows that increase in pressure lowers the melting point can be observed in ?',
          option1: 'Sublimation',
          option2: 'Condensation',
          option3: 'Coagulation',
          option4: 'Regelation',
          step: 0,
          answer: 'Regelation',
          ans: 0,
        },
      ],
    };
  }

  nextQuestion = () => {
    //this.setState({num:this.state.num+1})
    this.setState(
      () => ({
        num: this.state.num + 1,
      }),
      () => {
        if (this.state.quiz[this.state.num].step === 1) {
          document.querySelector('.ques1C').id = 'picked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 2) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'picked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 3) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'picked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 4) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'picked';
        }
        if (this.state.quiz[this.state.num].step === 0) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.num === this.state.quiz.length - 1) {
          document.querySelector('.nextC').id = 'notDisplayed';
          document.querySelector('.frontC').id = 'notDisplayed';
          document.querySelector('.backC').id = 'displayed';
        }
        if (this.state.num !== this.state.quiz.length - 1) {
          document.querySelector('.nextC').id = 'displayed';
        }
        if (this.state.num !== 0) {
          document.querySelector('.prevC').id = 'displayed';
        }
        if (this.state.num === 10) {
          document.querySelector('.downC').id = 'eleven';
          document.querySelector('.elevenC').id = 'displayed';
          document.querySelector('.twelveC').id = 'displayed';
          document.querySelector('.thirteenC').id = 'displayed';
          document.querySelector('.fourteenC').id = 'displayed';
          document.querySelector('.fifteenC').id = 'displayed';
          document.querySelector('.frontC').id = 'notDisplayed';
          document.querySelector('.backC').id = 'displayed';
          document.querySelector('.oneC').id = 'notDisplayed';
          document.querySelector('.twoC').id = 'notDisplayed';
          document.querySelector('.threeC').id = 'notDisplayed';
          document.querySelector('.fourC').id = 'notDisplayed';
          document.querySelector('.fiveC').id = 'notDisplayed';
          document.querySelector('.sixC').id = 'notDisplayed';
          document.querySelector('.sevenC').id = 'notDisplayed';
          document.querySelector('.eightC').id = 'notDisplayed';
          document.querySelector('.nineC').id = 'notDisplayed';
          document.querySelector('.tenC').id = 'notDisplayed';
          if (this.state.quiz[10].step > 0) {
            document.querySelector('.elevenC').id = 'picked';
          }
          if (this.state.quiz[11].step > 0) {
            document.querySelector('.twelveC').id = 'picked';
          }
          if (this.state.quiz[12].step > 0) {
            document.querySelector('.thirteenC').id = 'picked';
          }
          if (this.state.quiz[13].step > 0) {
            document.querySelector('.fourteenC').id = 'picked';
          }
          if (this.state.quiz[14].step > 0) {
            document.querySelector('.fifteenC').id = 'picked';
          }
        }
        if (this.state.num === 1) {
          document.querySelector('.downC').id = 'two';
        }
        if (this.state.num === 2) {
          document.querySelector('.downC').id = 'three';
        }
        if (this.state.num === 3) {
          document.querySelector('.downC').id = 'four';
        }
        if (this.state.num === 4) {
          document.querySelector('.downC').id = 'five';
        }
        if (this.state.num === 5) {
          document.querySelector('.downC').id = 'six';
        }
        if (this.state.num === 6) {
          document.querySelector('.downC').id = 'seven';
        }
        if (this.state.num === 7) {
          document.querySelector('.downC').id = 'eight';
        }
        if (this.state.num === 8) {
          document.querySelector('.downC').id = 'nine';
        }
        if (this.state.num === 9) {
          document.querySelector('.downC').id = 'ten';
        }
        if (this.state.num === 11) {
          document.querySelector('.downC').id = 'twelve';
        }
        if (this.state.num === 12) {
          document.querySelector('.downC').id = 'thirteen';
        }
        if (this.state.num === 13) {
          document.querySelector('.downC').id = 'fourteen';
        }
        if (this.state.num === 14) {
          document.querySelector('.downC').id = 'fifteen';
        }
      }
    );
  };

  prevQuestion = () => {
    this.setState(
      () => ({
        num: this.state.num - 1,
      }),
      () => {
        if (this.state.quiz[this.state.num].step === 1) {
          document.querySelector('.ques1C').id = 'picked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 2) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'picked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 3) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'picked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 4) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'picked';
        }
        if (this.state.quiz[this.state.num].step === 0) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.num === 0) {
          document.querySelector('.prevC').id = 'notDisplayed';
        }
        if (this.state.num !== this.state.quiz.length - 1) {
          document.querySelector('.nextC').id = 'displayed';
        }
        if (this.state.num === 9) {
          document.querySelector('.downC').id = 'ten';
          document.querySelector('.oneC').id = 'displayed';
          document.querySelector('.twoC').id = 'displayed';
          document.querySelector('.threeC').id = 'displayed';
          document.querySelector('.fourC').id = 'displayed';
          document.querySelector('.fiveC').id = 'displayed';
          document.querySelector('.sixC').id = 'displayed';
          document.querySelector('.sevenC').id = 'displayed';
          document.querySelector('.eightC').id = 'displayed';
          document.querySelector('.nineC').id = 'displayed';
          document.querySelector('.tenC').id = 'displayed';
          document.querySelector('.elevenC').id = 'notDisplayed';
          document.querySelector('.twelveC').id = 'notDisplayed';
          document.querySelector('.thirteenC').id = 'notDisplayed';
          document.querySelector('.fourteenC').id = 'notDisplayed';
          document.querySelector('.fifteenC').id = 'notDisplayed';
          document.querySelector('.frontC').id = 'displayed';
          document.querySelector('.backC').id = 'notDisplayed';
          if (this.state.quiz[0].step > 0) {
            document.querySelector('.oneC').id = 'picked';
          }
          if (this.state.quiz[1].step > 0) {
            document.querySelector('.twoC').id = 'picked';
          }
          if (this.state.quiz[2].step > 0) {
            document.querySelector('.threeC').id = 'picked';
          }
          if (this.state.quiz[3].step > 0) {
            document.querySelector('.fourC').id = 'picked';
          }
          if (this.state.quiz[4].step > 0) {
            document.querySelector('.fiveC').id = 'picked';
          }
          if (this.state.quiz[5].step > 0) {
            document.querySelector('.sixC').id = 'picked';
          }
          if (this.state.quiz[6].step > 0) {
            document.querySelector('.sevenC').id = 'picked';
          }
          if (this.state.quiz[7].step > 0) {
            document.querySelector('.eightC').id = 'picked';
          }
          if (this.state.quiz[8].step > 0) {
            document.querySelector('.nineC').id = 'picked';
          }
          if (this.state.quiz[9].step > 0) {
            document.querySelector('.tenC').id = 'picked';
          }
        }
        if (this.state.num === 0) {
          document.querySelector('.downC').id = 'one';
        }
        if (this.state.num === 1) {
          document.querySelector('.downC').id = 'two';
        }
        if (this.state.num === 2) {
          document.querySelector('.downC').id = 'three';
        }
        if (this.state.num === 3) {
          document.querySelector('.downC').id = 'four';
        }
        if (this.state.num === 4) {
          document.querySelector('.downC').id = 'five';
        }
        if (this.state.num === 5) {
          document.querySelector('.downC').id = 'six';
        }
        if (this.state.num === 6) {
          document.querySelector('.downC').id = 'seven';
        }
        if (this.state.num === 7) {
          document.querySelector('.downC').id = 'eight';
        }
        if (this.state.num === 8) {
          document.querySelector('.downC').id = 'nine';
        }
        if (this.state.num === 10) {
          document.querySelector('.downC').id = 'eleven';
        }
        if (this.state.num === 11) {
          document.querySelector('.downC').id = 'twelve';
        }
        if (this.state.num === 12) {
          document.querySelector('.downC').id = 'thirteen';
        }
        if (this.state.num === 13) {
          document.querySelector('.downC').id = 'fourteen';
        }
        if (this.state.num === 14) {
          document.querySelector('.downC').id = 'fifteen';
        }
      }
    );
  };

  optionsButton1 = () => {
    const newQuiz = [...this.state.quiz];
    newQuiz[this.state.num] = { ...this.state.quiz[this.state.num], step: 1 };
    this.setState(
      () => ({
        quiz: newQuiz,
      }),
      () => {
        document.querySelector('.ques1C').id = 'picked';
        document.querySelector('.ques2C').id = 'unpicked';
        document.querySelector('.ques3C').id = 'unpicked';
        document.querySelector('.ques4C').id = 'unpicked';
        if (
          this.state.quiz[this.state.num].option1 ===
          this.state.quiz[this.state.num].answer
        ) {
          const mainQuiz = [...this.state.quiz]
          mainQuiz[this.state.num] = {...this.state.quiz[this.state.num], ans: 1}
          this.setState(() => ({
            quiz:mainQuiz
          }));
        }
        if (
          this.state.quiz[this.state.num].option1 !==
          this.state.quiz[this.state.num].answer
        ) {
          const mainQuiz = [...this.state.quiz]
          mainQuiz[this.state.num] = {...this.state.quiz[this.state.num], ans: 0}
          this.setState(() => ({
            quiz:mainQuiz
          }));
        }
        console.log(this.state.quiz)
        if (this.state.num === 0) {
          document.querySelector('.oneC').id = 'picked';
        }
        if (this.state.num === 1) {
          document.querySelector('.twoC').id = 'picked';
        }
        if (this.state.num === 2) {
          document.querySelector('.threeC').id = 'picked';
        }
        if (this.state.num === 3) {
          document.querySelector('.fourC').id = 'picked';
        }
        if (this.state.num === 4) {
          document.querySelector('.fiveC').id = 'picked';
        }
        if (this.state.num === 5) {
          document.querySelector('.sixC').id = 'picked';
        }
        if (this.state.num === 6) {
          document.querySelector('.sevenC').id = 'picked';
        }
        if (this.state.num === 7) {
          document.querySelector('.eightC').id = 'picked';
        }
        if (this.state.num === 8) {
          document.querySelector('.nineC').id = 'picked';
        }
        if (this.state.num === 9) {
          document.querySelector('.tenC').id = 'picked';
        }
        if (this.state.num === 10) {
          document.querySelector('.elevenC').id = 'picked';
        }
        if (this.state.num === 11) {
          document.querySelector('.twelveC').id = 'picked';
        }
        if (this.state.num === 12) {
          document.querySelector('.thirteenC').id = 'picked';
        }
        if (this.state.num === 13) {
          document.querySelector('.fourteenC').id = 'picked';
        }
        if (this.state.num === 14) {
          document.querySelector('.fifteenC').id = 'picked';
        }
      }
    );
  };

  optionsButton2 = () => {
    const newQuiz = [...this.state.quiz];
    newQuiz[this.state.num] = { ...this.state.quiz[this.state.num], step: 2 };
    this.setState(
      () => ({
        quiz: newQuiz,
      }),
      () => {
        document.querySelector('.ques1C').id = 'unpicked';
        document.querySelector('.ques2C').id = 'picked';
        document.querySelector('.ques3C').id = 'unpicked';
        document.querySelector('.ques4C').id = 'unpicked';
        if (
          this.state.quiz[this.state.num].option2 ===
          this.state.quiz[this.state.num].answer
        ) {
          const mainQuiz = [...this.state.quiz]
          mainQuiz[this.state.num] = {...this.state.quiz[this.state.num], ans: 1}
          this.setState(() => ({
            quiz:mainQuiz
          }));
        }
        if (
          this.state.quiz[this.state.num].option2 !==
          this.state.quiz[this.state.num].answer
        ) {
          const mainQuiz = [...this.state.quiz]
          mainQuiz[this.state.num] = {...this.state.quiz[this.state.num], ans: 0}
          this.setState(() => ({
            quiz:mainQuiz
          }));
        }
        console.log(this.state.quiz)
        if (this.state.num === 0) {
          document.querySelector('.oneC').id = 'picked';
        }
        if (this.state.num === 1) {
          document.querySelector('.twoC').id = 'picked';
        }
        if (this.state.num === 2) {
          document.querySelector('.threeC').id = 'picked';
        }
        if (this.state.num === 3) {
          document.querySelector('.fourC').id = 'picked';
        }
        if (this.state.num === 4) {
          document.querySelector('.fiveC').id = 'picked';
        }
        if (this.state.num === 5) {
          document.querySelector('.sixC').id = 'picked';
        }
        if (this.state.num === 6) {
          document.querySelector('.sevenC').id = 'picked';
        }
        if (this.state.num === 7) {
          document.querySelector('.eightC').id = 'picked';
        }
        if (this.state.num === 8) {
          document.querySelector('.nineC').id = 'picked';
        }
        if (this.state.num === 9) {
          document.querySelector('.tenC').id = 'picked';
        }
        if (this.state.num === 10) {
          document.querySelector('.elevenC').id = 'picked';
        }
        if (this.state.num === 11) {
          document.querySelector('.twelveC').id = 'picked';
        }
        if (this.state.num === 12) {
          document.querySelector('.thirteenC').id = 'picked';
        }
        if (this.state.num === 13) {
          document.querySelector('.fourteenC').id = 'picked';
        }
        if (this.state.num === 14) {
          document.querySelector('.fifteenC').id = 'picked';
        }
      }
    );
  };

  optionsButton3 = () => {
    const newQuiz = [...this.state.quiz];
    newQuiz[this.state.num] = { ...this.state.quiz[this.state.num], step: 3 };
    this.setState(
      () => ({
        quiz: newQuiz,
      }),
      () => {
        document.querySelector('.ques1C').id = 'unpicked';
        document.querySelector('.ques2C').id = 'unpicked';
        document.querySelector('.ques3C').id = 'picked';
        document.querySelector('.ques4C').id = 'unpicked';
        if (
          this.state.quiz[this.state.num].option3 ===
          this.state.quiz[this.state.num].answer
        ) {
          const mainQuiz = [...this.state.quiz]
          mainQuiz[this.state.num] = {...this.state.quiz[this.state.num], ans: 1}
          this.setState(() => ({
            quiz:mainQuiz
          }));
        }
        if (
          this.state.quiz[this.state.num].option3 !==
          this.state.quiz[this.state.num].answer
        ) {
          const mainQuiz = [...this.state.quiz]
          mainQuiz[this.state.num] = {...this.state.quiz[this.state.num], ans: 0}
          this.setState(() => ({
            quiz:mainQuiz
          }));
        }
        console.log(this.state.quiz)
        if (this.state.num === 0) {
          document.querySelector('.oneC').id = 'picked';
        }
        if (this.state.num === 1) {
          document.querySelector('.twoC').id = 'picked';
        }
        if (this.state.num === 2) {
          document.querySelector('.threeC').id = 'picked';
        }
        if (this.state.num === 3) {
          document.querySelector('.fourC').id = 'picked';
        }
        if (this.state.num === 4) {
          document.querySelector('.fiveC').id = 'picked';
        }
        if (this.state.num === 5) {
          document.querySelector('.sixC').id = 'picked';
        }
        if (this.state.num === 6) {
          document.querySelector('.sevenC').id = 'picked';
        }
        if (this.state.num === 7) {
          document.querySelector('.eightC').id = 'picked';
        }
        if (this.state.num === 8) {
          document.querySelector('.nineC').id = 'picked';
        }
        if (this.state.num === 9) {
          document.querySelector('.tenC').id = 'picked';
        }
        if (this.state.num === 10) {
          document.querySelector('.elevenC').id = 'picked';
        }
        if (this.state.num === 11) {
          document.querySelector('.twelveC').id = 'picked';
        }
        if (this.state.num === 12) {
          document.querySelector('.thirteenC').id = 'picked';
        }
        if (this.state.num === 13) {
          document.querySelector('.fourteenC').id = 'picked';
        }
        if (this.state.num === 14) {
          document.querySelector('.fifteenC').id = 'picked';
        }
      }
    );
  };

  optionsButton4 = () => {
    const newQuiz = [...this.state.quiz];
    newQuiz[this.state.num] = { ...this.state.quiz[this.state.num], step: 4 };
    this.setState(
      () => ({
        quiz: newQuiz,
      }),
      () => {
        document.querySelector('.ques1C').id = 'unpicked';
        document.querySelector('.ques2C').id = 'unpicked';
        document.querySelector('.ques3C').id = 'unpicked';
        document.querySelector('.ques4C').id = 'picked';
        if (
          this.state.quiz[this.state.num].option4 ===
          this.state.quiz[this.state.num].answer
        ) {
          const mainQuiz = [...this.state.quiz]
          mainQuiz[this.state.num] = {...this.state.quiz[this.state.num], ans: 1}
          this.setState(() => ({
            quiz:mainQuiz
          }));
        }
        if (
          this.state.quiz[this.state.num].option4 !==
          this.state.quiz[this.state.num].answer
        ) {
          const mainQuiz = [...this.state.quiz]
          mainQuiz[this.state.num] = {...this.state.quiz[this.state.num], ans: 0}
          this.setState(() => ({
            quiz:mainQuiz
          }));
        }
        console.log(this.state.quiz)
        if (this.state.num === 0) {
          document.querySelector('.oneC').id = 'picked';
        }
        if (this.state.num === 1) {
          document.querySelector('.twoC').id = 'picked';
        }
        if (this.state.num === 2) {
          document.querySelector('.threeC').id = 'picked';
        }
        if (this.state.num === 3) {
          document.querySelector('.fourC').id = 'picked';
        }
        if (this.state.num === 4) {
          document.querySelector('.fiveC').id = 'picked';
        }
        if (this.state.num === 5) {
          document.querySelector('.sixC').id = 'picked';
        }
        if (this.state.num === 6) {
          document.querySelector('.sevenC').id = 'picked';
        }
        if (this.state.num === 7) {
          document.querySelector('.eightC').id = 'picked';
        }
        if (this.state.num === 8) {
          document.querySelector('.nineC').id = 'picked';
        }
        if (this.state.num === 9) {
          document.querySelector('.tenC').id = 'picked';
        }
        if (this.state.num === 10) {
          document.querySelector('.elevenC').id = 'picked';
        }
        if (this.state.num === 11) {
          document.querySelector('.twelveC').id = 'picked';
        }
        if (this.state.num === 12) {
          document.querySelector('.thirteenC').id = 'picked';
        }
        if (this.state.num === 13) {
          document.querySelector('.fourteenC').id = 'picked';
        }
        if (this.state.num === 14) {
          document.querySelector('.fifteenC').id = 'picked';
        }
      }
    );
  };

  moveTo = (look, at, me) => {
    this.setState(
      (state) => ({
        num: state.num = look,
      }),
      () => {
        if (this.state.quiz[this.state.num].step === 1) {
          document.querySelector('.ques1C').id = 'picked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 2) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'picked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 3) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'picked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 4) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'picked';
        }
        if (this.state.quiz[this.state.num].step === 0) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        document.querySelector('.prevC').id = at;
        document.querySelector('.nextC').id = me;
        if (this.state.num === 0) {
          document.querySelector('.downC').id = 'one';
        }
        if (this.state.num === 1) {
          document.querySelector('.downC').id = 'two';
        }
        if (this.state.num === 2) {
          document.querySelector('.downC').id = 'three';
        }
        if (this.state.num === 3) {
          document.querySelector('.downC').id = 'four';
        }
        if (this.state.num === 4) {
          document.querySelector('.downC').id = 'five';
        }
        if (this.state.num === 5) {
          document.querySelector('.downC').id = 'six';
        }
        if (this.state.num === 6) {
          document.querySelector('.downC').id = 'seven';
        }
        if (this.state.num === 7) {
          document.querySelector('.downC').id = 'eight';
        }
        if (this.state.num === 8) {
          document.querySelector('.downC').id = 'nine';
        }
        if (this.state.num === 9) {
          document.querySelector('.downC').id = 'ten';
        }
        if (this.state.num === 10) {
          document.querySelector('.downC').id = 'eleven';
        }
        if (this.state.num === 11) {
          document.querySelector('.downC').id = 'twelve';
        }
        if (this.state.num === 12) {
          document.querySelector('.downC').id = 'thirteen';
        }
        if (this.state.num === 13) {
          document.querySelector('.downC').id = 'fourteen';
        }
        if (this.state.num === 14) {
          document.querySelector('.downC').id = 'fifteen';
        }
      }
    );
  };

  frontNav = () => {
    this.setState(
      (state) => ({ num: state.num = 10 }),
      () => {
        document.querySelector('.elevenC').id = 'displayed';
        document.querySelector('.twelveC').id = 'displayed';
        document.querySelector('.thirteenC').id = 'displayed';
        document.querySelector('.fourteenC').id = 'displayed';
        document.querySelector('.fifteenC').id = 'displayed';
        document.querySelector('.oneC').id = 'notDisplayed';
        document.querySelector('.twoC').id = 'notDisplayed';
        document.querySelector('.threeC').id = 'notDisplayed';
        document.querySelector('.fourC').id = 'notDisplayed';
        document.querySelector('.fiveC').id = 'notDisplayed';
        document.querySelector('.sixC').id = 'notDisplayed';
        document.querySelector('.sevenC').id = 'notDisplayed';
        document.querySelector('.eightC').id = 'notDisplayed';
        document.querySelector('.nineC').id = 'notDisplayed';
        document.querySelector('.tenC').id = 'notDisplayed';
        document.querySelector('.backC').id = 'displayed';
        document.querySelector('.frontC').id = 'notDisplayed';
        document.querySelector('.downC').id = 'two';
        if (this.state.quiz[10].step > 0) {
          document.querySelector('.elevenC').id = 'picked';
        }
        if (this.state.quiz[11].step > 0) {
          document.querySelector('.twelveC').id = 'picked';
        }
        if (this.state.quiz[12].step > 0) {
          document.querySelector('.thirteenC').id = 'picked';
        }
        if (this.state.quiz[13].step > 0) {
          document.querySelector('.fourteenC').id = 'picked';
        }
        if (this.state.quiz[14].step > 0) {
          document.querySelector('.fifteenC').id = 'picked';
        }
        if (this.state.quiz[this.state.num].step === 1) {
          document.querySelector('.ques1C').id = 'picked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 2) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'picked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 3) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'picked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 4) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'picked';
        }
        if (this.state.quiz[this.state.num].step === 0) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
      }
    );
  };

  backNav = () => {
    this.setState(
      (state) => ({ num: state.num = 9 }),
      () => {
        document.querySelector('.oneC').id = 'displayed';
        document.querySelector('.twoC').id = 'displayed';
        document.querySelector('.threeC').id = 'displayed';
        document.querySelector('.fourC').id = 'displayed';
        document.querySelector('.fiveC').id = 'displayed';
        document.querySelector('.sixC').id = 'displayed';
        document.querySelector('.sevenC').id = 'displayed';
        document.querySelector('.eightC').id = 'displayed';
        document.querySelector('.nineC').id = 'displayed';
        document.querySelector('.tenC').id = 'displayed';
        document.querySelector('.elevenC').id = 'notDisplayed';
        document.querySelector('.twelveC').id = 'notDisplayed';
        document.querySelector('.thirteenC').id = 'notDisplayed';
        document.querySelector('.fourteenC').id = 'notDisplayed';
        document.querySelector('.fifteenC').id = 'notDisplayed';
        document.querySelector('.frontC').id = 'displayed';
        document.querySelector('.backC').id = 'notDisplayed';
        document.querySelector('.downC').id = 'ten';
        if (this.state.quiz[0].step > 0) {
          document.querySelector('.oneC').id = 'picked';
        }
        if (this.state.quiz[1].step > 0) {
          document.querySelector('.twoC').id = 'picked';
        }
        if (this.state.quiz[2].step > 0) {
          document.querySelector('.threeC').id = 'picked';
        }
        if (this.state.quiz[3].step > 0) {
          document.querySelector('.fourC').id = 'picked';
        }
        if (this.state.quiz[4].step > 0) {
          document.querySelector('.fiveC').id = 'picked';
        }
        if (this.state.quiz[5].step > 0) {
          document.querySelector('.sixC').id = 'picked';
        }
        if (this.state.quiz[6].step > 0) {
          document.querySelector('.sevenC').id = 'picked';
        }
        if (this.state.quiz[7].step > 0) {
          document.querySelector('.eightC').id = 'picked';
        }
        if (this.state.quiz[8].step > 0) {
          document.querySelector('.nineC').id = 'picked';
        }
        if (this.state.quiz[9].step > 0) {
          document.querySelector('.tenC').id = 'picked';
        }
        if (this.state.quiz[this.state.num].step === 1) {
          document.querySelector('.ques1C').id = 'picked';
        }
        if (this.state.quiz[this.state.num].step === 2) {
          document.querySelector('.ques2C').id = 'picked';
        }
        if (this.state.quiz[this.state.num].step === 3) {
          document.querySelector('.ques3C').id = 'picked';
        }
        if (this.state.quiz[this.state.num].step === 4) {
          document.querySelector('.ques4C').id = 'picked';
        }
        if (this.state.quiz[this.state.num].step === 1) {
          document.querySelector('.ques1C').id = 'picked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 2) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'picked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 3) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'picked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
        if (this.state.quiz[this.state.num].step === 4) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'picked';
        }
        if (this.state.quiz[this.state.num].step === 0) {
          document.querySelector('.ques1C').id = 'unpicked';
          document.querySelector('.ques2C').id = 'unpicked';
          document.querySelector('.ques3C').id = 'unpicked';
          document.querySelector('.ques4C').id = 'unpicked';
        }
      }
    );
  };
  componentDidMount() {
    document.querySelector('.chemistryC').id = 'quesDisplay';
    this.setState({
      release:
        this.state.release ===
        setInterval(() => {
          this.setState(() => ({
            minute: this.state.minute - 1,
          }));
          if (this.state.minute === 0) {
            this.setState(() => ({
              hour: this.state.hour - 1,
              minute: this.state.minute + 59
            }));
          }
          if (this.state.hour === 0) {
            this.props.history.push({
              pathname: '/fifth',
            });
          }
          // if (this.state.minute <= 9) {
          //   document.querySelector('.zero').id = 'displayed';
          // }else{
          //   document.querySelector('.zero').id = 'notDisplayed'
          // }
          // if (this.state.z === 59) {
          //   document.querySelector('.zero').id = 'notDisplayed';
          // }
          // if (this.state.a <= 9) {
          //   document.querySelector('.zero2').id = 'displayed';
          // }
          // this.setState(() => ({
          //   resume: this.state.resume === this.state.z,
          // }));
        }, 1000),
    });

    if (this.state.num === 0) {
      document.querySelector('.prevC').id = 'notDisplayed';
      document.querySelector('.elevenC').id = 'notDisplayed';
      document.querySelector('.twelveC').id = 'notDisplayed';
      document.querySelector('.thirteenC').id = 'notDisplayed';
      document.querySelector('.fourteenC').id = 'notDisplayed';
      document.querySelector('.fifteenC').id = 'notDisplayed';
      document.querySelector('.backC').id = 'notDisplayed';
    }
    if (this.state.numP === 0) {
      document.querySelector('.prevP').id = 'notDisplayed';
      document.querySelector('.elevenP').id = 'notDisplayed';
      document.querySelector('.twelveP').id = 'notDisplayed';
      document.querySelector('.thirteenP').id = 'notDisplayed';
      document.querySelector('.fourteenP').id = 'notDisplayed';
      document.querySelector('.fifteenP').id = 'notDisplayed';
      document.querySelector('.backP').id = 'notDisplayed';
    }
  }

  physicsTest = () => {
      // localStorage.setItem("startTime",JSON.stringify(this.state.start))
      //   localStorage.setItem("stopTime",JSON.stringify(this.state.stop))
        // localStorage.setItem("zero2",JSON.stringify(this.state.zero2))
        // localStorage.setItem("hour",JSON.stringify(this.state.hour))
        // localStorage.setItem("zero",JSON.stringify(this.state.zero))
        // localStorage.setItem("resume",JSON.stringify(this.state.resume))
        // this.props.history.push({
        //     pathname:'/fourth'
        // }) 
    document.querySelector('.mainBoxC').id = 'notDisplayed';
    document.querySelector('.mainBoxP').id = 'displayed';
    document.querySelector('.physicsP').id = 'quesDisplay';
    document.querySelector('.chemistryP').id = 'notQuesDisplay';
  };

  endTest = () => {
    var number = 0;
    var act = 0;
    while (act < this.state.quizP.length) {
      number += this.state.quizP[act].ans;
      act++;
    }
    localStorage.setItem('answerphy', number);
    var number2 = 0;
    var act2 = 0;
    while (act2 < this.state.quiz.length) {
      number2 += this.state.quiz[act2].ans;
      act2++;
    }
    localStorage.setItem('answerche', number2);
    this.setState({
      release: this.state.release === clearInterval(this.state.release),
    });
    this.props.history.push({
      pathname: '/fifth',
    });
  };

  nextQuestionP = () => {
    //this.setState({numP:this.state.numP+1})
    this.setState(
      () => ({
        numP: this.state.numP + 1,
      }),
      () => {
        if (this.state.quizP[this.state.numP].step === 1) {
          document.querySelector('.ques1P').id = 'picked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 2) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'picked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 3) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'picked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 4) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'picked';
        }
        if (this.state.quizP[this.state.numP].step === 0) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.numP === this.state.quizP.length - 1) {
          document.querySelector('.nextP').id = 'notDisplayed';
          document.querySelector('.frontP').id = 'notDisplayed';
          document.querySelector('.backP').id = 'displayed';
        }
        if (this.state.numP !== this.state.quizP.length - 1) {
          document.querySelector('.nextP').id = 'displayed';
        }
        if (this.state.numP !== 0) {
          document.querySelector('.prevP').id = 'displayed';
        }
        if (this.state.numP === 10) {
          document.querySelector('.downP').id = 'eleven';
          document.querySelector('.elevenP').id = 'displayed';
          document.querySelector('.twelveP').id = 'displayed';
          document.querySelector('.thirteenP').id = 'displayed';
          document.querySelector('.fourteenP').id = 'displayed';
          document.querySelector('.fifteenP').id = 'displayed';
          document.querySelector('.frontP').id = 'notDisplayed';
          document.querySelector('.backP').id = 'displayed';
          document.querySelector('.oneP').id = 'notDisplayed';
          document.querySelector('.twoP').id = 'notDisplayed';
          document.querySelector('.threeP').id = 'notDisplayed';
          document.querySelector('.fourP').id = 'notDisplayed';
          document.querySelector('.fiveP').id = 'notDisplayed';
          document.querySelector('.sixP').id = 'notDisplayed';
          document.querySelector('.sevenP').id = 'notDisplayed';
          document.querySelector('.eightP').id = 'notDisplayed';
          document.querySelector('.nineP').id = 'notDisplayed';
          document.querySelector('.tenP').id = 'notDisplayed';
          if (this.state.quizP[10].step > 0) {
            document.querySelector('.elevenP').id = 'picked';
          }
          if (this.state.quizP[11].step > 0) {
            document.querySelector('.twelveP').id = 'picked';
          }
          if (this.state.quizP[12].step > 0) {
            document.querySelector('.thirteenP').id = 'picked';
          }
          if (this.state.quizP[13].step > 0) {
            document.querySelector('.fourteenP').id = 'picked';
          }
          if (this.state.quizP[14].step > 0) {
            document.querySelector('.fifteenP').id = 'picked';
          }
        }
        if (this.state.numP === 1) {
          document.querySelector('.downP').id = 'two';
        }
        if (this.state.numP === 2) {
          document.querySelector('.downP').id = 'three';
        }
        if (this.state.numP === 3) {
          document.querySelector('.downP').id = 'four';
        }
        if (this.state.numP === 4) {
          document.querySelector('.downP').id = 'five';
        }
        if (this.state.numP === 5) {
          document.querySelector('.downP').id = 'six';
        }
        if (this.state.numP === 6) {
          document.querySelector('.downP').id = 'seven';
        }
        if (this.state.numP === 7) {
          document.querySelector('.downP').id = 'eight';
        }
        if (this.state.numP === 8) {
          document.querySelector('.downP').id = 'nine';
        }
        if (this.state.numP === 9) {
          document.querySelector('.downP').id = 'ten';
        }
        if (this.state.numP === 11) {
          document.querySelector('.downP').id = 'twelve';
        }
        if (this.state.numP === 12) {
          document.querySelector('.downP').id = 'thirteen';
        }
        if (this.state.numP === 13) {
          document.querySelector('.downP').id = 'fourteen';
        }
        if (this.state.numP === 14) {
          document.querySelector('.downP').id = 'fifteen';
        }
      }
    );
  };

  prevQuestionP = () => {
    this.setState(
      () => ({
        numP: this.state.numP - 1,
      }),
      () => {
        if (this.state.quizP[this.state.numP].step === 1) {
          document.querySelector('.ques1P').id = 'picked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 2) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'picked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 3) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'picked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 4) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'picked';
        }
        if (this.state.quizP[this.state.numP].step === 0) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.numP === 0) {
          document.querySelector('.prevP').id = 'notDisplayed';
        }
        if (this.state.numP !== this.state.quizP.length - 1) {
          document.querySelector('.nextP').id = 'displayed';
        }
        if (this.state.numP === 9) {
          document.querySelector('.downP').id = 'ten';
          document.querySelector('.oneP').id = 'displayed';
          document.querySelector('.twoP').id = 'displayed';
          document.querySelector('.threeP').id = 'displayed';
          document.querySelector('.fourP').id = 'displayed';
          document.querySelector('.fiveP').id = 'displayed';
          document.querySelector('.sixP').id = 'displayed';
          document.querySelector('.sevenP').id = 'displayed';
          document.querySelector('.eightP').id = 'displayed';
          document.querySelector('.nineP').id = 'displayed';
          document.querySelector('.tenP').id = 'displayed';
          document.querySelector('.elevenP').id = 'notDisplayed';
          document.querySelector('.twelveP').id = 'notDisplayed';
          document.querySelector('.thirteenP').id = 'notDisplayed';
          document.querySelector('.fourteenP').id = 'notDisplayed';
          document.querySelector('.fifteenP').id = 'notDisplayed';
          document.querySelector('.frontP').id = 'displayed';
          document.querySelector('.backP').id = 'notDisplayed';
          if (this.state.quizP[0].step > 0) {
            document.querySelector('.oneP').id = 'picked';
          }
          if (this.state.quizP[1].step > 0) {
            document.querySelector('.twoP').id = 'picked';
          }
          if (this.state.quizP[2].step > 0) {
            document.querySelector('.threeP').id = 'picked';
          }
          if (this.state.quizP[3].step > 0) {
            document.querySelector('.fourP').id = 'picked';
          }
          if (this.state.quizP[4].step > 0) {
            document.querySelector('.fiveP').id = 'picked';
          }
          if (this.state.quizP[5].step > 0) {
            document.querySelector('.sixP').id = 'picked';
          }
          if (this.state.quizP[6].step > 0) {
            document.querySelector('.sevenP').id = 'picked';
          }
          if (this.state.quizP[7].step > 0) {
            document.querySelector('.eightP').id = 'picked';
          }
          if (this.state.quizP[8].step > 0) {
            document.querySelector('.nineP').id = 'picked';
          }
          if (this.state.quizP[9].step > 0) {
            document.querySelector('.tenP').id = 'picked';
          }
        }
        if (this.state.numP === 0) {
          document.querySelector('.downP').id = 'one';
        }
        if (this.state.numP === 1) {
          document.querySelector('.downP').id = 'two';
        }
        if (this.state.numP === 2) {
          document.querySelector('.downP').id = 'three';
        }
        if (this.state.numP === 3) {
          document.querySelector('.downP').id = 'four';
        }
        if (this.state.numP === 4) {
          document.querySelector('.downP').id = 'five';
        }
        if (this.state.numP === 5) {
          document.querySelector('.downP').id = 'six';
        }
        if (this.state.numP === 6) {
          document.querySelector('.downP').id = 'seven';
        }
        if (this.state.numP === 7) {
          document.querySelector('.downP').id = 'eight';
        }
        if (this.state.numP === 8) {
          document.querySelector('.downP').id = 'nine';
        }
        if (this.state.numP === 10) {
          document.querySelector('.downP').id = 'eleven';
        }
        if (this.state.numP === 11) {
          document.querySelector('.downP').id = 'twelve';
        }
        if (this.state.numP === 12) {
          document.querySelector('.downP').id = 'thirteen';
        }
        if (this.state.numP === 13) {
          document.querySelector('.downP').id = 'fourteen';
        }
        if (this.state.numP === 14) {
          document.querySelector('.downP').id = 'fifteen';
        }
      }
    );
  };

  optionsButton1P = () => {
    const newquizP = [...this.state.quizP];
    newquizP[this.state.numP] = {
      ...this.state.quizP[this.state.numP],
      step: 1,
    };
    this.setState(
      () => ({
        quizP: newquizP,
      }),
      () => {
        document.querySelector('.ques1P').id = 'picked';
        document.querySelector('.ques2P').id = 'unpicked';
        document.querySelector('.ques3P').id = 'unpicked';
        document.querySelector('.ques4P').id = 'unpicked';
        if (
          this.state.quizP[this.state.numP].option1 ===
          this.state.quizP[this.state.numP].answer
        ) {
          const mainQuiz = [...this.state.quizP]
          mainQuiz[this.state.numP] = {...this.state.quizP[this.state.numP], ans: 1}
          this.setState(() => ({
            quizP:mainQuiz
          }));
        }
        if (
          this.state.quizP[this.state.numP].option1 !==
          this.state.quizP[this.state.numP].answer
        ) {
          const mainQuiz = [...this.state.quizP]
          mainQuiz[this.state.numP] = {...this.state.quizP[this.state.numP], ans: 0}
          this.setState(() => ({
            quizP:mainQuiz
          }));
        }
        if (this.state.numP === 0) {
          document.querySelector('.oneP').id = 'picked';
        }
        if (this.state.numP === 1) {
          document.querySelector('.twoP').id = 'picked';
        }
        if (this.state.numP === 2) {
          document.querySelector('.threeP').id = 'picked';
        }
        if (this.state.numP === 3) {
          document.querySelector('.fourP').id = 'picked';
        }
        if (this.state.numP === 4) {
          document.querySelector('.fiveP').id = 'picked';
        }
        if (this.state.numP === 5) {
          document.querySelector('.sixP').id = 'picked';
        }
        if (this.state.numP === 6) {
          document.querySelector('.sevenP').id = 'picked';
        }
        if (this.state.numP === 7) {
          document.querySelector('.eightP').id = 'picked';
        }
        if (this.state.numP === 8) {
          document.querySelector('.nineP').id = 'picked';
        }
        if (this.state.numP === 9) {
          document.querySelector('.tenP').id = 'picked';
        }
        if (this.state.numP === 10) {
          document.querySelector('.elevenP').id = 'picked';
        }
        if (this.state.numP === 11) {
          document.querySelector('.twelveP').id = 'picked';
        }
        if (this.state.numP === 12) {
          document.querySelector('.thirteenP').id = 'picked';
        }
        if (this.state.numP === 13) {
          document.querySelector('.fourteenP').id = 'picked';
        }
        if (this.state.numP === 14) {
          document.querySelector('.fifteenP').id = 'picked';
        }
      }
    );
  };

  optionsButton2P = () => {
    const newquizP = [...this.state.quizP];
    newquizP[this.state.numP] = {
      ...this.state.quizP[this.state.numP],
      step: 2,
    };
    this.setState(
      () => ({
        quizP: newquizP,
      }),
      () => {
        document.querySelector('.ques1P').id = 'unpicked';
        document.querySelector('.ques2P').id = 'picked';
        document.querySelector('.ques3P').id = 'unpicked';
        document.querySelector('.ques4P').id = 'unpicked';
        if (
          this.state.quizP[this.state.numP].option2 ===
          this.state.quizP[this.state.numP].answer
        ) {
          const mainQuiz = [...this.state.quizP]
          mainQuiz[this.state.numP] = {...this.state.quizP[this.state.numP], ans: 1}
          this.setState(() => ({
            quizP:mainQuiz
          }));
        }
        if (
          this.state.quizP[this.state.numP].option2 !==
          this.state.quizP[this.state.numP].answer
        ) {
          const mainQuiz = [...this.state.quizP]
          mainQuiz[this.state.numP] = {...this.state.quizP[this.state.numP], ans: 0}
          this.setState(() => ({
            quizP:mainQuiz
          }));
        }
        if (this.state.numP === 0) {
          document.querySelector('.oneP').id = 'picked';
        }
        if (this.state.numP === 1) {
          document.querySelector('.twoP').id = 'picked';
        }
        if (this.state.numP === 2) {
          document.querySelector('.threeP').id = 'picked';
        }
        if (this.state.numP === 3) {
          document.querySelector('.fourP').id = 'picked';
        }
        if (this.state.numP === 4) {
          document.querySelector('.fiveP').id = 'picked';
        }
        if (this.state.numP === 5) {
          document.querySelector('.sixP').id = 'picked';
        }
        if (this.state.numP === 6) {
          document.querySelector('.sevenP').id = 'picked';
        }
        if (this.state.numP === 7) {
          document.querySelector('.eightP').id = 'picked';
        }
        if (this.state.numP === 8) {
          document.querySelector('.nineP').id = 'picked';
        }
        if (this.state.numP === 9) {
          document.querySelector('.tenP').id = 'picked';
        }
        if (this.state.numP === 10) {
          document.querySelector('.elevenP').id = 'picked';
        }
        if (this.state.numP === 11) {
          document.querySelector('.twelveP').id = 'picked';
        }
        if (this.state.numP === 12) {
          document.querySelector('.thirteenP').id = 'picked';
        }
        if (this.state.numP === 13) {
          document.querySelector('.fourteenP').id = 'picked';
        }
        if (this.state.numP === 14) {
          document.querySelector('.fifteenP').id = 'picked';
        }
      }
    );
  };

  optionsButton3P = () => {
    const newquizP = [...this.state.quizP];
    newquizP[this.state.numP] = {
      ...this.state.quizP[this.state.numP],
      step: 3,
    };
    this.setState(
      () => ({
        quizP: newquizP,
      }),
      () => {
        document.querySelector('.ques1P').id = 'unpicked';
        document.querySelector('.ques2P').id = 'unpicked';
        document.querySelector('.ques3P').id = 'picked';
        document.querySelector('.ques4P').id = 'unpicked';
        if (
          this.state.quizP[this.state.numP].option3 ===
          this.state.quizP[this.state.numP].answer
        ) {
          const mainQuiz = [...this.state.quizP]
          mainQuiz[this.state.numP] = {...this.state.quizP[this.state.numP], ans: 1}
          this.setState(() => ({
            quizP:mainQuiz
          }));
        }
        if (
          this.state.quizP[this.state.numP].option3 !==
          this.state.quizP[this.state.numP].answer
        ) {
          const mainQuiz = [...this.state.quizP]
          mainQuiz[this.state.numP] = {...this.state.quizP[this.state.numP], ans: 0}
          this.setState(() => ({
            quizP:mainQuiz
          }));
        }
        if (this.state.numP === 0) {
          document.querySelector('.oneP').id = 'picked';
        }
        if (this.state.numP === 1) {
          document.querySelector('.twoP').id = 'picked';
        }
        if (this.state.numP === 2) {
          document.querySelector('.threeP').id = 'picked';
        }
        if (this.state.numP === 3) {
          document.querySelector('.fourP').id = 'picked';
        }
        if (this.state.numP === 4) {
          document.querySelector('.fiveP').id = 'picked';
        }
        if (this.state.numP === 5) {
          document.querySelector('.sixP').id = 'picked';
        }
        if (this.state.numP === 6) {
          document.querySelector('.sevenP').id = 'picked';
        }
        if (this.state.numP === 7) {
          document.querySelector('.eightP').id = 'picked';
        }
        if (this.state.numP === 8) {
          document.querySelector('.nineP').id = 'picked';
        }
        if (this.state.numP === 9) {
          document.querySelector('.tenP').id = 'picked';
        }
        if (this.state.numP === 10) {
          document.querySelector('.elevenP').id = 'picked';
        }
        if (this.state.numP === 11) {
          document.querySelector('.twelveP').id = 'picked';
        }
        if (this.state.numP === 12) {
          document.querySelector('.thirteenP').id = 'picked';
        }
        if (this.state.numP === 13) {
          document.querySelector('.fourteenP').id = 'picked';
        }
        if (this.state.numP === 14) {
          document.querySelector('.fifteenP').id = 'picked';
        }
      }
    );
  };

  optionsButton4P = () => {
    const newquizP = [...this.state.quizP];
    newquizP[this.state.numP] = {
      ...this.state.quizP[this.state.numP],
      step: 4,
    };
    this.setState(
      () => ({
        quizP: newquizP,
      }),
      () => {
        document.querySelector('.ques1P').id = 'unpicked';
        document.querySelector('.ques2P').id = 'unpicked';
        document.querySelector('.ques3P').id = 'unpicked';
        document.querySelector('.ques4P').id = 'picked';
        if (
          this.state.quizP[this.state.numP].option4 ===
          this.state.quizP[this.state.numP].answer
        ) {
          const mainQuiz = [...this.state.quizP]
          mainQuiz[this.state.numP] = {...this.state.quizP[this.state.numP], ans: 1}
          this.setState(() => ({
            quizP:mainQuiz
          }));
        }
        if (
          this.state.quizP[this.state.numP].option4 !==
          this.state.quizP[this.state.numP].answer
        ) {
          const mainQuiz = [...this.state.quizP]
          mainQuiz[this.state.numP] = {...this.state.quizP[this.state.numP], ans: 0}
          this.setState(() => ({
            quizP:mainQuiz
          }));
        }
        if (this.state.numP === 0) {
          document.querySelector('.oneP').id = 'picked';
        }
        if (this.state.numP === 1) {
          document.querySelector('.twoP').id = 'picked';
        }
        if (this.state.numP === 2) {
          document.querySelector('.threeP').id = 'picked';
        }
        if (this.state.numP === 3) {
          document.querySelector('.fourP').id = 'picked';
        }
        if (this.state.numP === 4) {
          document.querySelector('.fiveP').id = 'picked';
        }
        if (this.state.numP === 5) {
          document.querySelector('.sixP').id = 'picked';
        }
        if (this.state.numP === 6) {
          document.querySelector('.sevenP').id = 'picked';
        }
        if (this.state.numP === 7) {
          document.querySelector('.eightP').id = 'picked';
        }
        if (this.state.numP === 8) {
          document.querySelector('.nineP').id = 'picked';
        }
        if (this.state.numP === 9) {
          document.querySelector('.tenP').id = 'picked';
        }
        if (this.state.numP === 10) {
          document.querySelector('.elevenP').id = 'picked';
        }
        if (this.state.numP === 11) {
          document.querySelector('.twelveP').id = 'picked';
        }
        if (this.state.numP === 12) {
          document.querySelector('.thirteenP').id = 'picked';
        }
        if (this.state.numP === 13) {
          document.querySelector('.fourteenP').id = 'picked';
        }
        if (this.state.numP === 14) {
          document.querySelector('.fifteenP').id = 'picked';
        }
      }
    );
  };

  moveToP = (look, at, me) => {
    this.setState(
      () => ({
        numP: this.state.numP === look,
      }),
      () => {
        if (this.state.quizP[this.state.numP].step === 1) {
          document.querySelector('.ques1P').id = 'picked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 2) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'picked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 3) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'picked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 4) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'picked';
        }
        if (this.state.quizP[this.state.numP].step === 0) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        document.querySelector('.prevP').id = at;
        document.querySelector('.nextP').id = me;
        if (this.state.numP === 0) {
          document.querySelector('.downP').id = 'one';
        }
        if (this.state.numP === 1) {
          document.querySelector('.downP').id = 'two';
        }
        if (this.state.numP === 2) {
          document.querySelector('.downP').id = 'three';
        }
        if (this.state.numP === 3) {
          document.querySelector('.downP').id = 'four';
        }
        if (this.state.numP === 4) {
          document.querySelector('.downP').id = 'five';
        }
        if (this.state.numP === 5) {
          document.querySelector('.downP').id = 'six';
        }
        if (this.state.numP === 6) {
          document.querySelector('.downP').id = 'seven';
        }
        if (this.state.numP === 7) {
          document.querySelector('.downP').id = 'eight';
        }
        if (this.state.numP === 8) {
          document.querySelector('.downP').id = 'nine';
        }
        if (this.state.numP === 9) {
          document.querySelector('.downP').id = 'ten';
        }
        if (this.state.numP === 10) {
          document.querySelector('.downP').id = 'eleven';
        }
        if (this.state.numP === 11) {
          document.querySelector('.downP').id = 'twelve';
        }
        if (this.state.numP === 12) {
          document.querySelector('.downP').id = 'thirteen';
        }
        if (this.state.numP === 13) {
          document.querySelector('.downP').id = 'fourteen';
        }
        if (this.state.numP === 14) {
          document.querySelector('.downP').id = 'fifteen';
        }
      }
    );
  };

  frontNavP = () => {
    this.setState(
      () => ({ numP: this.state.numP === 10 }),
      () => {
        document.querySelector('.elevenP').id = 'displayed';
        document.querySelector('.twelveP').id = 'displayed';
        document.querySelector('.thirteenP').id = 'displayed';
        document.querySelector('.fourteenP').id = 'displayed';
        document.querySelector('.fifteenP').id = 'displayed';
        document.querySelector('.oneP').id = 'notDisplayed';
        document.querySelector('.twoP').id = 'notDisplayed';
        document.querySelector('.threeP').id = 'notDisplayed';
        document.querySelector('.fourP').id = 'notDisplayed';
        document.querySelector('.fiveP').id = 'notDisplayed';
        document.querySelector('.sixP').id = 'notDisplayed';
        document.querySelector('.sevenP').id = 'notDisplayed';
        document.querySelector('.eightP').id = 'notDisplayed';
        document.querySelector('.nineP').id = 'notDisplayed';
        document.querySelector('.tenP').id = 'notDisplayed';
        document.querySelector('.backP').id = 'displayed';
        document.querySelector('.frontP').id = 'notDisplayed';
        document.querySelector('.downP').id = 'two';
        if (this.state.quizP[10].step > 0) {
          document.querySelector('.elevenP').id = 'picked';
        }
        if (this.state.quizP[11].step > 0) {
          document.querySelector('.twelveP').id = 'picked';
        }
        if (this.state.quizP[12].step > 0) {
          document.querySelector('.thirteenP').id = 'picked';
        }
        if (this.state.quizP[13].step > 0) {
          document.querySelector('.fourteenP').id = 'picked';
        }
        if (this.state.quizP[14].step > 0) {
          document.querySelector('.fifteenP').id = 'picked';
        }
        if (this.state.quizP[this.state.numP].step === 1) {
          document.querySelector('.ques1P').id = 'picked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 2) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'picked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 3) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'picked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 4) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'picked';
        }
        if (this.state.quizP[this.state.numP].step === 0) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
      }
    );
  };

  backNavP = () => {
    this.setState(
      () => ({ numP: this.state.numP === 9 }),
      () => {
        document.querySelector('.oneP').id = 'displayed';
        document.querySelector('.twoP').id = 'displayed';
        document.querySelector('.threeP').id = 'displayed';
        document.querySelector('.fourP').id = 'displayed';
        document.querySelector('.fiveP').id = 'displayed';
        document.querySelector('.sixP').id = 'displayed';
        document.querySelector('.sevenP').id = 'displayed';
        document.querySelector('.eightP').id = 'displayed';
        document.querySelector('.nineP').id = 'displayed';
        document.querySelector('.tenP').id = 'displayed';
        document.querySelector('.elevenP').id = 'notDisplayed';
        document.querySelector('.twelveP').id = 'notDisplayed';
        document.querySelector('.thirteenP').id = 'notDisplayed';
        document.querySelector('.fourteenP').id = 'notDisplayed';
        document.querySelector('.fifteenP').id = 'notDisplayed';
        document.querySelector('.frontP').id = 'displayed';
        document.querySelector('.backP').id = 'notDisplayed';
        document.querySelector('.downP').id = 'ten';
        if (this.state.quizP[0].step > 0) {
          document.querySelector('.oneP').id = 'picked';
        }
        if (this.state.quizP[1].step > 0) {
          document.querySelector('.twoP').id = 'picked';
        }
        if (this.state.quizP[2].step > 0) {
          document.querySelector('.threeP').id = 'picked';
        }
        if (this.state.quizP[3].step > 0) {
          document.querySelector('.fourP').id = 'picked';
        }
        if (this.state.quizP[4].step > 0) {
          document.querySelector('.fiveP').id = 'picked';
        }
        if (this.state.quizP[5].step > 0) {
          document.querySelector('.sixP').id = 'picked';
        }
        if (this.state.quizP[6].step > 0) {
          document.querySelector('.sevenP').id = 'picked';
        }
        if (this.state.quizP[7].step > 0) {
          document.querySelector('.eightP').id = 'picked';
        }
        if (this.state.quizP[8].step > 0) {
          document.querySelector('.nineP').id = 'picked';
        }
        if (this.state.quizP[9].step > 0) {
          document.querySelector('.tenP').id = 'picked';
        }
        if (this.state.quizP[this.state.numP].step === 1) {
          document.querySelector('.ques1P').id = 'picked';
        }
        if (this.state.quizP[this.state.numP].step === 2) {
          document.querySelector('.ques2P').id = 'picked';
        }
        if (this.state.quizP[this.state.numP].step === 3) {
          document.querySelector('.ques3P').id = 'picked';
        }
        if (this.state.quizP[this.state.numP].step === 4) {
          document.querySelector('.ques4P').id = 'picked';
        }
        if (this.state.quizP[this.state.numP].step === 1) {
          document.querySelector('.ques1P').id = 'picked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 2) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'picked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 3) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'picked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
        if (this.state.quizP[this.state.numP].step === 4) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'picked';
        }
        if (this.state.quizP[this.state.numP].step === 0) {
          document.querySelector('.ques1P').id = 'unpicked';
          document.querySelector('.ques2P').id = 'unpicked';
          document.querySelector('.ques3P').id = 'unpicked';
          document.querySelector('.ques4P').id = 'unpicked';
        }
      }
    );
  };

  chemistryTest = () => {
        // localStorage.setItem("startTime",JSON.stringify(this.state.start))
        // localStorage.setItem("stopTime",JSON.stringify(this.state.stop))
        // localStorage.setItem("zero2",JSON.stringify(this.state.zero2))
        // localStorage.setItem("hour",JSON.stringify(this.state.hour))
        // localStorage.setItem("zero",JSON.stringify(this.state.zero))
        // localStorage.setItem("resume",JSON.stringify(this.state.resume))
        // this.props.history.push({
        //     pathname:'/third'
        // }) 
    document.querySelector('.mainBoxC').id = 'displayed';
    document.querySelector('.mainBoxP').id = 'notDisplayed';
    document.querySelector('.chemistryC').id = 'quesDisplay';
    document.querySelector('.physicsC').id = 'notQuesDisplay';
  };

  endTestP = () => {
    var number = 0;
    var act = 0;
    console.log(this.state.quiz)
    console.log(this.state.quizP)
    while (act < this.state.quizP.length) {
      number += this.state.quizP[act].ans;
      act++;
    }
    console.log(number)
    localStorage.setItem('answerphy', JSON.stringify(number));
    console.log(JSON.parse(localStorage.getItem('answerphy')))
    var number2 = 0;
    var act2 = 0;
    while (act2 < this.state.quiz.length) {
      number2 += this.state.quiz[act2].ans;
      act2++;
    }
    console.log(number2)
    localStorage.setItem('answerche', JSON.stringify(number2));
    console.log(JSON.parse(localStorage.getItem('answerche')))
    this.setState({
      release: this.state.release === clearInterval(this.state.release),
    });
    this.props.history.push({
      pathname: '/fifth',
    });
  };

  // componentWillUnmount() {
  //   localStorage.setItem('corrections', JSON.stringify(this.state.quiz));
  // }

  render() {
    return (
      <>
        <div className="mainBoxC">
          <div className="firstBoxC">
            <img alt="" src={img2} className="image2C" />
            <img alt="" src={img3} className="image3C" />
            <img alt="" src={img1} className="image1C" />
            <img alt="" src={img8} className="image8C" />
            <img alt="" src={img9} className="image9C" />
            <img alt="" src={img10} className="image10C" />
            <img alt="" src={img11} className="image11C" />
            <img alt="" src={img12} className="image12C" />
            <h2 className="headerC">
              Faculty of Management
              <br />
              <span>Science</span>
            </h2>
            <div className="box4C">
              <p className="time1C">
                <b>
                  Start Time ::{' '}
                  <span style={{ color: 'rgb(213,165,143)' }}>
                    {this.state.start}
                  </span>
                </b>
              </p>
              <p className="time2C">
                <b>
                  Stop Time ::{' '}
                  <span style={{ color: 'rgb(213,165,143)' }}>
                    {this.state.stop}
                  </span>
                </b>
              </p>
              <button className="chemistryC quesC">CHEMISTRY</button>
              <button className="physicsC quesC" onClick={this.physicsTest}>
                PHYSICS
              </button>
              <button className="submitC" onClick={this.endTest}>
                END TEST
              </button>
            </div>
          </div>
          <div className="secondBoxC">
            <div className="TimeRemaining">
              <h2>
                <span style={{ color: 'rgb(125,35,135)' }}>
                  Remaining Time:
                </span>
                {/* <span
                  className="zero2"
                  style={{ color: 'black', fontWeight: '600', display: 'none' }}
                >
                  {this.state.zero2}
                </span> */}
                <span
                  className="hour"
                  style={{ color: 'black', fontWeight: '600' }}
                >
                  {this.state.hour}
                </span>
                <span>:</span>
                {/* <span
                  className="zero"
                  style={{ color: 'black', fontWeight: '600', display: 'none' }}
                >
                  {this.state.zero}
                </span> */}
                <span
                  className="resume"
                  style={{ color: 'black', fontWeight: '600' }}
                >
                  {this.state.minute}
                </span>
              </h2>
            </div>
            <div className="box5C">
              <h2>
                Question{' '}
                <span style={{ color: 'rgb(125,35,135)' }}>
                  {this.state.num + 1}
                </span>
                /15
              </h2>{' '}
            </div>
            <div className="box6C">
              {this.state.quiz[this.state.num].question}
            </div>
            <input
              type="button"
              className="ques1C optionC"
              name="opt1"
              onClick={this.optionsButton1}
              value={this.state.quiz[this.state.num].option1}
            />
            <input
              type="button"
              className="ques2C optionC"
              name="opt2"
              onClick={this.optionsButton2}
              value={this.state.quiz[this.state.num].option2}
            />
            <input
              type="button"
              className="ques3C optionC"
              name="opt3"
              onClick={this.optionsButton3}
              value={this.state.quiz[this.state.num].option3}
            />
            <input
              type="button"
              className="ques4C optionC"
              name="opt4"
              onClick={this.optionsButton4}
              value={this.state.quiz[this.state.num].option4}
            />
            <input
              type="button"
              className="prevC navC"
              onClick={this.prevQuestion}
              value="PREV"
            />
            <input
              type="button"
              className="nextC navC"
              onClick={this.nextQuestion}
              value="NEXT"
            />
            <i className="downC"></i>
            <div className="stompC">
              <input
                type="button"
                onClick={this.backNav}
                className="backC moveC movenavC"
                value="<"
              />
              <input
                type="button"
                onClick={() => this.moveTo(0, 'notDisplayed', 'displayed')}
                className="oneC moveC movenumC"
                value="1"
              />
              <input
                type="button"
                onClick={() => this.moveTo(1, 'displayed', 'displayed')}
                className="twoC moveC movenumC"
                value="2"
              />
              <input
                type="button"
                onClick={() => this.moveTo(2, 'displayed', 'displayed')}
                className="threeC moveC movenumC"
                value="3"
              />
              <input
                type="button"
                onClick={() => this.moveTo(3, 'displayed', 'displayed')}
                className="fourC moveC movenumC"
                value="4"
              />
              <input
                type="button"
                onClick={() => this.moveTo(4, 'displayed', 'displayed')}
                className="fiveC moveC movenumC"
                value="5"
              />
              <input
                type="button"
                onClick={() => this.moveTo(5, 'displayed', 'displayed')}
                className="sixC moveC movenumC"
                value="6"
              />
              <input
                type="button"
                onClick={() => this.moveTo(6, 'displayed', 'displayed')}
                className="sevenC moveC movenumC"
                value="7"
              />
              <input
                type="button"
                onClick={() => this.moveTo(7, 'displayed', 'displayed')}
                className="eightC moveC movenumC"
                value="8"
              />
              <input
                type="button"
                onClick={() => this.moveTo(8, 'displayed', 'displayed')}
                className="nineC moveC movenumC"
                value="9"
              />
              <input
                type="button"
                onClick={() => this.moveTo(9, 'displayed', 'displayed')}
                className="tenC moveC movenumC"
                value="10"
              />
              <input
                type="button"
                onClick={() => this.moveTo(10, 'displayed', 'displayed')}
                className="elevenC moveC movenumC"
                value="11"
              />
              <input
                type="button"
                onClick={() => this.moveTo(11, 'displayed', 'displayed')}
                className="twelveC moveC movenumC"
                value="12"
              />
              <input
                type="button"
                onClick={() => this.moveTo(12, 'displayed', 'displayed')}
                className="thirteenC moveC movenumC"
                value="13"
              />
              <input
                type="button"
                onClick={() => this.moveTo(13, 'displayed', 'displayed')}
                className="fourteenC moveC movenumC"
                value="14"
              />
              <input
                type="button"
                onClick={() => this.moveTo(14, 'displayed', 'notDisplayed')}
                className="fifteenC moveC movenumC"
                value="15"
              />
              <input
                type="button"
                onClick={this.frontNav}
                className="frontC moveC movenavC"
                value=">"
              />
            </div>
            <img alt="" src={img7} className="image7C" />
          </div>
          <img alt="" src={img4} className="image4C" />
        </div>
        <div className="mainBoxP">
          <div className="firstBoxP">
            <img alt="" src={img2} className="image2P" />
            <img alt="" src={img3} className="image3P" />
            <img alt="" src={img1} className="image1P" />
            <img alt="" src={img8} className="image8P" />
            <img alt="" src={img9} className="image9P" />
            <img alt="" src={img10} className="image10P" />
            <img alt="" src={img11} className="image11P" />
            <img alt="" src={img12} className="image12P" />
            <h2 className="headerP">
              Faculty of Management
              <br />
              <span>Science</span>
            </h2>
            <div className="box4P">
              <p className="time1P">
                <b>
                  Start Time ::{' '}
                  <span style={{ color: 'rgb(213,165,143)' }}>
                    {this.state.start}
                  </span>
                </b>
              </p>
              <p className="time2P">
                <b>
                  Stop Time ::{' '}
                  <span style={{ color: 'rgb(213,165,143)' }}>
                    {this.state.stop}
                  </span>
                </b>
              </p>
              <button className="chemistryP quesP" onClick={this.chemistryTest}>
                CHEMISTRY
              </button>
              <button className="physicsP quesP">PHYSICS</button>
              <button className="submitP" onClick={this.endTestP}>
                END TEST
              </button>
            </div>
          </div>
          <div className="secondBoxP">
            <div className="TimeRemaining">
              <h2>
                <span style={{ color: 'rgb(125,35,135)' }}>
                  Remaining Time:
                </span>
                {/* <span
                  className="zero2"
                  style={{ color: 'black', fontWeight: '600', display: 'none' }}
                >
                  {this.state.zero2}
                </span> */}
                <span
                  className="hour"
                  style={{ color: 'black', fontWeight: '600' }}
                >
                  {this.state.hour}
                </span>
                <span>:</span>
                {/* <span
                  className="zero"
                  style={{ color: 'black', fontWeight: '600', display: 'none' }}
                >
                  {this.state.zero}
                </span> */}
                <span
                  className="resume"
                  style={{ color: 'black', fontWeight: '600' }}
                >
                  {this.state.minute}
                </span>
              </h2>
            </div>
            <div className="box5P">
              <h2>
                Question{' '}
                <span style={{ color: 'rgb(125,35,135)' }}>
                  {this.state.numP + 1}
                </span>
                /15
              </h2>{' '}
            </div>
            <div className="box6P">
              {this.state.quizP[this.state.numP].question}
            </div>
            <input
              type="button"
              className="ques1P optionP"
              name="opt1"
              onClick={this.optionsButton1P}
              value={this.state.quizP[this.state.numP].option1}
            />
            <input
              type="button"
              className="ques2P optionP"
              name="opt2"
              onClick={this.optionsButton2P}
              value={this.state.quizP[this.state.numP].option2}
            />
            <input
              type="button"
              className="ques3P optionP"
              name="opt3"
              onClick={this.optionsButton3P}
              value={this.state.quizP[this.state.numP].option3}
            />
            <input
              type="button"
              className="ques4P optionP"
              name="opt4"
              onClick={this.optionsButton4P}
              value={this.state.quizP[this.state.numP].option4}
            />
            <input
              type="button"
              className="prevP navP"
              onClick={this.prevQuestionP}
              value="PREV"
            />
            <input
              type="button"
              className="nextP navP"
              onClick={this.nextQuestionP}
              value="NEXT"
            />
            <i className="downP"></i>
            <div className="stompP">
              <input
                type="button"
                onClick={this.backNavP}
                className="backP moveP movenavP"
                value="<"
              />
              <input
                type="button"
                onClick={() => this.moveToP(0, 'notDisplayed', 'displayed')}
                className="oneP moveP movenumP"
                value="1"
              />
              <input
                type="button"
                onClick={() => this.moveToP(1, 'displayed', 'displayed')}
                className="twoP moveP movenumP"
                value="2"
              />
              <input
                type="button"
                onClick={() => this.moveToP(2, 'displayed', 'displayed')}
                className="threeP moveP movenumP"
                value="3"
              />
              <input
                type="button"
                onClick={() => this.moveToP(3, 'displayed', 'displayed')}
                className="fourP moveP movenumP"
                value="4"
              />
              <input
                type="button"
                onClick={() => this.moveToP(4, 'displayed', 'displayed')}
                className="fiveP moveP movenumP"
                value="5"
              />
              <input
                type="button"
                onClick={() => this.moveToP(5, 'displayed', 'displayed')}
                className="sixP moveP movenumP"
                value="6"
              />
              <input
                type="button"
                onClick={() => this.moveToP(6, 'displayed', 'displayed')}
                className="sevenP moveP movenumP"
                value="7"
              />
              <input
                type="button"
                onClick={() => this.moveToP(7, 'displayed', 'displayed')}
                className="eightP moveP movenumP"
                value="8"
              />
              <input
                type="button"
                onClick={() => this.moveToP(8, 'displayed', 'displayed')}
                className="nineP moveP movenumP"
                value="9"
              />
              <input
                type="button"
                onClick={() => this.moveToP(9, 'displayed', 'displayed')}
                className="tenP moveP movenumP"
                value="10"
              />
              <input
                type="button"
                onClick={() => this.moveToP(10, 'displayed', 'displayed')}
                className="elevenP moveP movenumP"
                value="11"
              />
              <input
                type="button"
                onClick={() => this.moveToP(11, 'displayed', 'displayed')}
                className="twelveP moveP movenumP"
                value="12"
              />
              <input
                type="button"
                onClick={() => this.moveToP(12, 'displayed', 'displayed')}
                className="thirteenP moveP movenumP"
                value="13"
              />
              <input
                type="button"
                onClick={() => this.moveToP(13, 'displayed', 'displayed')}
                className="fourteenP moveP movenumP"
                value="14"
              />
              <input
                type="button"
                onClick={() => this.moveToP(14, 'displayed', 'notDisplayed')}
                className="fifteenP moveP movenumP"
                value="15"
              />
              <input
                type="button"
                onClick={this.frontNavP}
                className="frontP moveP movenavP"
                value=">"
              />
            </div>
            <img alt="" src={img7} className="image7P" />
          </div>
          <img alt="" src={img4} className="image4P" />
        </div>
      </>
    );
  }
}

export default ThirdProject;

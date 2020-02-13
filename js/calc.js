class BmiCalc {
  constructor(state, nodes) {
    this.state = state || {
      weight: null,
      height: null,
      answer: null,
      bmi: null
    };
    this.nodes = nodes || {
      weightInput: document.querySelector('#weight'),
      heightInput: document.querySelector('#height'),
      submitButton: document.querySelector('.bmi-calc__submit-btn'),
      resultDisplay: document.querySelector('.bmi-calc__result > span'),
      commentDisplay: document.querySelector('.bmi-calc__comment'),
      errorDisplay: document.querySelector('.bmi-calc__error-log')
    };
    this.answerList = [
      {min: 0, max: 16, answer: "wygłodzenie"},
      {min: 16, max: 16.99, answer: "wychudzenie"},
      {min: 17, max: 18.49, answer: "niedowaga"},
      {min: 18.5, max: 24.99, answer: "wartość prawidłowa"},
      {min: 25, max: 29.99, answer: "nadwaga"},
      {min: 30, max: 34.99, answer: "I stopień otyłości"},
      {min: 35, max: 39.99, answer: "II stopień otyłości"},
      {min: 40, max: Infinity, answer: "otyłość skrajna"}
    ];
    
    this.nodes.weightInput.addEventListener('input', this.setWeight.bind(this));
    this.nodes.heightInput.addEventListener('input', this.setHeight.bind(this));
    this.nodes.submitButton.addEventListener('click', this.showResult.bind(this));
  }
  setWeight() {
    this.state.weight = this.checkData(this.nodes.weightInput);
  }
  setHeight() {
    this.state.height = this.checkData(this.nodes.heightInput);
  }
  checkData(data) {
    const dataFormat = new RegExp(/^[0-9]{1,3}([.]{0,1}[0-9]{0,3})?$/g);
    const dataValue = data.value.replace(',','.');
    if (dataFormat.test(dataValue)) {
      data.style.color = 'green';
      this.nodes.errorDisplay.innerText = "";
      return parseFloat(dataValue);
    } else {
      this.nodes.errorDisplay.innerText = "Popraw dane";
      data.style.color = 'red';
      return null
    }
  }
  inRange(a,b,x) {
    return a<=x && x<=b;
  }
  selectAnswer() {
    this.answerList.forEach(answer => {
      if (this.inRange(answer.min,answer.max,this.state.bmi)) {
        this.state.answer = answer.answer;
      }
    })
  }
  displayState() {
    this.nodes.resultDisplay.innerText = this.state.bmi;
    this.nodes.commentDisplay.innerText = this.state.answer;
  }
  calcBmi() {
    this.state.bmi = Math.floor(this.state.weight / Math.pow(this.state.height/100, 2));
  }
  showResult(e) {
    e.preventDefault();
    if (typeof this.state.weight === "number" && typeof this.state.height === "number") {
    this.calcBmi();
    this.selectAnswer();
    this.displayState()
    }
  }
}

const calc = new BmiCalc;
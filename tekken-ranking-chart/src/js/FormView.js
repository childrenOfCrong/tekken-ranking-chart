class FormView {
  constructor(selector){
    this.form = qs(selector)
    this.init();
  }
  init(){
    this.form.addEventListener('submit', e=> this.handleSubmit(e))
  }
  handleSubmit(){

  }
}
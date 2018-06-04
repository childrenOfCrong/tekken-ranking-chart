class FormView {
  constructor(selector){
    this.form = qs(selector)
    this.addBtn = qs('.add-user-btn');
    this.inputEl = qs('input')
    this.init();
    this.sendNewUser = null;
    
  }
  init(){
    $on(this.form, 'submit', e=>this.handleSubmit(e))
    $on(this.addBtn, 'click', e=>this.handleSubmit(e))
    this.inputEl.focus();
  }
  handleSubmit(e){
    e.preventDefault();
    // debugger;
    const newUser = this.inputEl.value.trim()
    this.inputEl.value ="";
    if(!newUser) return alert('아무것도 입력 안했소')
    this.sendNewUser(newUser)
  }
}
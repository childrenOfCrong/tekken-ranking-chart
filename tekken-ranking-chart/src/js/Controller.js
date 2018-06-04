class Controller {
  constructor(model, view){
    const {tableView, formView} = view
    this.model = model;
    this.tableView = tableView;
    this.formView = formView;
    this.tableView.sendClickedBtn = this.updateResult.bind(this);
    this.model.notifyUpdate = this.notifyUpdate.bind(this)
    this.tableView.sendOrderBtnClicked = this.notifyOrder.bind(this)
    this.model.notifyUpdateOrder = this.notifyUpdateOrder.bind(this)
    this.model.notifyUpdateNewUser = this.notifyUpdateNewUser.bind(this);
    this.formView.sendNewUser = this.sendNewUser.bind(this);
    
  }
  init(){
    this.tableView.bindRendering(this.getResult())
  }
  getResult(){
    return this.model.getResult();
  }
  updateResult(id, type){
    this.model.updateResult(id,type)
  }
  notifyUpdate(id,updatedData){
    this.tableView.reRender(id,updatedData)
  }
  notifyOrder(orderKind){
    this.model.getOrder(orderKind)
  }
  notifyUpdateOrder(ordered){
    this.tableView.orderUpdate(ordered)
  }
  notifyUpdateNewUser(addedUserInfo){
    this.tableView.updateAddedUser(addedUserInfo)
  }
  sendNewUser(newUser){
    this.model.getUser(newUser)
  }
}
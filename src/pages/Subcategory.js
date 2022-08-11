import React, { Component } from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
// import { Button, ButtonGroup, ButtonToolbar, Card, CardBody, CardHeader, CardText, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledButtonDropdown } from 'reactstrap';
import { deleteSubCategorys, getCategorys, getSubCategory, getSubCategorys, PostCategorys, PostSubCategorys, putSubcategory } from '../host/config';
import Page from '../components/Page';
import '../styles/components/modalDelete.css'
import "./subcategory.css"
import "./style.css"

export default class Subcategory extends Component {
  state = {
    modal: false,
    data:[],
    data1:[],
    file:null,
    editmodal: false,
    slug1:"",
    delete1:'',
    lang1:(localStorage.getItem('lang')==null?("ru"):(localStorage.getItem('lang')))
  };
getCategory=()=>{
  getCategorys().then(res=>{
  //  this.state
this.setState({data:res.data})
  })
}
getSubCategory=()=>{
  getSubCategorys().then(res=>{
    
this.setState({data1:res.data})
  })  
}

openModal1=(slug)=>{
  document.querySelector('.ModalDelete1').style="top: 0"
  document.querySelector('.ModalColumn').style="top: 30%"
  
this.setState({delete1:slug})
    }
    CloseModal1=()=>{
      document.querySelector('.ModalDelete1').style="top: -100%"
      document.querySelector('.ModalColumn').style="top: -100%"
        }
deleteSubcaregory=(slug)=>{
deleteSubCategorys(slug).then(res=>{
  this.getSubCategory()
})
  
this.CloseModal1()
}



putSubcategorys=(slug)=>{
  var data={
    "title_uz": document.querySelector('#edituzsubcategory').value,
    "title_ru": document.querySelector('#editrusubcategory').value,
    "title_en": document.querySelector('#editensubcategory').value,
    "category": document.querySelector('#editsubcategory').value,
    "image": this.state.file

  }
  putSubcategory(this.state.slug1, data).then(res=>{
    this.getSubCategory()
    this.edittoggle1()
  })
  
  .catch(err=>{
  })
}


postSubCategory=()=>{
  var data={
    "title_en": document.querySelector('#ensubcategory').value,
    "title_ru":  document.querySelector('#rusubcategory').value,
    "title_uz":  document.querySelector('#uzsubcategory').value,
    "category": document.querySelector('#subcategory').value,
    "image": this.state.file
  }
  PostSubCategorys(data).then(res=>{
    this.getSubCategory()
  })
  this.toggle1()
}
  toggle =() => {
    this.setState({modal:true})
  };
  toggle1 = () => {
    this.setState({modal:false})
  };
  handleFile(e) {
    let file1 = e.target.files[0];
  this.setState({file:file1})
  
  
  }
  edittoggle =(slug)=>{
    getSubCategory(slug).then(res=>{
      console.log(res.data);
    document.querySelector('#editensubcategory').value=res.data.title;
    document.querySelector('#editrusubcategory').value=res.data.title;
    document.querySelector('#edituzsubcategory').value=res.data.title;
    document.querySelector('#editsubcategory').value=res.data.category_name;
    })
    this.setState({editmodal:true, slug1:slug})
  }
  edittoggle1 =()=>{
    this.setState({editmodal:false})
  }

  componentDidMount(){
  
    setTimeout(() => {
        this.getCategory()
        this.getSubCategory()
    }, 100);
  
  }
  render() {
    return (
    <Page
      title={this.state.lang1=="uz"?("Qo`shimcha tur"):(this.state.lang1=="ru"?("Подкатегория"):("SubCategory"))}
      breadcrumbs={[{ name: `${this.state.lang1=="uz"?("Qo`shimcha tur"):(this.state.lang1=="ru"?("Подкатегория"):("SubCategory"))}`, active: true }]}
    >
                <Button color="primary" onClick={this.toggle}>{this.state.lang1=="uz"?("Yaratish"):(this.state.lang1=="ru"?("Создавать"):("Create"))}</Button>

          <Row className="Cards-subcategory">
            {this.state.data1.map(item=>{
return <Col lg={6} md={12} sm={12} xs={12} className="mb-3">
          <Card className="flex-row">
            <CardImg
              className="card-img-left"
              src={item.imageURL}
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
              {/* <CardText>{this.state.lang1=="uz"?(""):(this.state.lang1=="ru"?(""):("title_en"))}:{item.title_en}
              </CardText>
              <CardText>
              title_uz{this.state.lang1=="uz"?(""):(this.state.lang1=="ru"?(""):(""))}:{item.title_uz}
                </CardText>
                <CardText>
                title_ru{this.state.lang1=="uz"?(""):(this.state.lang1=="ru"?(""):(""))}:{item.title_ru}
                </CardText> */}
              <Button color="warning" onClick={()=> this.edittoggle(item.slug)}>{this.state.lang1=="uz"?("O`zgartirish"):(this.state.lang1=="ru"?("Изменять"):("edit"))}</Button>
              <Button color="secondary ml-2" onClick={()=>this.openModal1(item.slug)}>{this.state.lang1=="uz"?("o`chirish"):(this.state.lang1=="ru"?("Удалить"):("delete"))}</Button>
            </CardBody>
          </Card>
        </Col>})}</Row>
        <Modal isOpen={this.state.modal}>
                  <ModalHeader >{this.state.lang1=="uz"?("Yaratish oynasi"):(this.state.lang1=="ru"?("Окно создания"):("Creation window"))}</ModalHeader>
                  <ModalBody>
                  <Form>
                  <FormGroup>
                  <Label for="examplename">{this.state.lang1=="uz"?("Nomi uz"):(this.state.lang1=="ru"?("Название Уз"):("Title Uz"))}</Label>
                  <input className='input12'
                  id="uzsubcategory"
                    type="text"
                    name="name"
                    placeholder={this.state.lang1=="uz"?("Nomi uz"):(this.state.lang1=="ru"?("Название Уз"):("Title Uz"))}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">{this.state.lang1=="uz"?("Nomi ru"):(this.state.lang1=="ru"?("Название RU"):("Title ru"))}</Label>
                  <input className='input12'
                  id="rusubcategory"
                    type="text"
                    name="name"
                    placeholder={this.state.lang1=="uz"?("Nomi ru"):(this.state.lang1=="ru"?("Название RU"):("Title ru"))}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">{this.state.lang1=="uz"?("Nomi En"):(this.state.lang1=="ru"?("Название en"):("Title en"))}</Label>
                  <input className='input12'
                  id="ensubcategory"
                    type="text"
                    name="name"
                    placeholder={this.state.lang1=="uz"?("Nomi En"):(this.state.lang1=="ru"?("Название en"):("Title en"))}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleImage">{this.state.lang1=="uz"?("Rasmmi"):(this.state.lang1=="ru"?("Это картина"):("Image"))}</Label>
                  <Input onInput={(e)=>this.handleFile(e)} id="file" type="file" >
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect"> {this.state.lang1=="uz"?("Kategoriyani tanlang"):(this.state.lang1=="ru"?("Выбрать категорию"):("Select category"))}</Label>
                  <select type="select" id="subcategory" name="select">
                   {this.state.data.map(item=>{ return <option value={item.slug}>{item.title}</option>})}
                  </select>
                </FormGroup>
                </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.postSubCategory}>
                     {this.state.lang1=="uz"?("Saqlash"):(this.state.lang1=="ru"?("Xранилище"):("Save "))}
                    </Button>
                    <Button color="secondary" onClick={this.toggle1}>
                       {this.state.lang1=="uz"?("Ortga"):(this.state.lang1=="ru"?("Отмена"):("Cancel"))}
                    </Button>
                  </ModalFooter>
                </Modal>




                <Modal isOpen={this.state.editmodal}>
                  <ModalHeader >{this.state.lang1=="uz"?("Kategoriyani tahrirlash"):(this.state.lang1=="ru"?(""):("Edit category "))}</ModalHeader>
                  <ModalBody>
                  <Form>
                  <FormGroup>
                  <Label for="examplename">{this.state.lang1=="uz"?("Nomi uz"):(this.state.lang1=="ru"?("Название Уз"):("Title Uz"))}</Label>
                  <Input
                  id="edituzsubcategory"
                    type="text"
                    name="name"
                    placeholder="title category_uz"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">{this.state.lang1=="uz"?("Nomi ru"):(this.state.lang1=="ru"?("Название RU"):("Title ru"))}</Label>
                  <Input
                  id="editrusubcategory"
                    type="text"
                    name="name"
                    placeholder="title category_ru"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">{this.state.lang1=="uz"?("Nomi En"):(this.state.lang1=="ru"?("Название en"):("Title en"))}</Label>
                  <Input
                  id="editensubcategory"
                    type="text"
                    name="name"
                    placeholder="title category_en"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">{this.state.lang1=="uz"?("Kategoriyani tanlang"):(this.state.lang1=="ru"?("Выбрать категорию"):("Select category"))}</Label>
                  <Input type="select" id="editsubcategory" name="select">
                   {this.state.data.map(item=>{ return <option value={item.slug}>{item.title}</option>})}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleImage">{this.state.lang1=="uz"?("Rasmmi"):(this.state.lang1=="ru"?("Это картина"):("Image"))}</Label>
                  <Input onInput={(e)=>this.handleFile(e)} id="editfile" type="file" >
                  </Input>
                </FormGroup>
                 
              </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={()=>this.putSubcategorys()}>
                    {this.state.lang1=="uz"?("Saqlash"):(this.state.lang1=="ru"?("Xранилище"):("Save "))}
                    </Button>
                    <Button color="secondary" onClick={this.edittoggle1}>
                    {this.state.lang1=="uz"?("Ortga"):(this.state.lang1=="ru"?("Отмена"):("Cancel"))}
                    </Button>
                  </ModalFooter>
                </Modal>

                <div className="ModalDelete1"> 
         <div className="ModalColumn">
           <h2>{this.state.lang1=="uz"?(""):(this.state.lang1=="ru"?(""):("Delete this?"))}</h2>
           <div className="ButtonsModalDelete">
            <button className='btn btn-danger ml-3' onClick={() => this.deleteSubcaregory(this.state.delete1)}>{this.state.lang1=="uz"?("O`chirish"):(this.state.lang1=="ru"?("Удалить"):("Delete"))}</button>
            <button className='btn btn-warning' onClick={this.CloseModal1}> {this.state.lang1=="uz"?("Ortga"):(this.state.lang1=="ru"?("Отмена"):("Cancel"))} </button>
           </div>
         </div>
        </div>
    </Page>  
    )
  }
}

import Page from '../components/Page';
import React,{Component} from 'react';
import {  Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { deleteCategorys, getCategory, getCategorys, PostCategorys, putCategory } from '../host/config';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import '../styles/components/modalDelete.css'
import "./subcategory.css"
import "./style.css"
const {lang, language1}=require('../host/lang')


export default class ButtonGroupPage extends Component {
  state = {
    modal: false,
    editmodal:false,
    data:[],
    file:null,
    slug1:"",
    delete1: "",
    lang1:(localStorage.getItem('lang')==null?("ru"):(localStorage.getItem('lang')))
  };
getCategory=()=>{
  getCategorys().then(res=>{
  //  this.state
this.setState({data:res.data})
console.log(res.data);
  })
  console.log(this.state.data);
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
deleteCategory=(slug)=>{
  deleteCategorys(slug).then(res=>{
    this.getCategory() 
  })
  this.CloseModal1()
}

handleFile(e) {
  let file1 = e.target.files[0];
  // this.setState({ file:file1 });
//   var formData = new FormData();
// var imagefile = document.querySelector('#file').value;
// formData.append("image", imagefile.files[0]);
console.log(file1);
this.setState({file:file1})


}
postCategory=(e)=>{
  var data={
    "title_en": document.querySelector('#encategory').value,
    "title_ru":  document.querySelector('#rucategory').value,
    "title_uz":  document.querySelector('#uzcategory').value,
    "image":this.state.file
  }
  PostCategorys(data).then(res=>{
    // alert('malumot tushdi')
      this.getCategory()
  })
  this.toggle1()
}

putCategorys=(slug)=>{
  var data={
    "title_uz": document.querySelector('#edituzcategory').value,
    "title_ru": document.querySelector('#editrucategory').value,
    "title_en": document.querySelector('#editencategory').value,
    "image":this.state.file

  }
  putCategory(this.state.slug1, data).then(res=>{
    this.getCategory()
    console.log(data)
    this.edittoggle1()
  })
  
  .catch(err=>{
    console.log("error",err);
  })
}
  toggle =() => {
    this.setState({modal:true})
  };
  toggle1 = () => {
    this.setState({modal:false})
  };
  edittoggle =(slug)=>{
    getCategory(slug).then(res=>{
      console.log(res.data);
     document.querySelector('#edituzcategory').value=res.data.title;
     document.querySelector('#editrucategory').value=res.data.title;
     document.querySelector('#editencategory').value=res.data.title;
    })
    this.setState({editmodal:true, slug1:slug})
  }
  edittoggle1 =()=>{
    this.setState({editmodal:false})
  }


  componentDidMount(){
    setTimeout(() => {
        this.getCategory()

    }, 100);
  
  }
  render() {
    return (
    <Page
      title={this.state.lang1=="uz"?("Turkum"):(this.state.lang1=="ru"?("Категория"):("Category"))}
      breadcrumbs={[{ name: `${(localStorage.getItem("lang"))=="uz"?("Turkum"):((localStorage.getItem("lang"))=="en"?("Category"):("Категория"))}` , active: true }]}
    >
                <Button color="primary" onClick={this.toggle}>{this.state.lang1=="uz"?("Yaratish"):(this.state.lang1=="ru"?("Создать"):("create "))} </Button>

          <Row className="Cards-subcategory">
            {this.state.data.map(item=>{
return <Col lg={6} md={12} sm={12} xs={12} className="mb-3">
          <Card className="flex-row">
            <CardImg
              className="card-img-left"
              src={item.imageURL}
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
       
              <Button color=" btn btn-warning" onClick={()=>this.edittoggle(item.slug)}> {this.state.lang1=="uz"?("Tahrirlash"):(this.state.lang1=="ru"?("Редактировать"):("Edit "))}  </Button>
              <Button color="btn btn-danger ml-2" onClick={()=>this.openModal1(item.slug)} > {this.state.lang1=="uz"?("O`chirish"):(this.state.lang1=="ru"?("Удалить"):("Delete"))} </Button>
            </CardBody>
          </Card>
        </Col>})}</Row>
        <Modal isOpen={this.state.modal}>
                  <ModalHeader > {this.state.lang1=="uz"?("Yaratish"):(this.state.lang1=="ru"?("Создать"):("create "))} </ModalHeader>
                  <ModalBody>
                  <Form>
                  <FormGroup>
                  <Label for="examplename"> {this.state.lang1=="uz"?("Nomi UZ"):(this.state.lang1=="ru"?("Названия Уз"):("title_uz"))} </Label>
                  <input className='input12'
                  id="uzcategory"
                    type="text"
                    name="name"
                    placeholder="title category_uz"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">{this.state.lang1=="uz"?("Nomi RU"):(this.state.lang1=="ru"?("Названия RU"):("title_ru"))}</Label>
                  <input className='input12'
                  id="rucategory"
                    type="text"
                    name="name"
                    placeholder="title category_ru"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename"> {this.state.lang1=="uz"?("Nomi EN"):(this.state.lang1=="ru"?("Названия EN"):("title_en"))} </Label>
                  <input className='input12'
                  id="encategory"
                    type="text"
                    name="name"
                    placeholder="title category_en"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleImage"> {this.state.lang1=="uz"?("Rasm"):(this.state.lang1=="ru"?("Изображение"):("Image"))} </Label>
                  <Input onInput={(e)=>this.handleFile(e)} id="file" type="file" >
                  </Input>
                </FormGroup>
              </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={(e)=>this.postCategory(e)}>
              {this.state.lang1=="uz"?("saqlash"):(this.state.lang1=="ru"?("хранить"):("save"))}
                    </Button>
                    <Button color="secondary" onClick={this.toggle1}>
              {this.state.lang1=="uz"?("Bekor qilish"):(this.state.lang1=="ru"?("Отмена"):("Cancel"))}
                    </Button>
                  </ModalFooter>
                </Modal>
                










                <Modal isOpen={this.state.editmodal}>
                  <ModalHeader > {this.state.lang1=="uz"?("Kategoriyani o`zgartirish"):(this.state.lang1=="ru"?("Изменить категорию"):("Edit category"))} </ModalHeader>
                  <ModalBody>
                  <Form>
                  <FormGroup>
                  <Label for="examplename"> {this.state.lang1=="uz"?("Nomi UZ"):(this.state.lang1=="ru"?("Названия Уз"):("title_uz"))} </Label>
                  <Input
                  id="edituzcategory"
                    type="text"
                    name="name"
                    placeholder="title category_uz" 
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename"> {this.state.lang1=="uz"?("Nomi RU"):(this.state.lang1=="ru"?("Названия RU"):("title_ru"))} </Label>
                  <Input
                  id="editrucategory"
                    type="text"
                    name="name"
                    placeholder="title category_ru"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">{this.state.lang1=="uz"?("Nomi EN"):(this.state.lang1=="ru"?("Названия EN"):("title_en"))} </Label>
                  <Input
                  id="editencategory"
                    type="text"
                    name="name"
                    placeholder="title category_en"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleImage"> {this.state.lang1=="uz"?("Rasm"):(this.state.lang1=="ru"?("Изображение"):("Image"))} </Label>
                  <Input onInput={(e)=>this.handleFile(e)} id="file" type="file" >
                  </Input>
                </FormGroup>
                 
              </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={(e)=>this.putCategorys(e)}>
              {this.state.lang1=="uz"?("saqlash"):(this.state.lang1=="ru"?("хранить"):("save"))}
                    </Button>   
                    <Button color="secondary" onClick={this.edittoggle1}>
              {this.state.lang1=="uz"?("Bekor qilish"):(this.state.lang1=="ru"?("Отмена"):("Cancel"))}
                    </Button>
                  </ModalFooter>
                </Modal>
                <div className="ModalDelete1"> 
         <div className="ModalColumn">
           <h2> {this.state.lang1=="uz"?("Bu o`chirilsinmi?"):(this.state.lang1=="ru"?("Удалить это?"):("Delete this?"))}  </h2>
           <div className="ButtonsModalDelete">
            <button className='btn btn-danger ml-3' onClick={() => this.deleteCategory(this.state.delete1)}> {this.state.lang1=="uz"?("O`chirish"):(this.state.lang1=="ru"?("Удалить"):("Delete"))} </button>    
            <button className='btn btn-warning' onClick={this.CloseModal1}>  {this.state.lang1=="uz"?("Bekor qilish"):(this.state.lang1=="ru"?("Отмена"):("Cancel"))} </button>
           </div>
         </div>
        </div>
    </Page>
    )
  }
}

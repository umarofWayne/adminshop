import Page from '../components/Page';
import React,{Component} from 'react';
import {  Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { deleteCategorys, getCategorys, PostCategorys, putCategory } from '../host/config';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import '../styles/components/modalDelete.css'

export default class ButtonGroupPage extends Component {
  state = {
    modal: false,
    editmodal:false,
    data:[],
    file:null,
    slug1:"",
    delete1: ""
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
      title="Category"
      breadcrumbs={[{ name: 'Category', active: true }]}
    >
                <Button color="primary" onClick={this.toggle}>create</Button>

          <Row>
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
       
              <Button color=" btn btn-success" onClick={()=>this.edittoggle(item.slug)}>edit</Button>
              <Button color="btn btn-danger ml-2" onClick={()=>this.openModal1(item.slug)}  >delete</Button>
            </CardBody>
          </Card>
        </Col>})}</Row>
        <Modal isOpen={this.state.modal}>
                  <ModalHeader >Modal title</ModalHeader>
                  <ModalBody>
                  <Form>
                  <FormGroup>
                  <Label for="examplename">title_uz</Label>
                  <Input
                  id="uzcategory"
                    type="text"
                    name="name"
                    placeholder="title category_uz"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">title_ru</Label>
                  <Input
                  id="rucategory"
                    type="text"
                    name="name"
                    placeholder="title category_ru"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">title_en</Label>
                  <Input
                  id="encategory"
                    type="text"
                    name="name"
                    placeholder="title category_en"
                  />
                </FormGroup>
                 <FormGroup>
                  <Label for="exampleImage">Image</Label>
                  <Input onInput={(e)=>this.handleFile(e)} id="file" type="file" >
                  </Input>
                </FormGroup>
              </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={(e)=>this.postCategory(e)}>
                     save
                    </Button>
                    <Button color="secondary" onClick={this.toggle1}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
                










                <Modal isOpen={this.state.editmodal}>
                  <ModalHeader >Edit category</ModalHeader>
                  <ModalBody>
                  <Form>
                  <FormGroup>
                  <Label for="examplename">title_uz</Label>
                  <Input
                  id="edituzcategory"
                    type="text"
                    name="name"
                    placeholder="title category_uz"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">title_ru</Label>
                  <Input
                  id="editrucategory"
                    type="text"
                    name="name"
                    placeholder="title category_ru"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">title_en</Label>
                  <Input
                  id="editencategory"
                    type="text"
                    name="name"
                    placeholder="title category_en"
                  />
                </FormGroup>
                 
              </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={(e)=>this.putCategorys(e)}>
                     save
                    </Button>
                    <Button color="secondary" onClick={this.edittoggle1}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
                <div className="ModalDelete1"> 
         <div className="ModalColumn">
           <h2>Delete this?</h2>
           <div className="ButtonsModalDelete">
            <button className='btn btn-danger ml-3' onClick={() => this.deleteCategory(this.state.delete1)}>Delete</button>
            <button className='btn btn-warning' onClick={this.CloseModal1}>Cancel</button>
           </div>
         </div>
        </div>
    </Page>
    )
  }
}

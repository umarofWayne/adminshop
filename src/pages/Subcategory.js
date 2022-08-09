import React, { Component } from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
// import { Button, ButtonGroup, ButtonToolbar, Card, CardBody, CardHeader, CardText, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledButtonDropdown } from 'reactstrap';
import { deleteSubCategorys, getCategorys, getSubCategorys, PostCategorys, PostSubCategorys, putSubcategory } from '../host/config';
import Page from '../components/Page';
import '../styles/components/modalDelete.css'
export default class Subcategory extends Component {
  state = {
    modal: false,
    data:[],
    data1:[],
    file:null,
    editmodal: false,
    slug1:"",
    delete1:''
  };
getCategory=()=>{
  getCategorys().then(res=>{
  //  this.state
this.setState({data:res.data})
console.log(res.data);
  })
  console.log(this.state.data);
}
getSubCategory=()=>{
  getSubCategorys().then(res=>{
this.setState({data1:res.data})
console.log(res.data);
  })  
  // console.log(this.state.data1);
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
  }
  putSubcategory(this.state.slug1, data).then(res=>{
    this.getSubCategory()
    console.log(data)
    this.edittoggle1()
  })
  
  .catch(err=>{
    console.log("error",err);
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
  // console.log(file1);
  this.setState({file:file1})
  
  
  }
  edittoggle =(slug)=>{
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
      title="Subsubcategory"
      breadcrumbs={[{ name: 'Subcategory', active: true }]}
    >
                <Button color="primary" onClick={this.toggle}>create</Button>

          <Row>
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
              <CardText>title_en:{item.title_en}
              </CardText>
              <CardText>
              title_uz:{item.title_uz}
                </CardText>
                <CardText>
                title_ru:{item.title_ru}
                </CardText>
              <Button color="warning" onClick={()=> this.edittoggle(item.slug)}>edit</Button>
              <Button color="secondary ml-2" onClick={()=>this.openModal1(item.slug)}>delete</Button>
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
                  id="uzsubcategory"
                    type="text"
                    name="name"
                    placeholder="title category_uz"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">title_ru</Label>
                  <Input
                  id="rusubcategory"
                    type="text"
                    name="name"
                    placeholder="title category_ru"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">title_en</Label>
                  <Input
                  id="ensubcategory"
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
                <FormGroup>
                  <Label for="exampleSelect">Select</Label>
                  <Input type="select" id="subcategory" name="select">
                   {this.state.data.map(item=>{ return <option value={item.slug}>{item.title}</option>})}
                  </Input>
                </FormGroup>
                </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.postSubCategory}>
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
                  id="edituzsubcategory"
                    type="text"
                    name="name"
                    placeholder="title category_uz"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">title_ru</Label>
                  <Input
                  id="editrusubcategory"
                    type="text"
                    name="name"
                    placeholder="title category_ru"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">title_en</Label>
                  <Input
                  id="editensubcategory"
                    type="text"
                    name="name"
                    placeholder="title category_en"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select</Label>
                  <Input type="select" id="editsubcategory" name="select">
                   {this.state.data.map(item=>{ return <option value={item.slug}>{item.title}</option>})}
                  </Input>
                </FormGroup>
                 
              </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={()=>this.putSubcategorys()}>
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
            <button className='btn btn-danger ml-3' onClick={() => this.deleteSubcaregory(this.state.delete1)}>Delete</button>
            <button className='btn btn-warning' onClick={this.CloseModal1}>Cancel</button>
           </div>
         </div>
        </div>
    </Page>  
    )
  }
}

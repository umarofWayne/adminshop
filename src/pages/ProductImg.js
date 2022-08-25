import React, { Component } from 'react'
import { Button, Card, CardImg, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Page from '../components/Page';
import { deleteImages,  getImages, getProduct, PostImages } from '../host/config';
const {lang, language1}=require('../host/lang')


export default class ProductImg extends Component {



  state={
    file:[],
    data:[],
    data1:[],
    dataA:[],
    modal:false,
    dataAS:[],
    lang1:(localStorage.getItem('lang')==null?("ru"):(localStorage.getItem('lang')))
    }


    postImage=()=>{
      var data={
        "image": this.state.file,
        "product":document.querySelector('#category').value
      }
      PostImages(data).then(res=>{
        this.getImage()
      })
      this.toggle1()
    }


    deleteImage=(id)=>{
      deleteImages(id).then(res=>{
        this.getImage()
      })
    }

    getImage=()=>{
      getImages().then(res=>{
    this.setState({data1:res.data})
    // console.log(res.data);
      })  
      // console.log(this.state.data1);
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
    getCategory=()=>{
      getProduct().then(res=>{
      //  this.state
    this.setState({dataAS:res.data})
    // console.log(res.data);
      })
      // console.log(this.state.data);
    }
    componentDidMount(){
      setTimeout(() => {
          this.getCategory()
          this.getImage()
      }, 100);
    
    }

  render() {


    return (
      <Page title="Images" breadcrumbs={[{ name: 'Images', active: true }]}>
                <Button color="primary" className="mb-3" onClick={this.toggle}> {this.state.lang1=="uz"?("Yaratmoq"):(this.state.lang1=="ru"?("Создавать"):("Create"))} </Button>

          <Row>
            {this.state.data1.map(item=>{
return <Col lg={6} md={12} sm={12} xs={12} className="mb-3">
          <Card className="d-flex">
            <CardImg className="card-img-left w-25 ml-3 h-90" src={item.image} style={{ width: 'auto', height: 150 }} />
            <button className='btn btn-danger' onClick={()=> this.deleteImage(item.id)}> {this.state.lang1=="uz"?("O`chirish"):(this.state.lang1=="ru"?("Удалить"):("Delete"))} </button>
          </Card>
        </Col>})}</Row>


        <Modal isOpen={this.state.modal}>
                  <ModalHeader > {this.state.lang1=="uz"?("Modal sarlavha"):(this.state.lang1=="ru"?("Модальное название"):("Modal title"))} </ModalHeader>
                  <ModalBody>
                  <Form>
                <FormGroup>
                  <Label for="exampleImage"> {this.state.lang1=="uz"?("Rasm"):(this.state.lang1=="ru"?("Изображение"):("Image  "))}  </Label>
                  <Input onInput={(e)=>this.handleFile(e)} id="file" type="file" >
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect"> {this.state.lang1=="uz"?("turkum"):(this.state.lang1=="ru"?("Категория"):("Category"))}  </Label>
                  <Input type="select" id="category" name="select">
                   {this.state.dataAS.map(item=>{ return <option  value={item.slug}>{item.title}</option>})}
                  </Input>
                </FormGroup>
                </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.postImage}>
              {this.state.lang1=="uz"?("saqlash"):(this.state.lang1=="ru"?("хранить"):("save"))}
                    </Button>
                    <Button color="secondary" onClick={this.toggle1}>
              {this.state.lang1=="uz"?("Bekor qilish"):(this.state.lang1=="ru"?("Отмена"):("Cancel"))}
                    </Button>
                  </ModalFooter>
                </Modal>
    </Page>
    )
  }
}

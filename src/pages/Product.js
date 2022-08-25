import React, { Component } from 'react'
import { Button, Card, CardBody, CardHeader, CardImg, CardText, CardTitle, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap';
import { MdDelete } from 'react-icons/md';
// import { RiEditBoxFill } from 'react-icons/ri'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Page from '../components/Page';
import { addPromotions, deleteImages, deleteProducts, getCategorys, getImages, getImgSlug, getProduct, getProducts, getPromotions, getSubCategorys, PostImages, postProduct, putProduct } from '../host/config';
import '../styles/components/productJs.scss'
// import { lang } from '../host/host';

import '../styles/components/modalDelete.css'
import "./style.css"
import "./subcategory.css"
const {lang, language1}=require('../host/lang')

export default class Product extends Component {

  state = {
    file: null,
    data: [],
    category: [],
    subcategory: [],
    modal: false,
    modal1: false,
    modal2: false,
    productSlug: 0,
    dataPromotion: [],
    dataPromotion2: null,
    slugdata: [],
    slugdataimages: [],
    lang:[],
    editmodal:false,
    slug1:[],
    lang1:(localStorage.getItem('lang')==null?("ru"):(localStorage.getItem('lang')))
  }


  getLang=()=>{
    var lang = localStorage.getItem('lang')
  
  }


  getCategory = () => {
    getCategorys().then(res => {
      //  this.state
      this.setState({ category: res.data })
      
    })

  }



  putProduct=(slug)=>{
    var data={
      "title_en": document.querySelector('#editnewTitleEn').value,
      "title_ru": document.querySelector('#editnewTitleRu').value,
      "title_uz": document.querySelector('#editnewTitleUz').value,
      "category": document.querySelector('#editcategory').value,
      "sub_category": document.querySelector('#editsubcategory').value,
      "description_uz": document.querySelector('#editnewDescription_uz').value,
      "description_ru": document.querySelector('#editnewDescription_ru').value,
      "description_en": document.querySelector('#editnewDescription_en').value,
      "price": document.querySelector('#editnewPrice').value,
      "characteristics": document.querySelector('#editnewCharacteritics').value,
    }
    putProduct(this.state.slug1, data).then(res=>{
      this.getProduct1();
      this.edittoggle1()
    })
  }

  edittoggle =(slug)=>{
    getProducts(slug).then(res=>{
      
      document.querySelector('#editnewTitleEn').value=res.data.title;
      document.querySelector('#editnewTitleRu').value=res.data.title;
      document.querySelector('#editnewTitleUz').value=res.data.title;
      document.querySelector('#editcategory').value=res.data.category;
      document.querySelector('#editsubcategory').value=res.data.sub_category;
      document.querySelector('#editnewDescription_uz').value=res.data.description;
      document.querySelector('#editnewDescription_ru').value=res.data.description;
      document.querySelector('#editnewDescription_en').value=res.data.description;
      document.querySelector('#editnewPrice').value=res.data.price;
      document.querySelector('#editnewCharacteritics').value=res.data.characteristics;
    })
    this.setState({editmodal:true, slug1:slug})
  }
  edittoggle1 =()=>{
    this.setState({editmodal:false})
  }


  getSubCategory = () => {
    getSubCategorys().then(res => {
      this.setState({ subcategory: res.data })
      
    })
  }


  handleShow = () => {
    this.setState({ modal: true })
  }
  handleClose = () => {
    this.setState({ modal: false })
  }
  handleShow1 = (id) => {
    this.setState({ modal1: true, productSlug: id })
  }
  handleClose1 = () => {
    this.setState({ modal1: false })
  }

  postImage = () => {
    var data = {
      "image": this.state.file,
      "product": this.state.dataPromotion2
    }
    PostImages(data).then(res => {
      this.getImage()
      this.getProduct1()
    })
    this.toggle1()
  }
  deleteImage = (id) => {
    deleteImages(id).then(res => {
      this.getImage()
      this.getProduct1()
      this.toggle1()
    })
  }

  getImage = () => {
    getImages().then(res => {
      this.setState({ data1: res.data })
    })
  }


  postProduct1 = () => {
    var data1 = {
      "slug": document.querySelector('#newTitleEn').value,
      "title_en": document.querySelector('#newTitleEn').value,
      "title_ru": document.querySelector('#newTitleRu').value,
      "title_uz": document.querySelector('#newTitleUz').value,
      "category": document.querySelector('#category').value,
      "sub_category": document.querySelector('#subcategory').value,
      "description_uz": document.querySelector('#newDescription_uz').value,
      "description_ru": document.querySelector('#newDescription_ru').value,
      "description_en": document.querySelector('#newDescription_en').value,
      "price": document.querySelector('#newPrice').value,
      "characteristics": document.querySelector('#newCharacteritics').value,
    }

    var dataimg = {
      "image": this.state.file,
      "product": document.querySelector('#newTitleEn').value
    }

    postProduct(data1).then(res => {
      this.getProduct1()
        
       PostImages(dataimg).then(res=>{
          this.getProduct1()
       })
       this.getProduct1() 
       this.setState({})
       
    })
    this.handleClose()

  }


  openModal1=()=>{
document.querySelector('.ModalDelete1').style="top: 0"
document.querySelector('.ModalColumn').style="top: 30%"
  }
  CloseModal1=()=>{
    document.querySelector('.ModalDelete1').style="top: -100%"
    document.querySelector('.ModalColumn').style="top: -100%"
      }
  handleFile(e) {
    let file1 = e.target.files[0];

    this.setState({ file: file1 })
  }
  deleteProduct = (slug) => {
    deleteProducts(slug).then(res => {
      this.getProduct1()
    })
    this.CloseModal1()
  }
  getPromotion = () => {
    getPromotions().then(res => {
      this.setState({ dataPromotion: res.data })
      
    })
    
  }
  getProduct1 = () => {
    getProduct().then(res => {
      this.setState({ data: res.data })
      
    })
  }
deleteProduct12=(slug)=>{
  this.openModal1()
  this.setState({delete1:slug})
}
  addPromotion = () => {
    var data = {
      'product': this.state.productSlug,
      // "id":document.querySelector('#addpromotion').value,
      "action": document.querySelector('#addpromotion').value

    }
    addPromotions(data, document.querySelector('#addpromotion1').value).then(res => {
      
    })
    this.handleClose1()
  }

  toggle = (slug) => {
    this.setState({ dataPromotion2: slug })
    getImgSlug(slug).then(res => {
      
      this.setState({ slugdata: res.data, slugdataimages: res.data.images })

    })
    this.setState({ modal2: true })
  };
  toggle1 = () => {
    this.setState({ modal2: false })
  };

  componentDidMount() {
    this.getProduct1()
    this.getCategory()
    this.getSubCategory()
    this.getPromotion()
    this.getImage()
  }



  render() {
    return (
      <>
        <Page
          title={this.state.lang1=="uz"?("Maxsulotlar"):(this.state.lang1=="ru"?("Товар"):("Products"))} 
          breadcrumbs={[{ name: `${(localStorage.getItem("lang"))=="uz"?("jadvallar"):((localStorage.getItem("lang"))=="en"?("tables"):("таблицы"))}`, active: true }]}
          className="TablePage"
        >


          <Row>
            <Col>
              <Card className="mb-3">
                <CardHeader>
                  <button onClick={() => this.handleShow()} className="btn btn-primary"> {this.state.lang1=="uz"?("Yaratmoq"):(this.state.lang1=="ru"?("Создавать"):("Create"))} </button>

                </CardHeader>
                <CardBody><Table responsive>
                  <thead>
                  <input placeholder='search title' onKeyUp={()=>{this.setState({})}} className='search33 ml-3 mb-2' />
                    <tr>
                      <th> {this.state.lang1=="uz"?("Rasm"):(this.state.lang1=="ru"?("Изображение"):("Image  "))}  </th>
                      <th>  {this.state.lang1=="uz"?("Sarlavha"):(this.state.lang1=="ru"?("Заголовок"):("Title"))}  </th>
                      <th> {this.state.lang1=="uz"?("Tavsif"):(this.state.lang1=="ru"?("Описание"):("Description"))} </th>
                      <th> {this.state.lang1=="uz"?("Narxi"):(this.state.lang1=="ru"?("Цена"):("Price"))} </th>
                      <th> {this.state.lang1=="uz"?("Tahrirlash"):(this.state.lang1=="ru"?("Изминить"):("Edit "))} </th>
                      <th> {this.state.lang1=="uz"?("Aksiyani qo'shing"):(this.state.lang1=="ru"?("Добавить Аксию"):("Add Aksiya"))} </th>
                      <th>  {this.state.lang1=="uz"?("Rasm qo'shish"):(this.state.lang1=="ru"?("Добавить Изображение"):("Edd Image"))} </th>
                      <th>  {this.state.lang1=="uz"?("O`chirish"):(this.state.lang1=="ru"?("Удалить"):("Delete"))} </th>

                    </tr>
                  </thead>
                  {this.state.data.map(item => {
                    if((item.title).toLowerCase().includes((document.querySelector('.search33').value).toLowerCase())){
                    return <tbody className="Tbody">
                      <tr>
                        <th scope="row"><img className='w-10' style={{ width: '300px' }} src={item.thumbnail == null ? (item.image) : (item.thumbnail.imageURL)} alt='NO image' /></th>
                        <td className='Name-item'>{item.title}</td>
                        <td>{item.description}</td>
                        <td className='Price-item'>{item.price}</td>
                        <td><button className='btn btn-warning' onClick={()=> this.edittoggle(item.slug)}>{this.state.lang1=="uz"?("o`zgartirish"):(this.state.lang1=="ru"?("изминить"):("edit "))} </button></td>
                        <td onClick={() => this.handleShow1(item.slug)}> <Button className="btn-info" outline color="white"> {this.state.lang1=="uz"?("Aqsiyani qo'shing"):(this.state.lang1=="ru"?("Добавить Аксию"):("Add Aksiya"))} </Button></td>
                        <td> <Button outline color="btn btn-info" onClick={() => this.toggle(item.slug)} > {this.state.lang1=="uz"?("Rasm qo'shish"):(this.state.lang1=="ru"?("Добавить изображение"):("Add Image"))} </Button></td>
                        <td><button className='btn btn-danger ml-3' onClick={() => this.deleteProduct12(item.slug)}>{this.state.lang1=="uz"?("O`chirish"):(this.state.lang1=="ru"?("Удалить"):("Delete"))}</button></td>
                      </tr>
                    </tbody>
}
                         
                  

                  })}   </Table>  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal className="Modal12" isOpen={this.state.modal}>
            <ModalHeader >  {this.state.lang1=="uz"?("Modal sarlavha"):(this.state.lang1=="ru"?("Модальное название"):("Modal title"))} </ModalHeader>
            <ModalBody  className="ModalBody"> 
              <div className="ModalBodyLeftHero">
              <div className='mb-2'>
                <h5> {this.state.lang1=="uz"?("Yangi karta uchun nom (uz)"):(this.state.lang1=="ru"?("Имя для новой карты (uz)"):("Name for new card (uz)"))} </h5>
                <input type="text" id="newTitleUz" placeholder="New card name" required />
              </div>
              <div className='mb-2'>
                <h5> {this.state.lang1=="uz"?("Yangi karta uchun nom (en)"):(this.state.lang1=="ru"?("Имя для новой карты (en)"):("Name for new card (en)"))} </h5>
                <input type="text" id="newTitleEn" placeholder="New card name" required />
              </div>
              <div className='mb-2'>
                <h5> {this.state.lang1=="uz"?("Yangi karta uchun nom (ru)"):(this.state.lang1=="ru"?("Имя для новой карты (ru)"):("Name for new card (en)"))} </h5>
                <input type="text" id="newTitleRu" placeholder="New card name" required />
              </div>
              <div className='mt-3'>
                <h5> {this.state.lang1=="uz"?("Yangi karta toifasi"):(this.state.lang1=="ru"?("Категория новой карты"):("Category of new card"))}  </h5>
                <select type="select" id="category" name="select">
                  {this.state.category.map(item => { return <option value={item.slug}>{item.title}</option> })}

                </select>
              </div>
              <div className='mt-3'>
                <h5> {this.state.lang1=="uz"?("Yangi kartaning pastki toifasi"):(this.state.lang1=="ru"?("Подкатегория новой карты"):("Sub-Category of new card"))} </h5>
                <select type="select" id="subcategory" name="select">
                  {this.state.subcategory.map(item1 => { return <option value={item1.slug}>{item1.title}</option> })}

                </select>
              </div>
              <div className='mt-3'>
                <h5> {this.state.lang1=="uz"?("Yangi karta tavsifi(uz)"):(this.state.lang1=="ru"?("Описание новой карты(uz)"):("Description of new card(uz)"))} </h5>
                <input type="text" id="newDescription_uz" placeholder="Description card card(uz)" requiered />
              </div>
                </div>
                <div className="ModalBodyRightHero">
                <div className='mt-0'>
                <h5> {this.state.lang1=="uz"?("Yangi kartaning tavsifi(en)"):(this.state.lang1=="ru"?("Описание новой карты(en)"):("Description of new card(en)"))} </h5>
                <input type="text" id="newDescription_en" placeholder="Description card card(en)" requiered />
              </div>
              <div className='mt-3'>
                <h5> {this.state.lang1=="uz"?("Yangi kartaning tavsifi (ru)"):(this.state.lang1=="ru"?("Описание новой карты(ru)"):("Description of new card(ru)"))} </h5>
                <input type="text" id="newDescription_ru" placeholder="Description card card(ru)" requiered />
              </div>
              <div className='mt-3'>
                <h5> {this.state.lang1=="uz"?("Yangi karta narxi"):(this.state.lang1=="ru"?("Цена новой карты"):("Price of new card"))}  </h5>
                <input type="number" id="newPrice" placeholder="New card price" requiered />
              </div>
              <div className='mt-3'>
                <h5> {this.state.lang1=="uz"?("Yangi kartaning xususiyatlari"):(this.state.lang1=="ru"?("Характеристики новой карты"):("Characteristics of new card"))} </h5>
                <input type="text" id="newCharacteritics" placeholder="New card characeristics" />
              </div>
              <div className='mt-3'>
                <h5> {this.state.lang1=="uz"?("Yangi karta tasviri"):(this.state.lang1=="ru"?("Изображение новой карты"):("Image of new card"))}  </h5>
                <input type="file" onInput={(e) => this.handleFile(e)} id="file" requiered />
              </div>
                </div>
              
             
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.postProduct1}>
              {this.state.lang1=="uz"?("saqlash"):(this.state.lang1=="ru"?("хранить"):("save"))}
              </Button>
              <Button color="secondary" onClick={this.handleClose}>
              {this.state.lang1=="uz"?("Bekor qilish"):(this.state.lang1=="ru"?("Отмена"):("Cancel"))}
              </Button>
            </ModalFooter>
          </Modal>


          <Modal className="Modal12" isOpen={this.state.editmodal}>
            <ModalHeader> {this.state.lang1=="uz"?("Mahsulotni o`zgartirish"):(this.state.lang1=="ru"?("Изменить продукт"):("Edit product"))} </ModalHeader>
            <ModalBody className="ModalBody">
              <div className="ModalBodyLeftHero">
              <div className='mb-2'>
                <h5> {this.state.lang1=="uz"?("Tovar ismini o'zgartirish (uz)"):(this.state.lang1=="ru"?("Имя для новой карты (uz)"):("Edit name of product (uz)"))}  </h5>
                <input type="text" id="editnewTitleUz" placeholder="New card name(uz)" required />
              </div>
              <div className='mb-2'>
                <h5> {this.state.lang1=="uz"?("Tovar ismini o'zgartirish (en)"):(this.state.lang1=="ru"?("Имя для новой карты (en)"):("Edit name of product (en)"))} </h5>
                <input type="text" id="editnewTitleEn" placeholder="New card name(en)" required />
              </div>
              <div className='mb-2'>
                <h5> {this.state.lang1=="uz"?("Tovar ismini o'zgartirish (ru)"):(this.state.lang1=="ru"?("Имя для новой карты (ru)"):("Edit name of product (ru)"))}  </h5>
                <input type="text" id="editnewTitleRu" placeholder="New card name(ru)" required />
              </div>
              
              <div className='mt-3'>
                <h5> {this.state.lang1=="uz"?("Yangi karta toifasi"):(this.state.lang1=="ru"?("Категория новой карты"):("Category of new card"))}  </h5>
                <select type="select" id="editcategory" name="select">
                  {this.state.category.map(item => { return <option value={item.slug}>{item.title}</option> })}

                </select>
              </div>
              <div className='mt-3'>
                <h5> {this.state.lang1=="uz"?("Yangi kartaning pastki toifasi"):(this.state.lang1=="ru"?("Подкатегория новой карты"):("Sub-Category of new card"))} </h5>
                <select type="select" id="editsubcategory" name="select">
                  {this.state.subcategory.map(item1 => { return <option value={item1.slug}>{item1.title}</option> })}

                </select>
              </div>
             
                </div>
                <div className="ModalBodyRightHero">
                <div className='mt-0'>
                <h5> {this.state.lang1=="uz"?("Yangi karta tavsifi(uz)"):(this.state.lang1=="ru"?("Описание новой карты(uz)"):("Description of new card(uz)"))} </h5>
                <input type="text" id="editnewDescription_uz" placeholder="Description card card(uz)" requiered />
              </div>
                <div className='mt-3'>
                <h5> {this.state.lang1=="uz"?("Yangi kartaning tavsifi(uz)"):(this.state.lang1=="ru"?("Описание новой карты(ru)"):("Description of new card(en)"))} </h5>
                <input type="text" id="editnewDescription_en" placeholder="Description card card(en)" requiered />
              </div>
              <div className='mt-3'>
                <h5> {this.state.lang1=="uz"?("Yangi kartaning tavsifi (ru)"):(this.state.lang1=="ru"?("Описание новой карты(ru)"):("Description of new card(ru)"))} </h5>
                <input type="text" id="editnewDescription_ru" placeholder="Description card card(ru)" requiered />
              </div>
              <div className='mt-3'>
                <h5> {this.state.lang1=="uz"?("Yangi karta narxi"):(this.state.lang1=="ru"?("Цена новой карты"):("Price of new card"))} </h5>
                <input type="number" id="editnewPrice" placeholder="New card price" requiered />
              </div>
              <div className='mt-3'>
                <h5> {this.state.lang1=="uz"?("Yangi kartaning xususiyatlari"):(this.state.lang1=="ru"?("Характеристики новой карты"):("Characteristics of new card"))} </h5>
                <input type="text" id="editnewCharacteritics" placeholder="New card characeristics" />
              </div>
                </div>
              
              
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.putProduct}>
              {this.state.lang1=="uz"?("saqlash"):(this.state.lang1=="ru"?("хранить"):("save"))}
              </Button>
              <Button color="secondary" onClick={this.edittoggle1}>
                 {this.state.lang1=="uz"?("Bekor qilish"):(this.state.lang1=="ru"?("Отмена"):("Cancel"))}
              </Button>
            </ModalFooter>
          </Modal>




          <Modal isOpen={this.state.modal1}>
            <ModalHeader >Aksiya qo`shish</ModalHeader>
            <ModalBody>
              <div className='mt-3'>
                <h3>aksiya</h3>
                <Input type="select" id="addpromotion1" name="select">
                  {this.state.dataPromotion.map(item1 => { return <option value={item1.id}>{item1.title}</option> })}
                </Input>
              </div>

              <div className='mt-3'>
                <h3>add or remove</h3>
                <Input type="select" id="addpromotion" name="select">
                  <option value="add">add</option>
                  <option value="remove">remove</option>
                </Input>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.addPromotion}>
                save
              </Button>
              <Button color="secondary" onClick={this.handleClose1}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modal2}>
            <ModalHeader >{this.state.slugdata.title}</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="exampleImage">new image</Label>
                  <Input onInput={(e) => this.handleFile(e)} id="file" type="file" >
                  </Input>
                </FormGroup>
                <div style={{ display: "flex" }}>
                  {this.state.slugdataimages.map(item => {
                  return <div className='slugdataimages'>
                    <img style={{ width: "100px" }} src={item.imageURL} />
                    <button type='button' style={{ display: "none" }} className='produt_hover_btn'><MdDelete onClick ={() => this.deleteImage(item.id)} className="delete12" /></button>
                  </div>
                })} </div>
                 {/* <Input onInput={(e) => this.handleFile(e)} id="file" type="file" ></Input><Button></Button> */}
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.postImage}>
                save
              </Button>
              <Button color="secondary" onClick={this.toggle1}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Page>


        <div className="ModalDelete1"> 
         <div className="ModalColumn">
           <h2>  {this.state.lang1=="uz"?("Bu o`chirilsinmi?"):(this.state.lang1=="ru"?("Удалить это?"):("Delete this?"))} </h2>
           <div className="ButtonsModalDelete">
            <button className='btn btn-danger ml-3' onClick={() => this.deleteProduct(this.state.delete1)}> {this.state.lang1=="uz"?("O`chirish"):(this.state.lang1=="ru"?("Удалить"):("Delete"))} </button>
            <button className='btn btn-warning' onClick={this.CloseModal1}>{this.state.lang1=="uz"?("Bekor qilish"):(this.state.lang1=="ru"?("Отмена"):("Cancel"))}</button>
           </div>
         </div>
        </div>
      </>
    )
  }
}

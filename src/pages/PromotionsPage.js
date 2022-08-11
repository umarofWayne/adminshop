import React, { Component } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Page from '../components/Page';
import { deletePromotions, getCategorys, getPromotion, getPromotions, getSubCategorys,  postPromotions, putPromotion } from '../host/config';
import '../styles/components/modalDelete.css'
const {lang, language1}=require('../host/lang')


export default class tablepage extends Component {

state={
  file:null,
    data:[],
    category:[],
    subcategory:[],
    modal:false,
    editmodal:false,
    id1:{},
    delete1: "",
    lang1:(localStorage.getItem('lang')==null?("ru"):(localStorage.getItem('lang')))
}

getCategory=()=>{
    getCategorys().then(res=>{
    //  this.state
  this.setState({category:res.data})

    })

  }


  getSubCategory=()=>{
      getSubCategorys().then(res=>{
          this.setState({subcategory:res.data})
      })
  }


handleShow=()=>{
    this.setState({modal:true})
}
handleClose=()=>{
    this.setState({modal:false})
}
edittoggle1=()=>{

  this.setState({editmodal:false})
}
edittoggle=(id)=>{
  getPromotion(id).then(res=>{
      document.querySelector('#editnewTitleEn').value=res.data.title;
      document.querySelector('#editnewTitleRu').value=res.data.title;
      document.querySelector('#editnewTitleUz').value=res.data.title;
          document.querySelector('#editnewPromotion').value=res.data.percentage;
      document.querySelector('#editnewDescriptionEn').value=res.data.description;
      document.querySelector('#editnewDescriptionRu').value=res.data.description;
      document.querySelector('#editnewDescriptionUz').value=res.data.description;
      // document.querySelector('#editnewPrice').value=res.data.price;
      document.querySelector('#editstartPromotion').value=res.data.date_from;
      document.querySelector('#editendPromotion').value=res.data.date_till;
      })
  this.setState({editmodal:true, id1:id})
}
postPromotion=()=>{
    var data1={
        "slug":document.querySelector('#newTitleEn').value,
        "title_en": document.querySelector('#newTitleEn').value,
        "title_ru": document.querySelector('#newTitleRu').value,
        "title_uz": document.querySelector('#newTitleUz').value,
        "percentage":Number(document.querySelector('#newPromotion').value) ,
        "description_en":document.querySelector('#newDescriptionEn').value,
        "description_ru":document.querySelector('#newDescriptionRu').value,
        "description_uz":document.querySelector('#newDescriptionUz').value,
        // "price":document.querySelector('#newPrice').value,
        "date_from":document.querySelector('#startPromotion').value,
        "date_till":document.querySelector('#endPromotion').value,
        "product":"string",
        "image":this.state.file
      }
      postPromotions(data1).then(res =>{
        this.getPromotion()
    })
    this.handleClose()
    }

    putPromotions=(id)=>{
      var data={
        "title_uz": document.querySelector('#editnewTitleUz').value,
        "title_ru": document.querySelector('#editnewTitleRu').value,
        "title_en": document.querySelector('#editnewTitleEn').value,
        "percentage":Number(document.querySelector('#editnewPromotion').value) ,
        "description_en":document.querySelector('#editnewDescriptionEn').value,
        "description_ru":document.querySelector('#editnewDescriptionRu').value,
        "description_uz":document.querySelector('#editnewDescriptionUz').value,
        // "price":document.querySelector('#editnewPrice').value,
        "date_from":document.querySelector('#editstartPromotion').value,
        "date_till":document.querySelector('#editendPromotion').value,
        "product":"string",
        "image":this.state.file

      }
      putPromotion(this.state.id1, data).then(res=>{
        this.getPromotion()
        this.edittoggle1()
      })
      
      .catch(err=>{
      })
    }

    getPromotion = () =>{
      getPromotions().then(res=>{
        //  state
      this.setState({data:res.data})

        })

    }

// postPromotion=()=>{
//   var data1={
//     "slug":document.querySelector('#newTitleEn').value,
//     "title_en": document.querySelector('#newTitleEn').value,
//     "title_ru": document.querySelector('#newTitleRu').value,
//     "title_uz": document.querySelector('#newTitleUz').value,
//     "category":  document.querySelector('#category').value,
//     "subcategory":  document.querySelector('#subcategory').value,
//     "description_en":document.querySelector('#newDescription').value,
//     "price":document.querySelector('#newPrice').value,
//     "characteristics":document.querySelector('#newCharacteritics').value,
//     // "image":this.state.file
//   }
// }


 handleFile(e) {
  let file1 = e.target.files[0];

this.setState({file:e.target.files[0]})
}
  

// getProduct1 = () =>{
//     getProduct().then(res=>{
//       //  state
//     this.setState({data:res.data})
//       })

//   }

openModal1=(id)=>{
  document.querySelector('.ModalDelete1').style="top: 0"
  document.querySelector('.ModalColumn').style="top: 30%"
  this.setState({delete1:id})
    }
    CloseModal1=()=>{
      document.querySelector('.ModalDelete1').style="top: -100%"
      document.querySelector('.ModalColumn').style="top: -100%"
        }

deletePromotion=(id)=>{
  deletePromotions(id).then(res=>{
    this.getPromotion()
  })
  this.CloseModal1()
}
componentDidMount(){
  // this.getProduct1()
    this.getPromotion()
  // getProduct()
}


  render() {
    return (
      <>
            <Page
      title={this.state.lang1=="uz"?("Jadvallar"):(this.state.lang1=="ru"?("Таблицы"):("Tables"))}
      breadcrumbs={[{ name: `${(localStorage.getItem("lang"))=="uz"?("jadvallar"):((localStorage.getItem("lang"))=="en"?("tables"):("таблицы"))}`, active: true }]}
      className="TablePage"
    >


      <Row>
        <Col className="Table-PromotionPage">
          <Card className="mb-3">
            <CardHeader>
              <button onClick={()=>this.handleShow()} className="btn btn-primary"> {this.state.lang1=="uz"?("Yaratmoq"):(this.state.lang1=="ru"?("Создавать"):("Create"))} </button>
              
            </CardHeader>
            <CardBody><Table responsive> 
              <thead>
                  <tr>
                    <th> {this.state.lang1=="uz"?("Rasm"):(this.state.lang1=="ru"?("Изображение"):("Image  "))}  </th>
                    <th> {this.state.lang1=="uz"?("Reklama nomi"):(this.state.lang1=="ru"?("Название акции"):("Promotion name"))} </th>
                    <th> {this.state.lang1=="uz"?("Rag'batlantirish tavsifi"):(this.state.lang1=="ru"?("Описание акции"):("Description of promotion"))} </th>
                    <th> {this.state.lang1=="uz"?("Foiz"):(this.state.lang1=="ru"?("Процент"):("Percentage"))} </th>
                    <th> {this.state.lang1=="uz"?("Tahrirlash"):(this.state.lang1=="ru"?("Редактировать"):("Edit "))} </th>
                    <th> {this.state.lang1=="uz"?("O`chirish"):(this.state.lang1=="ru"?("удалить"):("Delete"))} </th>
                    
                  </tr>
                </thead>
              {this.state.data.map(item=>{
                return <tbody>
                  <tr>
                    <th scope="row"><img className='w-10 h-10' style={{width:"300px", height:"150px"}} src={item.image} alt='Card image'/></th>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.percentage}</td>
                    <td><button className='btn btn-success' onClick={()=> this.edittoggle(item.id)}> {this.state.lang1=="uz"?("Tahrirlash"):(this.state.lang1=="ru"?("Изминить"):("Edit "))} </button></td>
                    <td><button className='btn btn-danger ml-3' onClick={()=> this.openModal1(item.id)}> {this.state.lang1=="uz"?("O`chirish"):(this.state.lang1=="ru"?("Удалить"):("Delete"))} </button></td>
                  </tr>
                </tbody>
           
              })}   </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Modal isOpen={this.state.modal}>
                  <ModalHeader > {this.state.lang1=="uz"?("Modal sarlavha"):(this.state.lang1=="ru"?("Модальное название"):("Modal title"))} </ModalHeader>
                  <ModalBody>
                  <div className='mb-2'>
            <h3> {this.state.lang1=="uz"?("Aksiya nomini o'zgartirish(uz)"):(this.state.lang1=="ru"?("Имя для новой карты"):("Name promotions(uz)"))} </h3>
            <input type="text" id="newTitleUz" placeholder="New card name(uz)" required/>
            </div>
                  <div className='mb-2'>
            <h3> {this.state.lang1=="uz"?("Aksiya nomini o'zgartirish(en)"):(this.state.lang1=="ru"?("Имя для новой карты"):("Name promotions(en)"))} </h3>
            <input type="text" id="newTitleEn" placeholder="New card name(en)" required/>
            </div>
            <div className='mb-2'>
            <h3> {this.state.lang1=="uz"?("Aksiya nomini o'zgartirish(ru)"):(this.state.lang1=="ru"?("Имя для новой карты"):("Name promotions(ru)"))} </h3>
            <input type="text" id="newTitleRu" placeholder="New card name(ru)" required/>
            </div>
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Aksiya foizi"):(this.state.lang1=="ru"?("Продвижение новой карты"):("Percentage promotion"))} </h3>
              <input type="number" id="newPromotion" placeholder="Promotion of new card" requiered/>
            </div>
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Yangi kartaning tavsifi(uz)"):(this.state.lang1=="ru"?("Описание новой карты(uz)"):("Description of new card(uz)"))} </h3>
              <input type="text" id="newDescriptionUz" placeholder="Description card category(Uz)" requiered/>
            </div>
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Yangi kartaning tavsifi(en)"):(this.state.lang1=="ru"?("Описание новой карты(ru)"):("Description of new card(ru)"))} </h3>
              <input type="text" id="newDescriptionEn" placeholder="Description card category(En)" requiered/>
            </div>
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Yangi kartaning tavsifi(ru)"):(this.state.lang1=="ru"?("Описание новой карты(en)"):("Description of new card(en)"))} </h3>
              <input type="text" id="newDescriptionRu" placeholder="Description card category(Ru)" requiered/>
            </div>
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Aksiya start vaqti"):(this.state.lang1=="ru"?("Начать рекламу новой карты"):("Start promotion of new card"))} </h3>
              <input type="date" id="startPromotion"/>
            </div>
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Aksiya tugash vaqti"):(this.state.lang1=="ru"?("Завершить продвижение новой карты"):("End promotion of new card"))} </h3>
              <input type="date" id="endPromotion"/>
            </div>
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Yangi aksiya tasviri"):(this.state.lang1=="ru"?("Изображение новой "):("Image of new promotion"))} </h3>
              <input type="file" onInput={(e)=>this.handleFile(e)} id="file" requiered/>
            </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.postPromotion}>
              {this.state.lang1=="uz"?("saqlash"):(this.state.lang1=="ru"?("хранить"):("save"))}
                    </Button>
                    <Button color="secondary" onClick={this.handleClose}>
                    {this.state.lang1=="uz"?("Bekor qilish"):(this.state.lang1=="ru"?("Отмена"):("Cancel"))}
                    </Button>
                  </ModalFooter>
                </Modal>


                <Modal isOpen={this.state.editmodal}>
                  <ModalHeader > {this.state.lang1=="uz"?("Tahrirlash"):(this.state.lang1=="ru"?("Изминить"):("Edit "))} </ModalHeader>
                  <ModalBody>
                  <div className='mb-2'>
            <h3> {this.state.lang1=="uz"?("Aksiya nomini o`zgartirish(uz)"):(this.state.lang1=="ru"?("Изменить название промоакции(uz)"):("Edit promotion name(uz)"))} </h3>
            <input type="text" id="editnewTitleUz" placeholder="New card name(uz)" required/>
            </div>
                  <div className='mb-2'>
            <h3> {this.state.lang1=="uz"?("Aksiya nomini o`zgartirish(uz)"):(this.state.lang1=="ru"?("Изменить название промоакции(en)"):("Edit promotion name(en)"))} </h3>
            <input type="text" id="editnewTitleEn" placeholder="New card name(en)" required/>
            </div>
            <div className='mb-2'>
            <h3> {this.state.lang1=="uz"?("Aksiya nomini o`zgartirish(ru)"):(this.state.lang1=="ru"?("Изменить название промоакции(ru)"):("Edit promotion name(ru)"))}  </h3>
            <input type="text" id="editnewTitleRu" placeholder="New card name(ru)" required/>
            </div>
            
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Foizni o`zgartirish"):(this.state.lang1=="ru"?("Изменить процент"):("Edit percentage"))} </h3>
              <input type="number" id="editnewPromotion" placeholder="Promotion of new card" requiered/>
            </div>
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Aksiya tavsifini tahrirlash(uz)"):(this.state.lang1=="ru"?("Изменить описание акции(uz)"):("Edit description of promotion(uz)"))} </h3>
              <input type="text" id="editnewDescriptionUz" placeholder="Description card category(Uz)" requiered/>
            </div>
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Aksiya tavsifini tahrirlash(en)"):(this.state.lang1=="ru"?("Изменить описание акции(en)"):("Edit description of promotion(en)"))} </h3>
              <input type="text" id="editnewDescriptionEn" placeholder="Description card category(En)" requiered/>
            </div>
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Aksiya tavsifini tahrirlash(ru)"):(this.state.lang1=="ru"?("Изменить описание акции(ru)"):("Edit description of promotion(ru)"))}  </h3>
              <input type="text" id="editnewDescriptionRu" placeholder="Description card category(Ru)" requiered/>
            </div>
           
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Aksiya boshlanishini o'zgartirish"):(this.state.lang1=="ru"?("Начать изменение этого объявления"):("Edit start this promotion"))} </h3>
              <input type="date" id="editstartPromotion"/>
            </div>
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Aksiya tugashini o'zgartirish"):(this.state.lang1=="ru"?("Закончить  изменение этого объявления"):("Edit start this promotion"))} </h3>
              <input type="date" id="editendPromotion"/>
            </div>
            <div className='mt-3'>
              <h3> {this.state.lang1=="uz"?("Ushbu aksiyaning rasmini o`zgartirish"):(this.state.lang1=="ru"?("Изменить изображение этой акции"):("Edit image of this promotion"))} </h3>
              <input type="file" onInput={(e)=>this.handleFile(e)} id="file" requiered/>
            </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.putPromotions}>
              {this.state.lang1=="uz"?("saqlash"):(this.state.lang1=="ru"?("хранить"):("save"))}
                    </Button>
                    <Button color="secondary" onClick={this.edittoggle1}>
                    {this.state.lang1=="uz"?("Bekor qilish"):(this.state.lang1=="ru"?("Отмена"):("Cancel"))}
                    </Button>
                  </ModalFooter>
                </Modal>
    </Page>
    <div className="ModalDelete1"> 
         <div className="ModalColumn">
           <h2> {this.state.lang1=="uz"?("Bu o`chirilsinmi?"):(this.state.lang1=="ru"?("Удалить это?"):("Delete this?"))} </h2>
           <div className="ButtonsModalDelete">
            <button className='btn btn-danger ml-3' onClick={() => this.deletePromotion(this.state.delete1)}>{this.state.lang1=="uz"?("O`chirish"):(this.state.lang1=="ru"?("Удалить"):("Delete"))}</button>
            <button className='btn btn-warning' onClick={this.CloseModal1}> {this.state.lang1=="uz"?("Bekor qilish"):(this.state.lang1=="ru"?("Отмена"):("Cancel"))} </button>
           </div>
         </div>
        </div>
      </>
    )
  }
}

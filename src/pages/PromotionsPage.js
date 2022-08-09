import React, { Component } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Page from '../components/Page';
import { deletePromotions, getCategorys, getPromotions, getSubCategorys,  postPromotions, putPromotion } from '../host/config';
import '../styles/components/modalDelete.css'


export default class tablepage extends Component {

state={
  file:null,
    data:[],
    category:[],
    subcategory:[],
    modal:false,
    editmodal:false,
    id1:{},
    delete1: ""
}

getCategory=()=>{
    getCategorys().then(res=>{
    //  this.state
  this.setState({category:res.data})
  console.log(res.data);
    })
    console.log(this.state.category);
  }


  getSubCategory=()=>{
      getSubCategorys().then(res=>{
          this.setState({subcategory:res.data})
          console.log(res.data);
      })
      console.log(this.state.subcategory)
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
        "price":document.querySelector('#newPrice').value,
        "date_from":document.querySelector('#startPromotion').value,
        "date_till":document.querySelector('#endPromotion').value,
        "product":"string",
        "image":this.state.file
      }
      postPromotions(data1).then(res =>{
        this.getPromotion()
        // console.log(res.data);
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
        "price":document.querySelector('#editnewPrice').value,
        "date_from":document.querySelector('#editstartPromotion').value,
        "date_till":document.querySelector('#editendPromotion').value,
        "product":"string",
        "image":this.state.file

      }
      putPromotion(this.state.id1, data).then(res=>{
        this.getPromotion()
        console.log(data)
        this.edittoggle1()
      })
      
      .catch(err=>{
        console.log("error",err);
      })
    }

    getPromotion = () =>{
      getPromotions().then(res=>{
        //  state
      this.setState({data:res.data})
      console.log(res.data);
        })
        console.log(this.state.data);
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
console.log(this.state.file);}
  

// getProduct1 = () =>{
//     getProduct().then(res=>{
//       //  state
//     this.setState({data:res.data})
//     console.log(res.data);
//       })
//       console.log(this.state.data);
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
  // console.log(id);
  deletePromotions(id).then(res=>{
    this.getPromotion()
  })
  this.CloseModal1()
  // console.log(deletePromotions)
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
      title="Tables"
      breadcrumbs={[{ name: 'tables', active: true }]}
      className="TablePage"
    >


      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>
              <button onClick={()=>this.handleShow()} className="btn btn-primary">Create</button>
              
            </CardHeader>
            <CardBody><Table responsive> 
              <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Discount</th>
                    <th>Percentage</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    
                  </tr>
                </thead>
              {this.state.data.map(item=>{
                return <tbody>
                  <tr>
                    <th scope="row"><img className='w-10 h-10' style={{width:"300px", height:"150px"}} src={item.image} alt='Card image'/></th>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.percentage}</td>
                    <td><button className='btn btn-success' onClick={()=> this.edittoggle(item.id)}>Edit</button></td>
                    <td><button className='btn btn-danger ml-3' onClick={()=> this.openModal1(item.id)}>Delete</button></td>
                  </tr>
                </tbody>
           
              })}   </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Modal isOpen={this.state.modal}>
                  <ModalHeader >Modal title</ModalHeader>
                  <ModalBody>
                  <div className='mb-2'>
            <h3>Name for new card</h3>
            <input type="text" id="newTitleEn" placeholder="New card name(en)" required/>
            </div>
            <div className='mb-2'>
            <h3>Name for new card</h3>
            <input type="text" id="newTitleRu" placeholder="New card name(ru)" required/>
            </div>
            <div className='mb-2'>
            <h3>Name for new card</h3>
            <input type="text" id="newTitleUz" placeholder="New card name(uz)" required/>
            </div>
            <div className='mt-3'>
              <h3>Promotion of new card</h3>
              <input type="number" id="newPromotion" placeholder="Promotion of new card" requiered/>
            </div>
            <div className='mt-3'>
              <h3>Description of new card</h3>
              <input type="text" id="newDescriptionEn" placeholder="Description card category(En)" requiered/>
            </div>
            <div className='mt-3'>
              <h3>Description of new card</h3>
              <input type="text" id="newDescriptionRu" placeholder="Description card category(Ru)" requiered/>
            </div>
            <div className='mt-3'>
              <h3>Description of new card</h3>
              <input type="text" id="newDescriptionUz" placeholder="Description card category(Uz)" requiered/>
            </div>
            <div className='mt-3'>
              <h3>Price of new card</h3>
              <input type="number" id="newPrice" placeholder="New card price" requiered/>
            </div>
            <div className='mt-3'>
              <h3>Start promotion of new card</h3>
              <input type="date" id="startPromotion"/>
            </div>
            <div className='mt-3'>
              <h3>End promotion of new card</h3>
              <input type="date" id="endPromotion"/>
            </div>
            <div className='mt-3'>
              <h3>Image of new card</h3>
              <input type="file" onInput={(e)=>this.handleFile(e)} id="file" requiered/>
            </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.postPromotion}>
                     save
                    </Button>
                    <Button color="secondary" onClick={this.handleClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>


                <Modal isOpen={this.state.editmodal}>
                  <ModalHeader >Modal title</ModalHeader>
                  <ModalBody>
                  <div className='mb-2'>
            <h3>Name for new card</h3>
            <input type="text" id="editnewTitleEn" placeholder="New card name(en)" required/>
            </div>
            <div className='mb-2'>
            <h3>Name for new card</h3>
            <input type="text" id="editnewTitleRu" placeholder="New card name(ru)" required/>
            </div>
            <div className='mb-2'>
            <h3>Name for new card</h3>
            <input type="text" id="editnewTitleUz" placeholder="New card name(uz)" required/>
            </div>
            <div className='mt-3'>
              <h3>Promotion of new card</h3>
              <input type="number" id="editnewPromotion" placeholder="Promotion of new card" requiered/>
            </div>
            <div className='mt-3'>
              <h3>Description of new card</h3>
              <input type="text" id="editnewDescriptionEn" placeholder="Description card category(En)" requiered/>
            </div>
            <div className='mt-3'>
              <h3>Description of new card</h3>
              <input type="text" id="editnewDescriptionRu" placeholder="Description card category(Ru)" requiered/>
            </div>
            <div className='mt-3'>
              <h3>Description of new card</h3>
              <input type="text" id="editnewDescriptionUz" placeholder="Description card category(Uz)" requiered/>
            </div>
            <div className='mt-3'>
              <h3>Price of new card</h3>
              <input type="number" id="editnewPrice" placeholder="New card price" requiered/>
            </div>
            <div className='mt-3'>
              <h3>Start promotion of new card</h3>
              <input type="date" id="editstartPromotion"/>
            </div>
            <div className='mt-3'>
              <h3>End promotion of new card</h3>
              <input type="date" id="editendPromotion"/>
            </div>
            <div className='mt-3'>
              <h3>Image of new card</h3>
              <input type="file" onInput={(e)=>this.handleFile(e)} id="file" requiered/>
            </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.putPromotions}>
                     save
                    </Button>
                    <Button color="secondary" onClick={this.handleClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
    </Page>
    <div className="ModalDelete1"> 
         <div className="ModalColumn">
           <h2>Delete this?</h2>
           <div className="ButtonsModalDelete">
            <button className='btn btn-danger ml-3' onClick={() => this.deletePromotion(this.state.delete1)}>Delete</button>
            <button className='btn btn-warning' onClick={this.CloseModal1}>Cancel</button>
           </div>
         </div>
        </div>
      </>
    )
  }
}

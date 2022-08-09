import Page from '../components/Page';
import './style.css'
import React from 'react';
import { Card, Col, Row } from 'reactstrap';
import { getCategorys, getCompany, getContacts,getDollor,getProduct, getPromotions, getSubCategorys, postCopany, postDollors, putCompany, putDollor } from '../host/config';
import axios from 'axios';
const {lang, language1}=require('../host/lang')

class DashboardPage extends React.Component {
  state={
   category:[],
   product:[],
   subCategory:[],
   aksiya:[],
   data:[],
   file:[],
   file2:[],  
   lang1:(localStorage.getItem('lang')==null?("ru"):(localStorage.getItem('lang')))
  }



  handleFile(e) {
    let file1 = e.target.files[0];
  // console.log(file1);
  this.setState({file:file1})
  }
  handleFile2(e) {
    let file2 = e.target.files[0];
  // console.log(file1);
  this.setState({file2:file2})
  }
 getcategory=()=>{
   getCategorys().then(res=>{
     this.setState({category:res.data})
   })
 }
getProduct1=()=>{
  getProduct().then(res=>{
    this.setState({product:res.data})
  })
}
getSubCategory=()=>{
  getSubCategorys().then(res=>{
    this.setState({subCategory:res.data})
  })
}
getImaga=()=>{
  getPromotions().then(res=>{
    this.setState({aksiya:res.data})
  })
}
  postContact=()=>{
    var contacts={
      "name": document.querySelector(''),
      // "text": "Q",
    }
    getContacts(contacts).then(res=>{
      this.getContact()
    })
  }





getCompanys=()=>{
getCompany().then(res=>{
document.querySelector('#phone').value=res.data.phone
document.querySelector('#team').value=res.data.team
document.querySelector('#team_story').value=res.data.team_story
document.querySelector('#longitude').value=res.data.longitude
document.querySelector('#latitude').value=res.data.latitude
this.state.file2=res.data.logo
})
}
postCompanys=()=>{
 var data={
  "created_at": "123324.2342342000000000000000000",
  "modified_at": "123324.2342342000000000000000000",
  "logo": this.state.file2,
  "phone": document.querySelector('#phone').value,
  "about_img": this.state.file,
  "team": document.querySelector('#team').value,
  "team_story": document.querySelector('#team_story').value,
  "longitude": "123324.2342342000000000000000000",
  "latitude": "12432432.2343530000000000000000000",
  "created": 1,
  "modified": 1
}
postCopany(data).then(res=>{    
  this.getCompanys();
})
}
putCompanys=()=>{
  var put ={
  "logo": this.state.file2,
  "phone": document.querySelector('#phone').value,
  "about_img": this.state.file,
  "team": document.querySelector('#team').value,
  "team_story": document.querySelector('#team_story').value,
  }
    putCompany(put).then(res=>{
    document.querySelector('#phone').value=res.data.phone
    document.querySelector('#team').value=res.data.team
    document.querySelector('#team_story').value=res.data.team_story
    document.querySelector('#longitude').value=res.data.longitude
    document.querySelector('#latitude').value=res.data.latitude
    this.state.file2=res.data.logo
  })
}
Dollor=()=>{
  var data={
    "value": document.querySelector('#dataDollor').value
  }
  console.log(data);
  putDollor(data).then(res=>{
    console.log(res.data);
  })
}
getDollors=()=>{
  getDollor().then(res=>{
    console.log(res.data.value);
    document.querySelector('#dataDollor').value=res.data.value
  })
}
componentDidMount(){
  this.getImaga()
  this.getSubCategory()
  this.getProduct1()
  this.getCompanys()
  this.getcategory()
  // console.log("salom"); 
  this.getDollors()
}

  render() {

    return (
      <Page
        className="DashboardPage"
        title={this.state.lang1=="uz"?("Bosh sahifa"):(this.state.lang1=="ru"?("Домашняя страница"):("Homepage"))}
        breadcrumbs={[{ name: `${this.state.lang1=="uz"?("Bosh sahifa"):(this.state.lang1=="ru"?("Домашняя страница"):("Homepage"))}`, active: true }]}
      >
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
                <div class="bg-info w-100 card12">
                    <h1>{this.state.product.length}</h1>
                    <p>{this.state.lang1=="uz"?("Maxsulot"):(this.state.lang1=="ru"?("Товар"):("Product"))}</p>
               </div>
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
     <div className="card12">
     <h1>{this.state.category.length}</h1>
                    <p>{this.state.lang1=="uz"?("Turlar"):(this.state.lang1=="ru"?("Категория"):("Category"))}</p>
       </div>
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
     <div className="card12">
     <h1>{this.state.subCategory.length}</h1>
                    <p>{this.state.lang1=="uz"?("Qo`shimcha"):(this.state.lang1=="ru"?("Подкатегория"):("SubCategory"))}</p>
       </div>
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
        <div className="card12">
        <h1>{this.state.aksiya.length}</h1>
                    <p>{this.state.lang1=="uz"?("Aksiyalar"):(this.state.lang1=="ru"?("Продвижение"):("Promotion"))}</p>
          </div>
          </Col>
        </Row>
              <div className="InputGroup">
              
                
              <div className='mt-3'>
                <h5>{this.state.lang == "uz"? (language1.uz.item):(this.state.lang == "ru" ?(language1.ru.item): (language1.en.item))}</h5>
                <input type="number" id="phone" placeholder={this.state.lang1=="uz"?(""):(this.state.lang1=="ru"?(""):(""))} />
              </div>
              
              <div className='mt-3'>
                <h5>Team{this.state.lang1=="uz"?(""):(this.state.lang1=="ru"?(""):(""))}</h5>
                <input type="text" id="team" placeholder="team" requiered />
              </div>
              <div className='mt-3'>
                <h5>Team Story{this.state.lang1=="uz"?(""):(this.state.lang1=="ru"?(""):(""))}</h5>
                <input type="text" id="team_story" placeholder="Team Story" requiered />
              </div>
              <div className='mt-3'>
                <h5>Longitude{this.state.lang1=="uz"?(""):(this.state.lang1=="ru"?(""):(""))}</h5>
                <input type="text" id="longitude" placeholder="Longitude" />
              </div>
              <div className='mt-3'>
                <h5>Latitude{this.state.lang1=="uz"?(""):(this.state.lang1=="ru"?(""):(""))}</h5>
                <input type="text" id="latitude" placeholder='Latitude' requiered />
              </div>
              <div className='mt-3'>
              <h5>Company logo{this.state.lang1=="uz"?(""):(this.state.lang1=="ru"?(""):(""))}</h5>
                <input className='d-block mt-2' onInput={(e) => this.handleFile2(e)} type="file" placeholder='logo' name="" id="logo" />
              </div>
              <div className='mt-3'>
                <h5>About Img{this.state.lang1=="uz"?(""):(this.state.lang1=="ru"?(""):(""))}</h5>
                <input type="file" onInput={(e) => this.handleFile(e)} id="aboutImg" requiered />
              </div>

              </div>
              <button className='btn btn-primary mt-2' onClick={()=> this.putCompanys()}>yuborish{this.state.lang1=="uz"?(""):(this.state.lang1=="ru"?(""):(""))}</button>

              <div className="dollor12">
       <input type="number" id='dataDollor'/><button onClick={()=>{this.Dollor()}}>qiymatni yuborish{this.state.lang1=="uz"?(""):(this.state.lang1=="ru"?(""):(""))}</button></div>
      </Page>
    );
  }
}
export default DashboardPage;

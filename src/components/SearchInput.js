import React, { Component } from 'react'
import { Form } from 'reactstrap'
import './Style/Search.css'
const {lang}=require('../host/lang')

export default class SearchInput extends Component {
state={
  lang:[],

}
  getValue=()=>{
    var lang = document.getElementById('language').value
    console.log(lang);
    localStorage.setItem("lang",lang)
    var lang1 = document.getElementById('language').value
  }



  render() {
    return (
      <div>
        <Form inline className="cr-search-form" onSubmit={e => e.preventDefault()}>
      {/* <MdSearch
        size="20"
        className="cr-search-form__icon-search text-secondary"
      /> */}
      <select onChange={()=> this.getValue()} id='language'>
      <option value="uz" className='uz'>uz</option>
      <option value="ru" className='ru'>ru</option>
      <option value="en" className='en'>en</option>
      </select>
    </Form>
      </div>
    )
  }
}

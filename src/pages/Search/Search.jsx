import React from 'react'
import searchIcon from '../../assets/icon/search.svg'
const Search = () => {
  return (
    <div>
      <div className='container'>
      <form>
      <div class="input-group mb-3">
  <div class="input-group-prepend">
    <img src={searchIcon} alt="" />
  </div>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>
</form>
      </div>
    </div>
  )
}

export default Search

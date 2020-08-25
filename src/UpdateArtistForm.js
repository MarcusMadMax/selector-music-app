import React, {Component} from 'react'
import './assets/css/style.css'

class UpdateArtistForm extends Component {
  constructor(props){
    super(props)
  }

  handleUpdateClick = () => {
		var {setActiveView, setArtistToUpdate, id} = this.props
		setArtistToUpdate(id)
		setActiveView('update-artist')
  }
  
	handleFormSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData(this.updateForm);
        var data = {
            name:formData.get('name-input'),
            description:formData.get('description-input')
        }
        var {updateProject,id,setActiveView} = this.props
        updateProject(id,data)
        setActiveView('artists')
    }

  render(){
    var {name, description} = this.props
    return (
      <div className="app">
          <form action="/action_page.php" onSubmit={this.handleFormSubmit} ref={(el) => {this.updateForm = el}}>
              <h1>Update Artist</h1>
              <label for="aname">Name:</label>
              <input type="text" id="aname" name="name-input" placeholder="Enter your artist name" defaultValue={name}/>

              <label for="description">Description:</label>
              <input type="text" id="description" name="description-input" placeholder="Enter your description" defaultValue={description}/>

              <label for="photo">Name:</label>
              <input type="text" id="photo" name="photo" placeholder="Enter your cover photo"/>

              <label for="genres">Genres</label>

              <select name="genre-input" id="genres">
                <option value="rock">Rock</option>
                <option value="metal">Metal</option>
                <option value="acidjazz">Acid Jazz</option>
                <option value="edm">EDM</option>
              </select>

              <button type="submit">Update</button>
          </form>
      </div>
    )
  }
}

export default UpdateArtistForm
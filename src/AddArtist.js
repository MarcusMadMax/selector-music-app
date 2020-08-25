import React, { Component } from 'react'
import './assets/css/style.css'

class AddArtistForm extends Component {
  constructor(props) {
    super(props)

  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    var formData = new FormData(this.addForm)
    var data = {
      name: formData.get('name-input'),
      description: formData.get('description-input'),
      type_id: parseInt(formData.get('genre-input'))
    }

    var { addProject, setActiveView } = this.props
    addProject(data)
    setActiveView('artists')
  }

  render() {

    return (
      <div className="addArtist App">
        <main>
        <h1>Add Artist</h1>
          <form action="/action_page.php" onSubmit={this.handleFormSubmit} ref={(el) => { this.addForm = el }}>
            <label htmlFor="aname">Name:</label>
            <input type="text" id="aname" name="name-input" placeholder="Enter your artist name" />

            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description-input" placeholder="Enter your description" />

            <label htmlFor="photo">Name:</label>
            <input type="text" id="photo" name="photo" placeholder="Enter your cover photo" />

            <label htmlFor="genres">Genres</label>

            <select name="genre-input" id="genres">
              <option value="rock">Rock</option>
              <option value="metal">Metal</option>
              <option value="acidjazz">Acid Jazz</option>
              <option value="edm">EDM</option>
            </select>
            <button type="submit">Update</button>
          </form>
        </main>
      </div>
    )
  }
}

export default AddArtistForm
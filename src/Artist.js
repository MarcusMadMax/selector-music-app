import React, { Component } from 'react'


class Artist extends Component {

    handleUpdateClick = () => {
      this.props.setActiveView('updateArtist')
  }

  handleTrashClick = () => {
    var {deleteArtist,id} = this.props;
    deleteArtist(id);
}

  render() {
    var { name, description, photo, type_id } = this.props
    return (
      <div className="artist">
        <img src={photo} alt="The Artist" />
        <h1>{name}</h1>
        <hr />
        <p>{description}</p>
        <footer>
          <div className="icons">
            <i onClick={() => this.handleUpdateClick('updateArtist')} className="fas fa-edit"></i>
            <i onClick={() => this.handleTrashClick} className="far fa-trash-alt"></i>
          </div>
          <button className="genre">{type_id}</button>
        </footer>
      </div>
    )
  }
}

export default Artist
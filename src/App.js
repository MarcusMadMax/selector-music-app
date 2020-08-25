import React, { Component } from 'react'
import View from './View'
import axios from 'axios'
import Update from './UpdateArtistForm'
import Add from './AddArtistForm'
import './assets/css/style.css'

var urlPrefix = 'http://localhost:4000/api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeView: 'artists',
      artists: [
        {
          name: 'Red Hot Chilli Peppers'
        }
      ]
    }
  }

  setActiveView = (view) => {
    this.setState({ activeView: view })
  }

  getProjects = () => {
    axios.get(urlPrefix + '/artists')
      .then(res => {
        this.setState({ artists: res.data })
      })
  }

  componentDidMount() {
    this.getProjects()
  }

  render() {

    return (
      <div className="mainPage App">
        <View viewName="artists" activeView={this.state.activeView}>
          <header>
            <div className="logo">
              <img src="/images/logo.svg" alt="The logo" />
            </div>
            <i onClick={() => this.setActiveView('addArtist')} className="fas fa-plus-circle"></i>
          </header>

          <main>
            <div className="artist">
              <img src="assets/chillies.jpg" alt="The Artist" />
              <h1>Red Hot Chilli Pepers</h1>
              <hr />
              <p>Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. Their music
              incorporates elements of alternative rock, funk, punk rock and psychedelic rock. With over 80
              million records sold worldwide, Red Hot Chili Peppers are one of the best-selling bands of all time.
            They are the most successful band in the history of alternative rock.</p>
              <footer>
                <div className="icons">
                  <i onClick={() => this.setActiveView('updateArtist')} className="fas fa-edit"></i>
                  <i className="far fa-trash-alt"></i>
                </div>
                <button className="genre">Rock</button>
              </footer>
            </div>
          </main>
        </View>

        <View viewName="addArtist" activeView={this.state.activeView}>
          <div className="addArtist App">
            <header>
              <div className="logo">
                <img src="/images/logo.svg" alt="" />
              </div>
              <i onClick={() => this.setActiveView('artists')} className="fas fa-times-circle"></i>
            </header>
            <main>
              <h1>Add Artist</h1>

            </main>
          </div>
        </View>

        <View viewName="updateArtist" activeView={this.state.activeView}>
          <div className="updateArtist App">
            <header>
              <div className="logo">
                <img src="/images/logo.svg" alt="" />
              </div>
              <i onClick={() => this.setActiveView('artists')} className="fas fa-times-circle"></i>
            </header>
            <main>
              <h1>Update Artist</h1>

            </main>
          </div>
        </View>
      </div>
    )
  }
}

export default App

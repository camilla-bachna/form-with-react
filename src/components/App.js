import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: '',
      value: 'all ages',
      genres: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
    this.handleRadioButton = this.handleRadioButton.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleForm(event) {
    event.preventDefault();
  }

  handleInput(event) {
    this.setState({ name: event.target.value });
  }

  handleDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleLanguage(event) {
    this.setState({ language: event.target.value });
  }

  handleRadioButton(event) {
    this.setState({ value: event.target.value });
  }

  handleChecked(event) {
    if (event.target.checked && this.state.genres.length < 3) {
      this.setState((prevState) => {
        prevState.genres.push(event.target.value);
        return {
          genres: prevState.genres,
        };
      });
    } else {
      this.setState((prevState) => {
        const genres = prevState.genres.filter(
          (genre) => genre !== event.target.value
        );
        return {
          genres: genres,
        };
      });
    }
  }

  handleReset() {
    this.setState({
      name: '',
      description: '',
      language: '',
      value: 'all ages',
      genres: [],
    });
  }

  render() {
    console.log(this.state);
    let ages;
    if (this.state.value === 'option 1') {
      ages = 7;
    } else if (this.state.value === 'option 2') {
      ages = 12;
    } else if (this.state.value === 'option 3') {
      ages = 16;
    } else if (this.state.value === 'option 4') {
      ages = 18;
    }

    return (
      <>
        <form className="container" onSubmit={this.handleForm}>
          <h1 className="title">Movie time</h1>
          <p className="title">
            {' '}
            Fill in the name of a movie, a description and the language in which
            you want to watch the film. Choose an age limit and the genre
          </p>

          {/* name */}
          <input
            type="text"
            name="name"
            placeholder="write the name of a movie..."
            value={this.state.name}
            onChange={this.handleInput}
            className="item"
          />
          {/* description */}
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={
              this.state.description ||
              'please write a description of the movie here...'
            }
            onChange={this.handleDescription}
            className="item"
          />

          {/* language */}
          <select
            name="language"
            id="language"
            className="item"
            value={this.state.language}
            onChange={this.handleLanguage}
          >
            <option value="Spanish">Spanish</option>
            <option value="English">English</option>
            <option value="German">German</option>
          </select>

          {/* age */}
          <h3>Age limit</h3>
          <label>
            <input
              type="radio"
              value="all ages"
              checked={this.state.value === 'all ages'}
              onChange={this.handleRadioButton}
              className="radioButton"
            />
            All ages
          </label>
          <label>
            <input
              type="radio"
              value="option 1"
              checked={this.state.value === 'option 1'}
              onChange={this.handleRadioButton}
              className="radioButton"
            />
            7
          </label>
          <label>
            <input
              type="radio"
              value="option 2"
              checked={this.state.value === 'option 2'}
              onChange={this.handleRadioButton}
              className="radioButton"
            />
            12
          </label>
          <label>
            <input
              type="radio"
              value="option 3"
              checked={this.state.value === 'option 3'}
              onChange={this.handleRadioButton}
              className="radioButton"
            />
            16
          </label>
          <label>
            <input
              type="radio"
              value="option 4"
              checked={this.state.value === 'option 4'}
              onChange={this.handleRadioButton}
              className="radioButton"
            />
            18
          </label>

          {/* genre */}
          <h3>Genre (max. 3)</h3>
          <label>
            <input
              type="checkbox"
              name="genre"
              id="genre"
              value="comedy"
              checked={this.state.genres.includes('comedy')}
              onChange={this.handleChecked}
              className="checkbox"
            />
            Comedy
          </label>
          <label>
            <input
              type="checkbox"
              name="genre"
              id="genre"
              value="drama"
              checked={this.state.genres.includes('drama')}
              onChange={this.handleChecked}
              className="checkbox"
            />
            Drama
          </label>
          <label>
            <input
              type="checkbox"
              name="genre"
              id="genre"
              value="fantasy"
              checked={this.state.genres.includes('fantasy')}
              onChange={this.handleChecked}
              className="checkbox"
            />
            Fantasy
          </label>
          <label>
            <input
              type="checkbox"
              name="genre"
              id="genre"
              value="action"
              checked={this.state.genres.includes('action')}
              onChange={this.handleChecked}
              className="checkbox"
            />
            Action
          </label>
          <label>
            <input
              type="checkbox"
              name="genre"
              id="genre"
              value="horror"
              checked={this.state.genres.includes('horror')}
              onChange={this.handleChecked}
              className="checkbox"
            />
            Horror
          </label>
          <label>
            <input
              type="checkbox"
              name="genre"
              id="genre"
              value="family"
              checked={this.state.genres.includes('family')}
              onChange={this.handleChecked}
              className="checkbox"
            />
            Family
          </label>

          {/* send button */}
          <input type="submit" value="Send" className="item send-button" />

          {/* reset button */}
          <button onClick={this.handleReset} className="reset">
            Reset
          </button>
        </form>

        {/* Preview */}
        <article className="article">
          <h2 className="item">The film is {this.state.name}</h2>
          <p className="item">The description: {this.state.description}</p>
          <h3 className="item">
            The choosen language is {this.state.language.toUpperCase()}
          </h3>
          <p className="item">The age limit is: {ages}</p>
          <p className="item">The genre is: {this.state.genres.join(', ')}</p>
        </article>
      </>
    );
  }
}
export default App;

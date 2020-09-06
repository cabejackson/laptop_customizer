import React from 'react';
import FEATURES from './STORE'
import Header from './Header';
import MainForm from './mainForm/MainForm';
import MainSummary from './mainSummary/MainSummary';
import USCurrencyFormat from './Helpers/Helpers';




export default class App extends React.Component {
  state = {
    selected: {
      Processor: FEATURES.Processor[0],
      'Operating System': FEATURES["Operating System"][0],
      'Video Card': FEATURES["Video Card"][0],
      Display: FEATURES.Display[0]
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = FEATURES[feature][newValue];

    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <Header />
        <main>
          <MainForm
            features={FEATURES}
            dollarFormat={USCurrencyFormat}
            handleUpdate={this.updateFeature}
            selected={this.state.selected}
          />
          <MainSummary
            selected={this.state.selected}
            dollarFormat={USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}

// export default App;
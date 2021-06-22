import {View} from 'react-native';

import React from 'react';

import './Center.css';

import Left from '../Left/Left';
import Right from '../Right/Right';

class Center extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLeft: false,
      showRight: false,
      maximized: sides.none,
    };
  }

  getClassLeft(showLeft, showRight, maximized) {
    if (maximized === sides.left) {
      if (showLeft && !showRight) {
        return 'maximizedLeft';
      } else if (!showLeft && showRight) {
        //
      } else {
        return 'left minimizeLeft';
      }
    } else if (maximized === sides.right) {
      if (showLeft && !showRight) {
        //
      } else if (!showLeft && showRight) {
        return 'hiddenLeft';
      } else {
        return 'left unhideLeft';
      }
    } else {
      if (showLeft && !showRight) {
        return 'left maximizeLeft';
      } else if (!showLeft && showRight) {
        return 'left hideLeft';
      } else {
        return 'left';
      }
    }
  }

  getClassRight(showLeft, showRight, maximized) {
    if (maximized === sides.left) {
      if (showLeft && !showRight) {
        return 'hiddenRight';
      } else if (!showLeft && showRight) {
        //
      } else {
        return 'right unhideRight';
      }
    } else if (maximized === sides.right) {
      if (showLeft && !showRight) {
        //
      } else if (!showLeft && showRight) {
        return 'maximizedRight';
      } else {
        return 'right minimizeRight';
      }
    } else {
      if (showLeft && !showRight) {
        return 'right hideRight';
      } else if (!showLeft && showRight) {
        return 'right maximizeRight';
      } else {
        return 'right';
      }
    }
  }

  render() {
    const showLeft = this.state.showLeft;
    const showRight = this.state.showRight;
    const maximized = this.state.maximized;

    return (
      <View style={styles.view}>
        <div
          className={this.getClassLeft(showLeft, showRight, maximized)}
          onAnimationEnd={() => {
            if (maximized === sides.none) {
              if (showLeft) {
                this.setState({maximized: sides.left});
              }
            } else if (maximized === sides.left) {
              if (!showLeft) {
                this.setState({maximized: sides.none});
              }
            }
          }}>
          <div
            className="leftOverhang shadowLeft"
            onClick={() =>
              this.setState({
                showLeft: true,
                showRight: false,
              })
            }></div>
          <div
            className="leftClose"
            onClick={() =>
              this.setState({
                showLeft: false,
                showRight: false,
              })
            }>
            X
          </div>
          <div className="leftContent shadowLeft"></div>
        </div>
        <div
          className={this.getClassRight(showLeft, showRight, maximized)}
          onAnimationEnd={() => {
            if (maximized === sides.none) {
              if (showRight) {
                this.setState({maximized: sides.right});
              }
            } else if (maximized === sides.right) {
              if (!showRight) {
                this.setState({maximized: sides.none});
              }
            }
          }}>
          <div
            className="rightOverhang shadowRight"
            onClick={() =>
              this.setState({
                showLeft: false,
                showRight: true,
              })
            }></div>
          <div
            className="rightClose"
            onClick={() =>
              this.setState({
                showLeft: false,
                showRight: false,
              })
            }>
            X
          </div>
          <div className="rightContent shadowRight"></div>
        </div>
      </View>
    );
  }
}

const styles = {
  view: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
};

const sides = {
  left: 'left',
  right: 'right',
  none: 'none',
};

export default Center;

import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const timeout = 250
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
}

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    return (
      <TransitionGroup appear>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
          defaultStyle={{
            transition: `opacity ${timeout}ms ease-in-out`,
            opacity: 0,
          }}
        >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
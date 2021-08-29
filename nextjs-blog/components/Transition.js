import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";

const TIMEOUT = 500;
const getTransitionStyles = {
  entering: {
    transition: `opacity ${TIMEOUT}ms ease-in, transform ${TIMEOUT}ms ease-in-out`,
    position: `absolute`,
    opacity: 0,
    transform: `translateX(0px)`,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    transform: `translateX(0px)`,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
    transform: `translateX(0px)`,
  },
};

const getTransitionStyles2 = {
  entering: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    position: `absolute`,
    opacity: 0,
    transform: `translateX(-25)`,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    transform: `translateX(0px)`,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
    transform: `translateX(0px)`,
  },
};

const Transition = ({ children, location }) => {
  //   console.log("LOCATION: " + location);

  function renderSwitch(location, status) {
    switch (location) {
      case "/about":
        return {
          ...getTransitionStyles2[status],
        };
      default:
        return {
          ...getTransitionStyles[status],
        };
    }
  }
  return (
    <TransitionGroup style={{ position: "relative" }}>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        {(status) => (
          <div style={renderSwitch(location, status)}>{children}</div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};
export default Transition;

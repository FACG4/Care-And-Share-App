import React, {Component} from 'react';
import './style.css';
const { Provider, Consumer } = React.createContext({});

const Accordion = ({ children }) => <div>{children}</div>;

class AccordionItem extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         expanded: this.props.expanded || false
      };

      this.toggleVisibility = this.toggleVisibility.bind(this);
   }

   toggleVisibility() {
      this.setState(prevState => ({
         expanded: !prevState.expanded
      }));
   }

   render() {
      return (
         <Provider
            value={{
               expanded: this.state.expanded,
               onClick: this.toggleVisibility
            }}
         >
            {this.props.children}
         </Provider>
      );
   }
}

const AccordionItemTitle = ({ children }) => (
   <Consumer>
      {({ expanded, onClick }) => (
         <h2 className="title">
            <button
               className="button2"
               aria-expanded={expanded ? "true" : "false"}
               onClick={onClick}
            >
               {children}
            </button>
         </h2>
      )}
   </Consumer>
);

const AccordionItemBody = ({ children }) => (
   <Consumer>
      {({ expanded }) => (
         <div className="body" hidden={!expanded}>
            {children}
         </div>
      )}
   </Consumer>
);

// Example usage
class Home extends React.Component{

  render() {
     return (
   <Accordion>
      <AccordionItem expanded>
         <AccordionItemTitle>How can I find other carers in the App? </AccordionItemTitle>
         <AccordionItemBody>
            <p>
               - You can go to the <b>Carers</b> tab in the navbar to view all other Carers
               cards and press at any card to show whole carer informaitions.
            </p>
         </AccordionItemBody>
      </AccordionItem>

      <AccordionItem>
         <AccordionItemTitle>How can I Add new Connection? </AccordionItemTitle>
         <AccordionItemBody>
            <p>
               - In the <b>Carers</b> section when you click at any card
               an <b>Add</b> button will appeare, you can send an connect request also you can
               cancle it by clicking at the button.
            </p>
         </AccordionItemBody>
      </AccordionItem>

      <AccordionItem>
         <AccordionItemTitle>How can I Edit my Profile? </AccordionItemTitle>
         <AccordionItemBody>
            <p>
              - By clicking at <b>Profile</b> in the navbar and adding/editing
              your profile detailes and save it by clicking at the <b>Save</b> button.
            </p>
         </AccordionItemBody>
      </AccordionItem>

      <AccordionItem>
         <AccordionItemTitle>How can I View my connections list? </AccordionItemTitle>
         <AccordionItemBody>
            <p>
               - Go to <b>Connections</b> section in the navbar you can view your connections
                cards list, you can <b>Chat</b>, <b>View Profile</b> and <b>Delete</b> any connection
                by clicking at his/her card and choose the action.
            </p>
         </AccordionItemBody>
      </AccordionItem>

   </Accordion>
);
}
}

export default Home;

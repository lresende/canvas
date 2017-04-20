/****************************************************************
** IBM Confidential
**
** OCO Source Materials
**
** SPSS Modeler
**
** (c) Copyright IBM Corp. 2016
**
** The source code for this program is not published or otherwise
** divested of its trade secrets, irrespective of what has been
** deposited with the U.S. Copyright Office.
*****************************************************************/

import React, {Component} from 'react';
// reference react-intl.min.js to fix reference issue for util.js.map
import {FormattedMessage} from 'react-intl/dist/react-intl.min.js'
import {Modal} from 'react-bootstrap';
import {Button} from 'ap-components-react/dist/ap-components-react'

export default class PropertiesDialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let modalClassName = 'modal__container';
    return (

      <Modal
        className="ap-container" {...this.props}
        show={true}
        keyboard={true}
        backdrop="static"
        onHide={this.props.cancelHandler}>
        <div className={modalClassName}>
          <div
            className="modal-title"
            style={{'paddingBottom':'10px'}}>
            <h2>
              {this.props.title}
            </h2>
          </div>
          <div className="modal-children">
            {this.props.children}
          </div>
          <div className="modal__buttons">
            <Button
              semantic
              href=""
              onClick={this.props.okHandler} style={{'marginLeft': '10px'}} >
              <FormattedMessage id="dialog.okBtn"/>
            </Button>

            <Button
              semantic
              href=""
              hyperlink
              onClick={this.props.cancelHandler}>
              <FormattedMessage id="dialog.cancelBtn"/>
            </Button>
          </div>
        </div>

      </Modal>

    );
  }
}

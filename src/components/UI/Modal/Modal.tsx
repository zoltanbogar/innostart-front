import React, {Component} from 'react';

import classes from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

type ModalProps = {
    show: boolean,
    modalClosed: any
}

class Modal extends Component<ModalProps> {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render(){
        return(
            <Auxiliary>
                <div className={classes.Modal} style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'}}>
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }
}

export default Modal;
import React, { useState } from 'react';
import ReactDOM from 'react-dom'

class Sparklificator extends Component { 
	constructor(
		position = 'top', 
		width = 100, 
		height = 50, 
		data = [], 
		paddingWidth = true, 
		paddingHeight = false, 
		stackingOrder = 'front', 
		hoverInteraction = false, 
		renderer = function(){} 
	) {
	    this.position = position
	    this.width = width
		this.height = height
		this.data = data
		this.paddingWidth = paddingWidth
		this.paddingHeight = paddingHeight
		this.stackingOrder = stackingOrder
		this.hoverInteraction = hoverInteraction
		this.renderer = renderer
  	}

	sparklineSPAN() { = $('<span class="sparkline"></span>');
			sparklificatedSPAN.append(sparklineSPAN);

	    	//set the other basic properties of the container and sparkline
	    	sparklineSPAN.css('position', 'absolute');

	componentDidMount() {
        this._createSparklificatedElement();
    }

    _createSparklificatedElement() {
        const { options } = this.props;
        const element = this.elementRef.current;

        // Create the sparklificated element
        const sparklificatedElement = document.createElement('span');
        sparklificatedElement.classList.add('sparklificated');
        sparklificatedElement.style.position = 'relative';
        sparklificatedElement.style.whiteSpace = 'nowrap';
        sparklificatedElement.style.display = 'inline-block';

        // Append the sparklificated element to the parent of the target element
        element.parentNode.appendChild(sparklificatedElement);

        // Set the reference to the sparklificated element
        this.setState({ sparklificatedElement });
    }

    render() {
        return (
            <div className="entity" ref={this.elementRef} style={{ position: 'relative' }}>
                <span className="sparkline" style={{ position: 'absolute' }}></span>
                {/* You can render the child element here if needed */}
            </div>
        );
    }
}

export default Sparklificator;
};

export default Sparklificator;

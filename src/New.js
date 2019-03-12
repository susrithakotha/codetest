let React = require('react');

let map = {
	success: 'success',
	message: 'info',
	caution: 'warning',
	error: 'danger'
}

class Notification extends React.Component {
	render() {
		let props = this.props;
		let type = map[props.type] || 'info';
		let className = ['alert', `alert-${type}`].join(' ');
		if(props.message) {
			return (
				<div className={className}>{props.message}</div>
			)
		}
		return null;
	}
}

// TODO: Create a Confirmation Component

class Confirmation extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isRender: true
    }
    this.handleAccept = this.handleAccept.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
  }
  
  handleAccept() {
    this.setState({
      isRender: false
    })
  }
  handleDecline() {
    this.setState({
      isRender: false
    })
  }
  
  render(){
    return (
      <React.Fragment>
        <p>{this.props.message}</p>
        <div class="btn btn-primary" onClick={this.handleAccept}>Sure</div>
        <div class="btn btn-danger" onClick={this.handleDecline}>No Thanks</div>
       </React.Fragment>
    )
  }
}

export default Confirmation;



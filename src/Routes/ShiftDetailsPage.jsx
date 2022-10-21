import React from 'react';
import ApiContext from '../ApiContext'
import { withRouter } from '../withRouter'




class ShiftDetailsPage extends React.Component {
  
  state = {
    user_id: ''
  }

  componentDidMount = () => {
    const id = this.props.router.params.id
    console.log(id)

    this.setState({
      user_id: id
    })
  }
 
  
  render() {

   console.log(this.props)

    

    return (
      <div>
        Shift Details Page
        This is the page for shift {this.state.user_id}

      </div>
    )
  }
}

export default withRouter(ShiftDetailsPage);
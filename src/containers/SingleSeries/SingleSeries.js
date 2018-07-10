import  React, { Component } from 'react'; 
import Loader from '../../components/Loader/Loader';

class SingleSeries extends Component {
    state = {
        show: ''
    }
    componentDidMount() {
        let showId = this.props.match.params.id; 
        const URL = 'http://api.tvmaze.com/shows/' + showId + "?embed=episodes"; 
        fetch(URL)
          .then((response) => response.json())
          .then(json => this.setState( {show: json}));
    }
    render() {
        const show = this.state; 
        console.log (show); 
        console.log (this.state.show.image); 
        
        return (
            <div>
                <p>Single Series - The show id will be {this.props.match.params.id}</p>
                {show === null && <Loader />}
                {
                    show !== null && 
                    <div>
                         <img src={this.state.show.original} alt="show cover"/>
                         <p>{this.state.show.id}</p>
                         <p>{this.state.show.name}</p>
                         <p>{this.state.show.language}</p>
                         <p>{this.state.show.genres}</p>
                         <p>{this.state.show.time}</p>

                         

                        
                    </div>   
                }
            </div>
        ); 
    }
}

export default SingleSeries; 
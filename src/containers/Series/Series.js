import React, { Component } from 'react'; 
import SeriesList from '../../components/SeriesList/SeriesList';
import Loader from '../../components/Loader/Loader';
import Intro from '../../components/Intro/Intro';

class Series extends Component {
   
    state = {
        series: [], 
        requestedSeries: '',
        seriesName: '', 
        isFetching: false
    }
    

    onSearchInputChange = (e) => {
        this.setState({ seriesName: e.target.value, isFetching: true}); 

        let requestedSeries = e.target.value; 
        this.setState({ requestedSeries : requestedSeries }); 
        const URL = 'http://api.tvmaze.com/search/shows?q=' + requestedSeries; 
        fetch(URL)
          .then((response) => response.json())
          .then(json => this.setState( {series: json, isFetching: false}));
          console.log(e.target.value)
    }

    render(){
        const { series, seriesName, isFetching } = this.state; 
        return(
            <div>
            <Intro message="Here you can find all of your most loved series!"/>
                <div> 
                    <input 
                    value= {seriesName}
                    className='search-bar' 
                    type='text' 
                    onChange= {this.onSearchInputChange} />
                </div>
              
                {
                    series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please type series name into the search field</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No Result Found</p>
                }
                {
                    !isFetching 
                    &&
                    <SeriesList list={this.state.series}/>
                }
                
                
            </div> 
        );
    }
}


export default Series; 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {data} from '../data/dishes'
import {FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';
import {actSelectRestaurant} from '../actions/index'
class Step2 extends Component {
    getListRestaurant(){
        var result =[]
        this.getListRestaurantByMeal().map(value =>{
            var index = result.indexOf(value.restaurant)
            if(index === -1){
                result.push(value.restaurant);
            }  
        })
        return result
    }
    getListRestaurantByMeal(){
        var result = [];
        data.dishes.map(value =>{
            var index = value.availableMeals.indexOf(this.props.meal);
            if(index !== -1){
                result.push(value)
            }
        })
        return result;
    }
    handleChangeRestaurant = (event) =>{
        this.props.selectRestaurant(event.target.value);
        this.setState({
            restaurant : event.target.value
        })
    }
    render(){
        return(
            <FormControl fullWidth={true}  className="mt-16" style = {{width:"300px", marginLeft:"150px"}}>
                <InputLabel >{<span>Please select a restaurant</span>}</InputLabel>
                <Select
                    // value={this.state? this.state.restaurant : ''}
                    defaultValue={this.props.restaurant ? this.props.restaurant : ''}
                    onChange={(event) => this.handleChangeRestaurant(event)}
                >
                    {this.getListRestaurant().map((item) => {
                        return (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl> 
        );
    }
}
const mapStateToProps = state =>{
    return{
        people: state.orderFood.people,
        meal: state.orderFood.meal, 
        restaurant: state.orderFood.restaurant,
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        selectRestaurant: (restaurant) => {
            dispatch(actSelectRestaurant(restaurant))
        },

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Step2);
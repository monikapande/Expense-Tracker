import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { Container, FormGroup, Button, Table  } from 'reactstrap';
import { Link } from 'react-router-dom';
import AppNav from "./AppNav";


 

class Expenses extends Component {
    emptyItem = {
        id:103,
        expenseDate : new Date(),
        description : '',
        location : '',
        amount: 10 ,
        category : {
            "id": 1,
            "name": "Travel"
        }
    }

    constructor(props){
        super(props)
        this.state = {
            date : new Date(),
            isLoading : true,
            expenses : [],
            categories : [],
            item : this.emptyItem
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }


    async componentDidMount(){
        const response= await fetch('/api/categories')
        const body = await response.json();
        this.setState({categories :body , isLoading:false});

        const responseExp= await fetch('/api/expenses')
        const bodyExp = await responseExp.json();
        this.setState({expenses :bodyExp , isLoading:false});
    }

    async handleSubmit(event){
     
        const item = this.state.item;
      
  
        await fetch(`/api/expenses`, {
          method : 'POST',
          headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body : JSON.stringify(item),
        });
        
        event.preventDefault();
        this.props.history.push("/Expenses");
    }

    handleChange(event){
        const target= event.target;
        const value= target.value;
        const name = target.name;
        let item={...this.state.item};
        item[name] = value;
        this.setState({item});
        console.log(item);
      }
  
  
      handleDateChange(date){
        let item={...this.state.item};
        item.expenseDate= date;
        this.setState({item});
      
      }
  

    async remove(id){
        await fetch(`/api/expenses/${id}` , {
          method: 'DELETE' ,
          headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }

        }).then(() => {
          let updatedExpenses = [...this.state.expenses].filter(i => i.id !== id);
          this.setState({expenses : updatedExpenses});
        });

    }


    render() { 
        const title = <h3>Add Expenses</h3>
        const {categories} = this.state;
        const {expenses,isLoading} = this.state;


        if(isLoading)
            return (<div>Loading.....</div>);

        let optionList = categories.map(category=>
            <option id={category.id}>
                {category.name}
            </option>
        );

        let rows= expenses.map(expense => 
            <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.location}</td>
                <td>{expense.category.name}</td>
                <td>{expense.amount}</td>
                
                <td><Button size='sm' color='danger' onClick={()=> this.remove(expense.id)}>Delete</Button></td>
            </tr>
        );
        return (
            <div>
                <AppNav/>

                <Container className="mt-5">
                    <h2 className="text-center mb-4">{title}</h2>
                    <form onSubmit={this.handleSubmit} className="form-styled">
                        <FormGroup>
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                className="form-control"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category" className="form-control">
                                {optionList}
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="expenseDate">Expense Date</label>
                            <DatePicker
                                selected={this.state.item.expenseDate}
                                onChange={this.handleDateChange}
                                className="form-control"
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                className="form-control"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="text"
                                name="amount"
                                id="amount"
                                className="form-control"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup className="d-flex justify-content-between">
                            <Button color="primary" type="submit">
                                Save
                            </Button>
                            <Button color="secondary" tag={Link} to="/">
                                Cancel
                            </Button>
                        </FormGroup>
                    </form>
                </Container>
                <Container className="mt-5">
                    <h3 className="text-center">Expense List</h3>
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Location</th>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>
                </Container>
    </div>
        );
    }
}
 
export default Expenses;

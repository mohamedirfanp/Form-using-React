import React, {Component} from 'react';
import './ClassFormComponent.css';

export class ClassFormComponent extends Component {

	constructor(props)
	{
		super(props)
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			mobileNumber: '',
			address: '',
			gender: ''
		}
	}


	
    render() {
		
		const onSubmitHandler = (event) => 
		{
			event.preventDefault();
			alert(`This Form Data : \nFirstName : ${this.state.firstName}\nLastName : ${this.state.lastName}\nEmail : ${this.state.email}\nPassword : ${this.state.password}\nMobile Number: ${this.state.mobileNumber}\nAddress : ${this.state.address}\nGender: ${this.state.gender}`)
		}
		const {firstName, lastName, email, password, mobileNumber, address, gender} = this.state;

        return (
            <React.Fragment>
				<h1>Class Form Component</h1>
				<section className='card'>
					
				<h4>Class Form</h4>
				<form onSubmit={onSubmitHandler}>
					<div className="form-group">
						<label htmlFor="firstName">First Name : </label>
						<input type="text" className="form-control" id="firstName" placeholder="Enter First Name"  required
						value={firstName} onChange={(event) => {
							this.setState( {firstName : event.target.value})
						}}/>
					</div>
					<div className="form-group">
						<label htmlFor="lastName">Last Name : </label>
						<input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" required
						value={lastName}  onChange={(event) => {
							this.setState( {lastName : event.target.value})
						}} />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email : </label>
						<input type="email" className="form-control" id="email" placeholder="Enter Email" required
						value={email} onChange={(event) => {
							this.setState( {email : event.target.value})
						}}/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password : </label>
						<input type="password" className="form-control" id="password" placeholder="Enter Password" required
						value={password} onChange={(event) => {
							this.setState( {password : event.target.value})
						}}/>
					</div>
					<div className="form-group">
						<label htmlFor='mobileNumber'>Mobile Number : </label>
						<input type="number" className="form-control" id="mobileNumber" placeholder="Enter Mobile Number" required
						value={mobileNumber}  onChange={(event) => {
							this.setState( {mobileNumber : event.target.value})
						}}/>
					</div>
					<div className="form-group">
						<label htmlFor="address">Address : </label>
						<textarea id='address' placeholder='Enter Address' required
						value={address} onChange={(event) => {
							this.setState( {address : event.target.value})
						}}></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="Gender">Gender : </label>
						<select value={gender} id='Gender' onChange={(event) => {
							this.setState( {gender : event.target.value})
						}}>
							<option>Select Gender</option>
							<option value='male'>Male</option>
							<option value='female'>Female</option>	
						</select>
					</div>
					
					<div className="form-group">
						<button type='submit'>Submit</button>
					</div>
				</form>
				</section>
			</React.Fragment>
        )
    }
}

export default ClassFormComponent

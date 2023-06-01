import React, { useState } from 'react'

function FunctionFormComponent() {

    const [formObj, setFormObj] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobileNumber: '',
        address: '',
        gender: ''

    })
    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert(`This Form Data : \nFirstName : ${firstName}\nLastName : ${lastName}\nEmail : ${email}\nPassword : ${password}\nMobile Number: ${mobileNumber}\nAddress : ${address}\nGender: ${gender}`)
    }

  return (
    <React.Fragment>
        <h2>Function Form Component</h2>
        <section className='card'>
				<h4>Function Form</h4>
				<form onSubmit={onSubmitHandler}>
					<div className="form-group">
						<label htmlFor="firstName">First Name : </label>
						<input type="text" className="form-control" id="firstName" placeholder="Enter First Name"  required
						value={formObj.firstName} onChange={(event) => {
							setFormObj({...formObj, firstName: event.target.val })
						}}/>
					</div>
					<div className="form-group">
						<label htmlFor="lastName">Last Name : </label>
						<input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" required
						value={formObj.lastName}   onChange={(event) => {
							setFormObj({
                                ...formObj,
                                lastName: event.target.value
                            }   )
						}} />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email : </label>
						<input type="email" className="form-control" id="email" placeholder="Enter Email" required
						value={formObj.email}  onChange={(event) => {
							setFormObj({
                                ...formObj,
                                email: event.target.value
                            })
						}}/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password : </label>
						<input type="password" className="form-control" id="password" placeholder="Enter Password" required
						value={formObj.password} onChange={(event) => {
							setFormObj({
                                ...formObj,
                                password: event.target.value
                            })
						}}/>
					</div>
					<div className="form-group">
						<label htmlFor='mobileNumber'>Mobile Number : </label>
						<input type="number" className="form-control" id="mobileNumber" placeholder="Enter Mobile Number" required
						value={formObj.mobileNumber}  onChange={(event) => {
							setFormObj({
                                ...formObj,
                                mobileNumber: event.target.value
                            } )
						}}/>
					</div>
					<div className="form-group">
						<label htmlFor="address">Address : </label>
						<textarea id='address' placeholder='Enter Address' required
						value={formObj.address} onChange={(event) => {
							setFormObj({
                                ...formObj,
                                address: event.target.value
                            })
						}}></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="Gender">Gender : </label>
						<select value={formObj.gender} id='Gender' onChange={(event) => {
							setFormObj({
                                ...formObj,
                                gender: event.target.value
                            }  )
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

export default FunctionFormComponent

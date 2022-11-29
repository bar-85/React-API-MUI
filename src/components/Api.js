import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'

const Api = () => {
	const usersUrl = 'https://jsonplaceholder.typicode.com/users'

	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch(usersUrl).then(result => {
			result.json().then(res => {
				setUsers(res)
			})
		})
	}, [])

	return (
			<TableContainer component={Paper} sx={{ maxHeight: '500px', width: '90%', margin: 'auto' }}>
				<Table aria-label='simple table' stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Address</TableCell>
							<TableCell>Phone</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map(user => {
							return (
								<TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell>{user.id}</TableCell>
									<TableCell>{user.name}</TableCell>
									<TableCell>{user.email}</TableCell>
									<TableCell>{user.address.city}</TableCell>
									<TableCell>{user.phone}</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
	)
}

export default Api

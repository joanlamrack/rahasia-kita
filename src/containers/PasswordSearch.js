import React, { Component } from "react";
import { DataTable } from "carbon-components-react";
const {
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
	TableHeader
} = DataTable;
export default class PasswordSearch extends Component {
	render() {
		return (
			<div>
				<DataTable
					rows={[
						{
							id: "a",
							name: "Load Balancer 3",
							protocol: "HTTP"
						},
						{
							id: "b",
							name: "Load Balancer 1",
							protocol: "HTTP"
						},
						{
							id: "c",
							name: "Load Balancer 2",
							protocol: "HTTP"
						}
					]}
					headers={[
						{ key: "name", header: "Name" },
						{ key: "protocol", header: "Protocol" },
						{ key: "port", header: "Port" }
					]}
					render={({ rows, headers, getHeaderProps }) => (
						<TableContainer title="DataTable">
							<div className="bx--data-table-v2-container">
								<h4></h4>
								<Table>
									<TableHead>
										<TableRow>
											{headers.map(header => (
												<TableHeader {...getHeaderProps({ header })}>
													{header.header}
												</TableHeader>
											))}
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map(row => (
											<TableRow key={row.id}>
												{row.cells.map(cell => (
													<TableCell key={cell.id}>{cell.value}</TableCell>
												))}
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						</TableContainer>
					)}
				/>
			</div>
		);
	}
}

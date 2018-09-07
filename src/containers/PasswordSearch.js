import React, { Component } from "react";
import { DataTable, ModalWrapper } from "carbon-components-react";
import "carbon-components/css/carbon-components.min.css";
import { iconAdd, iconDelete } from "carbon-icons";
import PasswordForm from "./PasswordForm";

const {
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
	TableHeader,
	TableToolbar,
	TableToolbarSearch,
	TableToolbarAction,
	TableToolbarContent,
	TableSelectAll,
	TableSelectRow
} = DataTable;

export default class PasswordSearch extends Component {
	constructor() {
		super();
		this.headers = [
			{ key: "url", header: "Tautan" },
			{ key: "username", header: "Username" },
			{ key: "password", header: "Kata Sandi" },
			{ key: "createdAt", header: "Kapan dibuat" },
			{ key: "updatedAt", header: "Kapan diperbaharui" }
		];
		this.title = "Daftar Rahasia";

		this.state = {
			rows: [
				{
					id: "a",
					url: "Load Balancer 3",
					username: "HTTP",
					password: "alala"
				},
				{
					id: "b",
					url: "http://asdfsdf",
					username: "Load Balancer 1",
					password: "LBWasjdfas"
				},
				{
					id: "c",
					url: "Load Balancer 2",
					username: "HTTP",
					password: "asdfasdf"
				}
			]
		};
	}

	handleDeletion = selectedRows => {
		console.log(selectedRows);
	};

	render() {
		return (
			<div>
				<DataTable
					rows={this.state.rows}
					headers={this.headers}
					render={({
						rows,
						headers,
						getHeaderProps,
						getSelectionProps,
						onInputChange,
						selectedRows
					}) => (
						<TableContainer title={this.title}>
							<TableToolbar>
								<TableToolbarSearch onChange={onInputChange}/>
								<TableToolbarContent>
									<ModalWrapper
										id="transactional-passive-modal"
										className="some-class"
										passiveModal
										buttonTriggerText="+"
										triggerButtonKind="secondary"
										modalLabel="Tambah Kata Sandi"
									>
										<PasswordForm />
									</ModalWrapper>
									<TableToolbarAction
										icon={iconDelete}
										iconDescription="delete"
										onClick={() => this.handleDeletion(selectedRows)}
									/>
								</TableToolbarContent>
							</TableToolbar>
							<Table zebra={true}>
								<TableHead>
									<TableRow>
										<TableSelectAll {...getSelectionProps()} />
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
											<TableSelectRow {...getSelectionProps({ row })} />
											{row.cells.map(cell => (
												<TableCell key={cell.id}>{cell.value}</TableCell>
											))}
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					)}
				/>
			</div>
		);
	}
}
s
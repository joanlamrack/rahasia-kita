import React, { Component, Fragment } from "react";
import {
	DataTable,
	ModalWrapper,
	DataTableSkeleton,
	SkeletonText
} from "carbon-components-react";
import "carbon-components/css/carbon-components.min.css";
import { iconDelete } from "carbon-icons";
import PasswordForm from "./PasswordForm";
import { getPasswordAction } from "../js/actions/passwords";
import { connect } from "react-redux";

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

const mapStateToProps = state => {
	return {
		passwords: state.passwords.data,
		loading: state.passwords.loading,
		error: state.passwords.error,
		useruid: state.login.uid
	};
};

const maptDispatchToProps = dispatch => {
	return {
		fetchPassword: useruid => {
			dispatch(getPasswordAction(useruid));
		}
	};
};

export class PasswordSearch extends Component {
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
	}

	handleDeletion = selectedRows => {
		console.log(selectedRows);
	};

	render() {
		let dataTableFilled = (
			<DataTable
				rows={this.props.passwords}
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
							<TableToolbarSearch onChange={onInputChange} />
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
		);

		let dataTableLoading = (
			<Fragment>
				<SkeletonText />
				<DataTableSkeleton />
			</Fragment>
		);

		return this.props.passwords.length ? dataTableFilled : dataTableLoading;
	}

	componentWillMount() {
		this.props.fetchPassword(this.props.useruid);
	}
}

export default connect(
	mapStateToProps,
	maptDispatchToProps
)(PasswordSearch);

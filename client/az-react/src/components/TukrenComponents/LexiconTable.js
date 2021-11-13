import React from "react"
import { useSortBy, useTable, usePagination } from "react-table"


import ImportExportIcon from '@material-ui/icons/ImportExport';
import Table from '@material-ui/core/Table';
import TablePagination from '@mui/material/TablePagination';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@material-ui/core/Paper';
import Button from "@mui/material/Button";
import Select from '@mui/material/Select';
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

const LexiconTable = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        visibleColumns,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 }
        },
        useSortBy,
        usePagination

    );

    const onChangeInSelect = event => {
        setPageSize(Number(event.target.value));
    }
    const onChangeInInput = event => {
        const page = event.target.value ? Number(event.target.value) - 1 : 0
        console.log(event)
        gotoPage(page);
    }


    const generateSortingIndicator = column => {
        return column.isSorted ? (column.isSortedDesc ? "^" : "��") : ""
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} {...getTableProps}>
                <TableHead>
                    {headerGroups.map(headerGroup => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <TableCell component="th" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    {generateSortingIndicator(column)}
                                </TableCell>
                            ))}
                        </TableRow>
                        ))} 
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <TableRow key={row.conlang} {...row.getRowProps()} /*onClick={() => setWord(row)}*/>
                                {row.cells.map(cell => {
                                    return <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
                    <Grid container>
                        <Grid item sm={3}>
                            <Button
                                onClick={() => gotoPage(0)}
                                disabled={!canPreviousPage}
                            >
                                {"<<"}
                            </Button>
                            <Button
                                onClick={previousPage}
                                disabled={!canPreviousPage}
                            >
                                {"<"}
                            </Button>
                        </Grid>
                        <Grid item sm={2}>
                            <strong>
                                {pageIndex + 1} of {pageCount}
                            </strong>
                        </Grid>
                        <Grid item sm={2}>
                            <Input
                                type="number"
                                min={1}
                                style={{ width: 25 }}
                                max={pageCount}
                                defaultValue={pageIndex + 1}
                                onChange={onChangeInInput}
                            />
                        </Grid>
                        <Grid item sm={2}>
                            <FormControl sx={{ m: 1, width: 125 }}>
                                <Select
                                    type="select"
                                    value={pageSize}
                                    onChange={onChangeInSelect}
                                    MenuProps={MenuProps}
                                >
                                    {[10, 20, 30, 40, 50].map(pageSize => (
                                        <MenuItem 
                                            key={pageSize}
                                            value={pageSize}
                                        >
                                            Show {pageSize}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sm={3}>
                            <Button
                                onClick={nextPage}
                                disabled={!canNextPage}
                            >
                                {">"}
                            </Button>
                            <Button
                                onClick={() => gotoPage(pageCount - 1)}
                                disabled={!canNextPage}
                            >
                                {">>"}
                            </Button>
                        </Grid>
                    </Grid>
            </Table>
        </TableContainer>
    )
}

export default LexiconTable;

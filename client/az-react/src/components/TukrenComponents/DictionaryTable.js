import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { useTable } from "react-table";

import API from "../../utils/api";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import ImportExportIcon from '@material-ui/icons/ImportExport';
import TableFooter from '@material-ui/core/TableFooter';
import LexiconTable from './LexiconTable';

const useStyles = makeStyles({
    sortButton: {
        alignSelf: "right"
    }
});

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

export default function DictionaryTable() {
    const classes = useStyles();

    const [activeWord, setWord] = useState();
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        API.getTukrenDictionary()
            .then(res => {
                //tableSorter(res.data);
                setWordList(res.data);
            })
    }, []);

    /////////////////////////////////////////////
    //////////// PAGINATION /////////////////////
    /////////////////////////////////////////////
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - wordList.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    /////////////////////////////////////////////
    ///////////// TABLE SORT ////////////////////
    /////////////////////////////////////////////

    const tableSorter = (data, filter) => {
        if (!filter) {
            filter = "conlang"
        }
        let newList = data.sort(function (a,b){
            var wordA = a[filter].toUpperCase(); // ignore upper and lowercase
            var wordB = b[filter].toUpperCase(); // ignore upper and lowercase
            if (wordA < wordB) {
                return -1;
            }
            if (wordA > wordB) {
                return 1;
            }
            return 0;
        });
        setWordList(newList);
    }

    const selectWord = () => {
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {activeWord.conlang}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Part of Speech: {activeWord.pos}
                    </Typography>
                    <Typography variant="h6" component="h3">
                        Translation: {activeWord.english}
                    </Typography>
                    <Typography variant="body2" component="p">
                        In a sentence: {activeWord.sentence}
                    </Typography>
                </CardContent>
            </Card>
            )
    }   

    const columns = useMemo(
        () => [
            {
                Header: "Tukren",
                accessor: "conlang",
                disableSortBy: false
            },
            {
                Header: "English",
                accessor: "english",
                disableSortBy: false 
            },
            {
                Header: "PoS",
                accessor: "pos",
                disableSortBy: false
            }
        ],
        []
    )

    return (
        <Grid container>
            {activeWord !== undefined ?
                selectWord()
                :
                null
            } 
            <LexiconTable columns={columns} data={wordList}/> {/*
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Grid container direction="row" justifyContent="space-between"alignItems="center">
                                    <Grid xs={11}>
                                        Word
                                    </Grid>
                                    <Grid xs={1}>
                                        <ImportExportIcon style={{ cursor: "pointer" }} onClick={() => tableSorter(wordList, "conlang")} className="sortButton"/>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                    <Grid xs={11}>
                                        English
                                    </Grid>
                                    <Grid xs={1}>
                                        <ImportExportIcon style={{ cursor: "pointer" }} onClick={() => tableSorter(wordList, "english")} className="sortButton"/>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                    <Grid xs={11}>
                                        PoS
                                    </Grid>
                                    <Grid xs={1}>
                                        <ImportExportIcon style={{ cursor: "pointer" }} onClick={() => tableSorter(wordList, "pos")} className="sortButton"/>
                                    </Grid>
                                </Grid>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? wordList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : wordList
                            ).map(row => (
                                <TableRow key={row.conlang} onClick={() => setWord(row)}>
                                    <TableCell>{row.conlang}</TableCell>
                                    <TableCell>{row.english}</TableCell>
                                    <TableCell>{row.pos}</TableCell>
                                </TableRow>
                            ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination    
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={wordList.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                    'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
                            */}
        </Grid>
    );
}
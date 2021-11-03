import React from 'react';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
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

import ImportExportIcon from '@material-ui/icons/ImportExport';

const useStyles = makeStyles({
    sortButton: {
        alignSelf: "right"
    }
});


export default function DictionaryTable() {
    const classes = useStyles();

    const [activeWord, setWord] = useState();



    const placeholderJSON = [
        {
            conlang: "Nabar",
            english: "Royal",
            pos: "Noun"
        },
        {
            conlang: "Nakei",
            english: "Friend",
            pos: "Noun"
        },
        {
            conlang: "Nodar",
            english: "Root",
            pos: "Noun"
        },
    ]

    const selectWord = () => {
        console.log(activeWord);  
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
                        In a sentence:
                    </Typography>
                </CardContent>
            </Card>
            )
    }   

    const tableMaker = () => {
        return placeholderJSON.map((word, i) => {
            return (
            <TableRow onClick={() => setWord(word)}>
                <TableCell>{word.conlang}</TableCell>
                <TableCell>{word.english}</TableCell>
                <TableCell>{word.pos}</TableCell>
            </TableRow>
            )
        })
    }

    return (
        <Grid container>
            {activeWord !== undefined ?
                selectWord()
                :
                null
            }
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Grid container direction="row" justifyContent="space-between"alignItems="center">
                                    <Grid xs={11}>
                                        Word
                                    </Grid>
                                    <Grid xs={1}>
                                        <ImportExportIcon className="sortButton"/>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                    <Grid xs={11}>
                                        English
                                    </Grid>
                                    <Grid xs={1}>
                                        <ImportExportIcon className="sortButton"/>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                    <Grid xs={11}>
                                        PoS
                                    </Grid>
                                    <Grid xs={1}>
                                        <ImportExportIcon className="sortButton"/>
                                    </Grid>
                                </Grid>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableMaker()}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}
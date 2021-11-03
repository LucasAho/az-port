import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
});


export default function PhonologyTables() {
    const classes = useStyles();

    return (
        <Grid container direction="column">
            <Grid item>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align='center' colSpan={2}>Labial</TableCell>
                            <TableCell align='center' colSpan={2}>Alveolar</TableCell>
                            <TableCell align='center' colSpan={2}>Palatal</TableCell>
                            <TableCell>Velar</TableCell>
                            <TableCell align='center' colSpan={2}>Uvular</TableCell>
                            <TableCell>Guttural</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Plosive
                                </TableCell>
                                <TableCell>b</TableCell>
                                <TableCell>p</TableCell>
                                <TableCell>t</TableCell>
                                <TableCell>d</TableCell>
                                <TableCell>c</TableCell>
                                <TableCell>kd/ɟ/</TableCell>
                                <TableCell>k</TableCell>
                                <TableCell>q</TableCell>
                                <TableCell>g/ɢ</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Nasal
                                </TableCell>
                                <TableCell align='center' colSpan={2}>m</TableCell>
                                <TableCell align='center' colSpan={2}>n</TableCell>
                                <TableCell align='center' colSpan={2}></TableCell>
                                <TableCell></TableCell>
                                <TableCell align='center' colSpan={2}></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Fricative
                                </TableCell>
                                <TableCell colSpan={2} align="center">f</TableCell>
                                <TableCell>s</TableCell>
                                <TableCell>z</TableCell>
                                <TableCell colSpan={2} align="center"></TableCell>
                                <TableCell></TableCell>
                                <TableCell colSpan={2} align="center"></TableCell>
                                <TableCell>h</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Lat. Fricative
                                </TableCell>
                                <TableCell colSpan={2} align="center"></TableCell>
                                <TableCell>hl/ɬ/</TableCell>
                                <TableCell>zl/ɮ/</TableCell>
                                <TableCell colSpan={2} align="center"></TableCell>
                                <TableCell></TableCell>
                                <TableCell colSpan={2} align="center"></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Liquid
                                </TableCell>
                                <TableCell colSpan={2} align="center"></TableCell>
                                <TableCell>l</TableCell>
                                <TableCell>r/ɹ/</TableCell>
                                <TableCell colSpan={2} align="center">y/j/</TableCell>
                                <TableCell>w</TableCell>
                                <TableCell colSpan={2} align="center"></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            {
                //////////
                //Vowels//
                //////////
            }
            <Grid item>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align='center' colSpan={2}>Front</TableCell>
                            <TableCell align='center' colSpan={2}>Central</TableCell>
                            <TableCell align='center' colSpan={2}>Back</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Close
                                </TableCell>
                                <TableCell align='center'>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid xs={6}>
                                            i
                                        </Grid>
                                        <Grid xs={6}>
                                            ĩ/i:/
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell align='center'>
                                </TableCell>
                                <TableCell colSpan={2} align='center'></TableCell>
                                <TableCell align='center'>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid xs={6}>
                                            uh/ɯ/
                                        </Grid>
                                        <Grid xs={6}>
                                            ũh/ɯ:/
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell align='center'>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid xs={6}>
                                            u
                                        </Grid>
                                        <Grid xs={6}>
                                            ũ/u:/
                                        </Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Middle
                                </TableCell>
                                <TableCell align='center'></TableCell>
                                <TableCell align='center'>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid xs={6}>
                                            e/ø/
                                        </Grid>
                                        <Grid xs={6}>
                                            eh/ø:/
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell colSpan={2} align='center'></TableCell>
                                <TableCell align='center'></TableCell>
                                <TableCell align='center'>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid xs={6}>
                                            o
                                        </Grid>
                                        <Grid xs={6}>
                                            õ/o:/
                                        </Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Open
                                </TableCell>
                                <TableCell colSpan={2} align='center'></TableCell>
                                <TableCell align='center'>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid xs={6}>
                                            a
                                        </Grid>
                                        <Grid xs={6}>
                                            ã/a:/
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell colSpan={2} align='center'></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}
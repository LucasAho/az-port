import React from 'react';
import API from "../../utils/api";
import { useForm } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
});

export default function CreateWord() {
    const classes = useStyles();
    const { handleSubmit, register, formState: { errors }, reset } = useForm();
    const onSubmit = (data, e) => {
        API.createNewWord(data);
        e.target.reset();
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
        >
            <Typography>Word:</Typography>
            <input
                type="conlang"
                {...register("conlang", {
                    required: "Required",
                })}
            />
            {errors.conlang && errors.conlang.message}
            <Typography>Translation:</Typography>
            <input
                type="english"
                {...register("english", {
                    required: "Required",
                })}
            />
            {errors.english && errors.english.message}
            <Typography>Part of Speech:</Typography>
            <input
                type="pos"
                {...register("pos", {
                    required: "Required",
                })}
            />
            {errors.pos && errors.pos.message}
            <Typography>Language:</Typography>
            <input
                type="language"
                {...register("language", {
                })}
            />
            {errors.language && errors.language.message}
            <Typography>In a Sentence (Conlang | English):</Typography>
            <input
                type="sentence"
                {...register("sentence", {
                })}
            />
            {errors.sentence && errors.sentence.message}
            <button type="submit">Submit</button>
        </Box>
    )
    
}
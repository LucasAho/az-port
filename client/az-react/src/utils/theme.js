import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#180D35",
        },
        secondary: {
            main: "#2E8CA3" 
        },
    },
    typography: {
        fontSize: 12
    }
});

export default theme;
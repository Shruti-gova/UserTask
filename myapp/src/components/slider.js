import React from "react";
import { Button } from "@mui/material";
import Stepper from '@mui/material/Stepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';//
const MyCollection = [
    {

        label: "First Picture",
        imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
    },
    {
        label: "Second Picture",
        imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
    },
    {
        label: "Third Picture",
        imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
    },
];
const Slider = () => {
    const CollectionSize = MyCollection.length;
    const theme = createTheme();
    const [index, setActiveStep] = React.useState(0);

    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    return (
        <div
            style={{
                marginLeft: "40%",
            }}
        >
            <h2>How to Create Image Slider in ReactJS?</h2>
            <div
                style={{
                    maxWidth: 400,
                    flexGrow: 1,
                }}
            >
                <Paper
                    square
                    elevation={0}
                    style={{
                        height: 50,
                        display: "flex",
                        paddingLeft: theme.spacing(4),
                        backgroundColor: theme.palette.background.default,
                        alignItems: "center",
                    }}
                >
                    <Typography>{MyCollection[index].label}</Typography>
                </Paper>
                <img
                    src={MyCollection[index].imgPath}
                    style={{
                        height: 255,
                        width: "100%",
                        maxWidth: 400,
                        display: "block",
                        overflow: "hidden",
                    }}
                    alt={MyCollection[index].label}
                />
                <Stepper
                    variant="text"
                    position="static"
                    index={index}
                    steps={CollectionSize}
                    nextbutton={
                        <Button
                            size="small"
                            onClick={goToNextPicture}
                            disabled={index === CollectionSize - 1}
                        >
                            Next
                            {theme.direction !== "rtl" ? (
                                <KeyboardArrowRightIcon />
                            ) : (
                                <KeyboardArrowLeftIcon />
                            )}
                        </Button>
                    }
                />
            </div>
        </div>
    );
};

export default Slider;
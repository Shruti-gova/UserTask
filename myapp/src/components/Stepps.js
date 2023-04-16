import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import ImageList from './ImageList';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
const steps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        filter: 'grayscale(1)',
        brightfilter: 'brightness(1)'
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        filter: 'grayscale(1)',
        brightfilter: 'brightness(1)'

    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
        filter: 'grayscale(1)',
        brightfilter: 'brightness(1)'

    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        filter: 'grayscale(1)',
        brightfilter: 'brightness(1)'

    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        filter: 'grayscale(1)',
        brightfilter: 'brightness(1)'

    },
];


export default function TextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ display: "grid", justifyContent: "center" }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
            </Paper>

            <img
                src={steps[activeStep].imgPath}

                style={{
                    height: 500,
                    objectFit: 'cover',
                    display: "block",
                    overflow: "hidden",
                }}
                alt={steps[activeStep].label}
            />
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />

            <ImageList sx={{ height: 450 }} cols={5} rowHeight={164}>
                {steps.map((item) => (
                    <ImageListItem key={item.imgPath}>
                        <img
                            src={`${item.imgPath}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.imgPath}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            // onMouseOver={() => { filter: `${item.brightfilter}` }}
                            loading="lazy"
                            style={{
                                // height: 500,
                                // objectFit: 'cover',
                                width: 150,
                                display: "block",
                                overflow: "hidden",
                                filter: `${item.filter}`,
                                "&:hover": {
                                    filter: `${item.brightfilter}`
                                }

                            }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box >
    );
}
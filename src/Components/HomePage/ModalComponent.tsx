import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import { Box, Button, TextField } from '@mui/material';
import { useRef, useState } from "react";
import ProjectCardModalType from "../../TypeDefs/ProjectAddCardModal";
import Snackbar from '@mui/material/Snackbar';
import React from "react";

const ModalComponent: React.FC<{ SetProjectDetails: (prop: ProjectCardModalType) => void }> = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const TitleRef = useRef<HTMLInputElement>();
    const DescriptionRef = useRef<HTMLInputElement>();
    const ProjectLinkRef = useRef<HTMLInputElement>();
    const [SnackBarShow, SetSnackBarShow] = useState(false);
    const AddDataToArray = () => {
        return new Promise<void>((resolve, reject) => {
            if (localStorage.getItem("Projects") != null) {
                const FetchPreviousDataFromLocalStorage: ProjectCardModalType[] = JSON.parse(localStorage.getItem("Projects") || "");
                FetchPreviousDataFromLocalStorage.push({ title: TitleRef.current?.value, description: DescriptionRef.current?.value,Link:ProjectLinkRef.current?.value});
                localStorage.setItem("Projects", JSON.stringify(FetchPreviousDataFromLocalStorage));
            }
            else {
                const ProjectData = [{ title: TitleRef.current?.value, description: DescriptionRef.current?.value,Link:ProjectLinkRef.current?.value}];
                localStorage.setItem("Projects", JSON.stringify(ProjectData));
            }
            setOpen((prev) => !prev);
            props.SetProjectDetails({ title: TitleRef.current?.value, description: DescriptionRef.current?.value,Link:ProjectLinkRef.current?.value});
            resolve();
            console.log(reject);
        })
    }
    const handleCloseForSnackBar = (event: React.SyntheticEvent | Event, reason?: string) => {
        console.log(event);
        if (reason === 'clickaway') {
            return;
        }
        SetSnackBarShow(false);
    };
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        "& > :not(style)": { m: 2 }
    };
    return <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography variant="h4" color={"blue"} />
                Add New Project
                <TextField placeholder='Enter Project Title' variant='standard' fullWidth inputRef={TitleRef} required = {true}></TextField>
                <TextField placeholder='Description' variant='standard' fullWidth inputRef={DescriptionRef} required = {true}></TextField>
                <TextField placeholder='Project Link' variant='standard' fullWidth inputRef={ProjectLinkRef} required = {true}></TextField>
                <Button variant="contained" onClick={() => {
                    AddDataToArray().then(() => {
                        SetSnackBarShow(true);
                    })
                }}>Submit</Button>
            </Box>
        </Modal>
        <Button onClick={handleOpen} sx={{ width: '135px !important', position: 'fixed', top: '93%', left: "45%" }} variant='outlined'>Add Project</Button>
        {SnackBarShow && <Snackbar
            open={SnackBarShow}
            autoHideDuration={2000}
            onClose={handleCloseForSnackBar}
            message="Project Added !"
        />}
    </>
}
export default ModalComponent;
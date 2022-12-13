import React from 'react';
import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Input,
} from "@mui/material";
import "./CreateNewWallet.css";

const CreateNewWallet: FunctionComponent = () => {
  return (
    <div className="create-new-wallet">
      <div className="sign-up1">Create Wallet</div>
      <TextField
        className="box-21"
        sx={{ width: 343 }}
        color="primary"
        variant="standard"
        type="text"
        label="Wallet Name"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className="box-2-copy"
        sx={{ width: 343 }}
        color="primary"
        variant="standard"
        type="text"
        label="Private Key if restore old wallet"
        size="medium"
        margin="none"
      />
      <TextField
        className="box-22"
        sx={{ width: 343 }}
        color="primary"
        variant="standard"
        type="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <Icon>visibility</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Password2"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className="box-2-copy-2"
        sx={{ width: 343 }}
        color="primary"
        variant="standard"
        type="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <Icon>visibility</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Confirm password"
        size="medium"
        margin="none"
        required
      />
      <div className="entrytab1">
        <div className="group-div1" />
      </div>
      <div className="button-shape-2">
        <div className="controls-buttons-big-acti" />
        <button className="button-shape1" />
        <div className="label1">Open</div>
      </div>
      <div className="sign-up2">Create</div>
    </div>
  );
};

export default CreateNewWallet;

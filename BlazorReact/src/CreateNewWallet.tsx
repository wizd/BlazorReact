import React from 'react';
import { FunctionComponent, useCallback } from "react";
import {
  TextField,
  Input,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import "./CreateNewWallet.css";

const CreateNewWallet: FunctionComponent = () => {
  return (
    <div className="create-new-wallet">
      <div className="rectangle-div1" />
      <div className="sign-up1">Create Wallet</div>
      <TextField
        className="box-21"
        sx={{ width: 343 }}
        color="primary"
        variant="standard"
        type="text"
        label="Wallet Name"
        placeholder="Wallet name"
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
        placeholder="Private Key if restore old wallet"
        size="medium"
        margin="none"
      />
      <TextField
        className="box-22"
        sx={{ width: 343 }}
        color="primary"
        variant="standard"
        type="password"
        label="Password1"
        placeholder="Input Password"
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
        placeholder="Confirm Password"
        size="medium"
        margin="none"
        required
      />
      <div className="entrytab1">
        <div className="group-div1" />
      </div>
      <div className="button-shape-21">
        <div className="controls-buttons-big-acti1" />
        <button className="button-shape1" />
        <div className="label1">Open</div>
      </div>
      <div className="sign-up2">Create</div>
    </div>
  );
};

export default CreateNewWallet;

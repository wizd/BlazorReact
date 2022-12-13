import React from 'react';
import { FunctionComponent } from "react";
import {
  TextField,
  Input,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import "./LoginComponent.css";

export const LoginComponent: FunctionComponent = () => {
  return (
    <div className="group-div2">
      <TextField
        className="box"
        fullWidth
        color="primary"
        variant="standard"
        type="text"
        label="Email"
        placeholder="Email"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className="box1"
        fullWidth
        color="primary"
        variant="standard"
        type="text"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <Icon>visibility</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Password"
        placeholder="Password"
        size="medium"
        margin="none"
        required
      />
      <div className="forgot-password">Forgot password?</div>
      <button className="group-button">
        <div className="controls-buttons-mini-bl" />
        <img className="iconglyphnext" alt="" src="../iconglyphnext.svg" />
        <div className="sign-in">Sign In</div>
      </button>
    </div>
  );
};


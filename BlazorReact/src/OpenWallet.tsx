import React from 'react';
import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import WalletSelect from "./WalletSelect";
import "./OpenWallet.css";

const OpenWallet: FunctionComponent = () => {
  return (
    <div className="open-wallet">
      <div className="sign-in">Open Wallet</div>
      <TextField
        className="box-2"
        sx={{ width: 291 }}
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
        label="Password"
        size="medium"
        margin="normal"
        required
      />
      <div className="forgot-password-copy-2">Forgot password?</div>
      <div className="entrytab">
        <div className="group-div" />
      </div>
      <div className="sign-up">Create</div>
      <div className="account-card">
        <div className="account-card1">
          <WalletSelect />
          <div className="account-card2">Default Wallet</div>
          <img className="wallet-icon" alt="" src="/imgs/wallet.svg" />
        </div>
      </div>
      <button className="button-shape" />
      <div className="label">Open</div>
    </div>
  );
};

export default OpenWallet;
